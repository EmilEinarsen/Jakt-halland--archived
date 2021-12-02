import React from "react"

import { Text } from "components/core/Text"
import { UnorderedList, OrderedList, ListItem } from "@chakra-ui/react"
import { Heading } from "components/core/Heading"
import { CustomerInfo } from "components/app/CustomerInfo"
import { priceFormat } from "utils/formatter"
import { COURSE_TYPE, useCourses } from "./api/courses"
import { CourseDates } from "components/app/CourseDates"

const HuntingLeaderEducation: Page = () => {
	const { data: { sorted } = {} } = useCourses()
	const courses = sorted?.[COURSE_TYPE.HUNTING_LEADER]
	
  return (
    <>
			<article>
				<Heading.H1>Jaktledarutbildning</Heading.H1>
				<Text>
					Pris: <Text.Price value={1800} />
				</Text>
				<CourseDates dates={courses?.map(v => v.date)} />
				<Text>
					Utbildningen omfattar:
				</Text>
				<UnorderedList spacing=".5rem">
					<ListItem>
						Jaktledarens ansvar och uppgift.
					</ListItem>
					<ListItem>
						Planering av jakt.
					</ListItem>
					<ListItem>
						Jaktlagstiftningen.
					</ListItem>
					<ListItem>
						Etik, moral och attityder.
					</ListItem>
					<ListItem>
						Säkerhetsarbete.
					</ListItem>
					<ListItem>
						Vapen och skytte.
					</ListItem>
				</UnorderedList>
				<Text>
					Förkunskaper: Jägarexamen krävs.
				</Text>
				<Text>
					Utbildingen sker på en lördag. 
					I priset ingår litteratur, lunch samt för- och eftermiddagskaffe. 
					Efter genomförd utbildning erhålls ett diplom.
				</Text>
				<Text>
					Dess syfte är att både ge kunskap om vad som krävs som jaktledare och för att få ett fungerande jaktlag. 
					En jaktledaren ska ha kunskap om vilka lagar och regler som gäller vid jakt. 
					Denne ska genom sitt uppträdande sätta den etiska och moraliska normen i jaktlaget, då det är han som är ytterst ansvarig om något skulle hända.
				</Text>
				<Text>
					Vår utbildningen är godkänd av Svea skog med flera. 
					Svea skog har utbildningskrav på alla jaktledare för utarrenderade jaktmarker.
				</Text>
				<Text>
					Avgiften är uppdelad i två fakturor:
				</Text>
				<OrderedList spacing=".5rem" as={Text}>
					<ListItem>
						<Text.Price value={500} /> (anmälningsavgift).
					</ListItem>
					<ListItem>
						<Text.Price value={1300} /> (betalas 10 dagar innan kursen startar).
					</ListItem>
				</OrderedList>
				<CustomerInfo
					withOrigin
					withCustomerInformation
				/>
			</article>
		</>
  )
}

export default HuntingLeaderEducation
