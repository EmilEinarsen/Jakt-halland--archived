
export const priceFormat = ({
	price, 
	currency = 'SEK',
}: {
	price: number, 
	currency?: string,
}) =>
	new Intl.NumberFormat(
		'se-SE', 
		{ style: 'currency', currency }
	).format(price).replace(/\./g, ' ')



export const dateFormat = (...dates: (Date | string)[]) => 
	(new Intl.DateTimeFormat(
		'sv', 
		{
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		}
	) as any)[dates.length === 1 ? 'format' : 'formatRange'](...dates.map(v => new Date(v)));
