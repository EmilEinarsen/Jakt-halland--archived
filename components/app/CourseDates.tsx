import React from 'react'
import { Text } from 'components/core/Text'
import { TransitionLayout } from 'layout/TransitionLayout'
import { Collapse, Stat, StatLabel, StatNumber } from '@chakra-ui/react'

interface CourseDatesProps {
	dates?: [string,string][] | string[] | Date[]
	isError?: boolean
}

export const CourseDates = ({ dates, isError }: CourseDatesProps) => 
	<Collapse in={dates?.length !== 0 && !isError}>
		<Stat as="p">
			<StatLabel as="span">Nästa kurstillfälle{dates?.length === 1 ? ': ' : 'n: '}</StatLabel>
				<StatNumber as={props => 
					<TransitionLayout {...props} as="span" childKey={dates ? 'date' : 'wait'} />
				}>
					{dates ? dates.map((v,i) => <><Text.Date value={v} />{dates.length-1 !== i ? ', ' : ''}</>) : '...' }
				</StatNumber>
		</Stat>
	</Collapse>
