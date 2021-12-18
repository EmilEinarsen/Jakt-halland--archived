// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import useSWRImmutable from 'swr/immutable'
import { client, validateError, Error } from 'utils/contentfulClient'

export enum COURSE_TYPE {
	HUNTING_LICENCE_NORMAL = 'HUNTING_LICENCE_NORMAL',
	HUNTING_LICENCE_INTENSE = 'HUNTING_LICENCE_INTENSE',
	HUNTING_LICENCE_SUMMER = 'HUNTING_LICENCE_SUMMER',
	HUNTING_LEADER = 'HUNTING_LEADER'
}

export enum COURSE_LOCATION {
	Laholm = 'Laholm',
	Halmstad = 'Halmstad'
}

type SingleDayCourse = {
	date: string
	type: COURSE_TYPE.HUNTING_LEADER
	location: COURSE_LOCATION
	isFull: boolean
	shouldHide: boolean
}

type MultiDayCourse = {
	date: string
	endDate: string
	dateRange: [string,string]
	type: 
		| COURSE_TYPE.HUNTING_LICENCE_INTENSE 
		| COURSE_TYPE.HUNTING_LICENCE_NORMAL 
		| COURSE_TYPE.HUNTING_LICENCE_SUMMER
	location: COURSE_LOCATION
	isFull: boolean
	shouldHide: boolean
}

type Course = SingleDayCourse | MultiDayCourse

type CourseData = {
	courses: Course[]
	sorted: { 
		[COURSE_TYPE.HUNTING_LEADER]: SingleDayCourse[]
		[COURSE_TYPE.HUNTING_LICENCE_NORMAL]: MultiDayCourse[]	
		[COURSE_TYPE.HUNTING_LICENCE_INTENSE]: MultiDayCourse[]
		[COURSE_TYPE.HUNTING_LICENCE_SUMMER]: MultiDayCourse[]
	}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CourseData>
) {
	try {
		const { items, ...rest } = await client.getEntries<Course>()
		const courses = items
			.map(item => item.fields)
			.filter(v => !v.shouldHide)
			.filter(v => new Date() < new Date(v.date))
			.map(v => {
				COURSE_TYPE[v.type] || console.error(`Unimplemented type: ${v.type}`)
				COURSE_LOCATION[v.location] || console.error(`Unimplemented location: ${v.location}`)
				return v.type !== COURSE_TYPE.HUNTING_LEADER ? {
					...v,
					dateRange: [v.date, v.endDate] as MultiDayCourse['dateRange'],
				} : v
			})
		res.status(200).send({
			courses,
			sorted: courses.reduce((p,c) => {
				p[c.type] || (p[c.type] = [])
				p[c.type]!.push(c as any)
				return p
			}, Object.keys(COURSE_TYPE).reduce((p,c) => (p[c as COURSE_TYPE] = [], p), {} as CourseData['sorted']))
		})
	} catch (error) {
		if(validateError(error)) throw error
		throw new Error('Unknown')
	}
}

export const useCourses = () => {
	const props = useSWRImmutable<CourseData, Error>('api/courses')
	
	return { 
		...props,
		isLoading: !props.error && !props.data,
		isError: props.error && !props.data,
	}
}
