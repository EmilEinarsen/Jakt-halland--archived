import React from 'react'
import { Text } from 'components/core/Text'

interface CustomerInfoProps {
	withHostel?: boolean
	withOrigin?: boolean
	withCustomerInformation?: boolean
}


export const CustomerInfo = ({
	withHostel,
	withOrigin,
	withCustomerInformation
}: CustomerInfoProps) => 
	<>
		{withHostel && 
			<Text.Caption>
				Vill ni ha hjälp med boende så kan vi hjälpa till med det.
				Det finns både vandrarhem och hotell i Laholm.
			</Text.Caption>
		}
		{withOrigin && 
			<Text.Caption>
				Utbildningen är framtagen under Jägarnas Riksförbund och kursledaren är en förordnad utbildare.
			</Text.Caption>
		}
		{withCustomerInformation && 
			<Text.Caption>
				Vid avbokning återbetalas ej anmälningsavgiften. 
				Vid inställning av kursen återbetalas avgiften och ni som anmält er får 10% rabatt på nästa kurstillfälle. 
				Vid avbokning senare än 5 dagar innan kurstillfället återbetalas ej avgiften.
			</Text.Caption>
		}
	</>
