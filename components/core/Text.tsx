import { Text as ChakraText, TextProps } from "@chakra-ui/layout"
import { dateFormat, priceFormat } from "utils/formatter"

interface Compound {
	Subtitle: React.ComponentType<Omit<TextProps, 'variant'>>
	Body: React.ComponentType<Omit<TextProps, 'variant'>>
	Overline: React.ComponentType<Omit<TextProps, 'variant'>>
	Caption: React.ComponentType<Omit<TextProps, 'variant'>>
	Blockquote: React.ComponentType<Omit<TextProps, 'variant'>>
	Naked: React.ComponentType<Omit<TextProps, 'variant'>>
	Date: React.ComponentType<Omit<TextProps, 'variant' | 'children'> & { value: string | Date | (string | Date)[] }>
	Price: React.ComponentType<Omit<TextProps, 'variant' | 'children'> & { value: number }>
}

export const Text = Object.assign(ChakraText, {
	Subtitle: props => <ChakraText variant="subtitle" {...props} />,
	Body: props => <ChakraText {...props} />,
	Overline: props => <ChakraText variant="overline" {...props} />,
	Caption: props => <ChakraText variant="caption" {...props} />,
	Blockquote: props => <ChakraText variant="blockquote" as="blockquote" {...props} />,
	Naked: props => <ChakraText variant="naked" {...props} />,
	Date: ({ value, ...props }) => 
		<ChakraText as="span" {...props}>
			{dateFormat(...Array.isArray(value) ? value : [value])}
		</ChakraText>
	,
	Price: ({ value, ...props }) => 
		<ChakraText as="span" {...props}>
			{priceFormat({ price: value })}
		</ChakraText>
	,
} as Compound)
