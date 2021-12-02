import { useCourses } from "./api/courses"

const Home: Page = () => {
	const { data: { courses } = {} } = useCourses()
	
  return (
    <div>
      home
    </div>
  )
}

export default Home
