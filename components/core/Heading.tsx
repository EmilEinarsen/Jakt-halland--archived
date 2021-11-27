import { Heading as ChakraHeading, HeadingProps } from "@chakra-ui/layout"

interface Compound {
	H1: React.ComponentType<Omit<HeadingProps, 'as' | 'variant'>>
	H2: React.ComponentType<Omit<HeadingProps, 'as' | 'variant'>> 
	H3: React.ComponentType<Omit<HeadingProps, 'as' | 'variant'>> 
	H4: React.ComponentType<Omit<HeadingProps, 'as' | 'variant'>> 
	H5: React.ComponentType<Omit<HeadingProps, 'as' | 'variant'>> 
	H6: React.ComponentType<Omit<HeadingProps, 'as' | 'variant'>> 
}

export const Heading = Object.assign(ChakraHeading, {
	H1: props => <ChakraHeading as="h1" variant="h1" {...props} />,
	H2: props => <ChakraHeading as="h2" variant="h2" {...props} />,
	H3: props => <ChakraHeading as="h3" variant="h3" {...props} />,
	H4: props => <ChakraHeading as="h4" variant="h4" {...props} />,
	H5: props => <ChakraHeading as="h5" variant="h5" {...props} />,
	H6: props => <ChakraHeading as="h6" variant="h6" {...props} />,
} as Compound)
