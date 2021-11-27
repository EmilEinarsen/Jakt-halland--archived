import { Text as ChakraText, TextProps } from "@chakra-ui/layout"

interface Compound {
	Subtitle: React.ComponentType<Omit<TextProps, 'variant'>>
	Body: React.ComponentType<Omit<TextProps, 'variant'>>
	Caption: React.ComponentType<Omit<TextProps, 'variant'>>
	Blockquote: React.ComponentType<Omit<TextProps, 'variant'>>
	Naked: React.ComponentType<Omit<TextProps, 'variant'>>
}

export const Text = Object.assign(ChakraText, {
	Subtitle: props => <ChakraText variant="subtitle" {...props} />,
	Body: props => <ChakraText {...props} />,
	Caption: props => <ChakraText variant="caption" {...props} />,
	Blockquote: props => <ChakraText variant="blockquote" as="blockquote" {...props} />,
	Naked: props => <ChakraText variant="naked" {...props} />,
} as Compound)
