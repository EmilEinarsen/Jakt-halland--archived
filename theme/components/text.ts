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
		blockquote: {
			
		},
		naked: {
			fontSize: 'lg', 
			fontWeight: 'normal'
		},
		overline: {
			fontSize: 'md', 
			fontWeight: 'medium', 
			textTransform: 'uppercase', 
			color: 'gray.700', 
			letterSpacing: '.1rem', 
			marginTop: '1rem'
		},
		caption: {
			fontSize: 'md', 
			color: 'gray.600', 
			marginTop: '1rem',
		},
	},
	defaultProps: {
		variant: "body",
	},
} as const

export default text
