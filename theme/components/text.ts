const text: StyleConfig = {
	variants: {
		subtitle: {
			fontSize: 'xl', 
			fontWeight: 'medium'
		},
		body: {
			fontSize: 'lg', 
			fontWeight: 'normal', 
			marginTop: '1.5rem', 
			lineHeight: '1.75rem'
		},
		caption: {
			fontSize: 'md', 
			fontWeight: 'medium', 
			textTransform: 'uppercase', 
			color: 'gray.700', 
			letterSpacing: '.1rem', 
			marginTop: '1rem'
		},
		blockquote: {
			
		},
		naked: {
			fontSize: 'lg', 
			fontWeight: 'normal'
		},
	},
	defaultProps: {
		variant: "body",
	},
} as const

export default text
