import React from 'react'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react'

import { Text } from 'components/core/Text'

interface CoursePrice {
	value: number
}

export const CoursePrice = ({ value }: CoursePrice) => 
	<Stat as={Text}>
		<StatLabel as="span">Pris:{' '}</StatLabel>
		<StatNumber as={props => <Text.Price {...props} value={value} />} />
	</Stat>
