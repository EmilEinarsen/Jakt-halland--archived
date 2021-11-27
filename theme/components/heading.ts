const heading: StyleConfig = {
	variants: {
		h1: {
			fontSize: '5xl', 
			fontWeight: 'medium', 
			marginTop: '1.5rem',
			lineHeight: '3.5rem',
			letterSpacing: -3,
		},
		h2: {
			fontSize: '4xl', 
			fontWeight: 'medium', 
			marginTop: '2.5rem', 
			letterSpacing: '-.015em', 
			lineHeight: '2.25rem', 
			paddingBottom: '0.25rem',
		},
		h3: {
			fontSize: '3xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '-.015em',
			lineHeight: '2rem', 
		},
		h4: {
			fontSize: '2xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '-.015em',
			lineHeight: '1.75rem', 
		},
		h5: {
			fontSize: 'xl', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '-.015em',
			lineHeight: '1.75rem', 
		},
		h6: {
			fontSize: 'lg', 
			fontWeight: 'medium', 
			marginTop: '2rem',
			letterSpacing: '-.015em',
			lineHeight: '1.75rem', 
		},
	},
} as const

export default heading
