import React from "react"

import { Text } from "components/core/Text"
import { UnorderedList, OrderedList, ListItem } from "@chakra-ui/react"
import { Heading } from "components/core/Heading"
import { CustomerInfo } from "components/app/CustomerInfo"
import { COURSE_TYPE, useCourses } from "./api/courses"
import { CourseDates } from "components/app/CourseDates"
import { CoursePrice } from "components/app/CoursePrice"

const HuntingLicense: Page = () => {
	const { data: { sorted } = {}, isError } = useCourses()
	const normal = sorted?.[COURSE_TYPE.HUNTING_LICENCE_NORMAL]
	const intense = sorted?.[COURSE_TYPE.HUNTING_LICENCE_INTENSE]
	
  return (
    <>
			<Heading.H1>Jägarexamen</Heading.H1>
			<article>
				<Heading.H1>Normalkurs</Heading.H1>
				<CoursePrice value={4000} />
				<CourseDates dates={normal?.map(v => [v.date,v.endDate])} isError={isError} />
				<Text>
					I paketet ingår:
				</Text>
				<UnorderedList spacing=".5rem">
					<ListItem>
						Litteratur, inklusive ljudbok, skickas till dig i förväg.
					</ListItem>
					<ListItem>
						Övningsskjutning med hagel vid ett tillfälle, exklusive ammunition.
					</ListItem>
					<ListItem>
						Teoretiskt prov, exklusive Naturvårdsverkets provavgift.
					</ListItem>
					<ListItem>
						Skjutning i skjutsimulator.
					</ListItem>
				</UnorderedList>
				<Text>
					Under utbildningen går vi igenom hela teoridelen tillsammans. 
					För att ge er gott om tid att studera, sker detta över 10 kvällar en dag i vecka mellan 18.00 - 21.00, med semester uppehåll under Juli månad.
				</Text>
				<Text>
					Avgiften är uppdelad i två fakturor:
				</Text>
				<OrderedList spacing=".5rem" as={Text}>
					<ListItem>
						<Text.Price value={1000} /> (anmälningsavgift).
					</ListItem>
					<ListItem>
						<Text.Price value={3000} /> (betalas 10 dagar innan kursen startar).
					</ListItem>
				</OrderedList>
				<CustomerInfo
					withOrigin
					withCustomerInformation
				/>
			</article>
			<article>
				<Heading.H1>Intensivkurs</Heading.H1>
				<CoursePrice value={9800} />
				<CourseDates dates={intense?.map(v => [v.date,v.endDate])} isError={isError} />
				<Text>
					I paketet ingår:
				</Text>
				<UnorderedList spacing=".5rem">
					<ListItem>
						Litteratur, inklusive ljudbok, skickas till dig i förväg.
					</ListItem>
					<ListItem>
						Övningsskjutning med hagel.
					</ListItem>
					<ListItem>
						Praktiskt prov, kula och hagel.
					</ListItem>
					<ListItem>
						Teoretiskt prov, inklusive Naturvårdsverkets provavgift.
					</ListItem>
					<ListItem>
						Skjutning i skjutsimulator.
					</ListItem>
					<ListItem>
						Lunch och middag under utbildningen.
					</ListItem>
				</UnorderedList>
				<Text>
					Under ett samlat pris kommer du lära dig allt som behövs för att ta jägarexamen, på 3.5 dagar (torsdag till söndag).
					Kursen startar på torsdag klockan 13,00 och avslutas på söndag vid 16,00.
				</Text>
				<Text>
					Avgiften är uppdelad i två fakturor:
				</Text>
				<OrderedList spacing=".5rem" as={Text}>
					<ListItem>
						<Text.Price value={2000} /> (anmälningsavgift).
					</ListItem>
					<ListItem>
						<Text.Price value={7800} /> (betalas 10 dagar innan kursen startar).
					</ListItem>
				</OrderedList>
				<CustomerInfo
					withHostel
					withOrigin
					withCustomerInformation
				/>
			</article>
		</>
  )
}

export default HuntingLicense
