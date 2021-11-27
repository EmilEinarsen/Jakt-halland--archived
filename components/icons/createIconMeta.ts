interface CreateIconMetaOptions {
	/**
	 * Title/name related to the svg icon
	 */
	title?: string,

	/**
	 * Description of the svg icon 
	 */
	desc?: string,

	/**
	 * Url to whatever the icon is related
	 * ex. If the icon is wrapped with an link.
	 */
	url?: string,
}

/* 
	This component is meant to be expanded with additional data.
	It primary purpose is to sync how the meta data is created before being passed to `createIcon` and exported.
*/
export const createIconMeta = ({
	title,
	desc,
	url,
}: CreateIconMetaOptions) => ({
	title,
	desc,
	url,
})
