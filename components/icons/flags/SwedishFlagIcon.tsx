import { createIcon } from "../createIcon";
import { createIconMeta } from "../createIconMeta";

export const SwedishFlagMeta = createIconMeta({
	title: 'Swedish flag'
})

export const SwedishFlagIcon = createIcon({
	displayName: 'SwedishFlagIcon',
	viewBox: '0 0 16 10',
	path: [
		<path key={0} fill="#006aa7" d="M0,0H16V10H0Z"/>,
		<path key={1} fill="#fecc00" d="M0,4H5V0H7V4H16V6H7V10H5V6H0Z"/>,
	],
	...SwedishFlagMeta,
})
