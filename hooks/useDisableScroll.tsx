import { useEffect } from 'react'

export const useDisableScroll = ({ enabled = true, className }: { enabled?: boolean, className?: string }) => useEffect(() => {
	const html = document.querySelector('html')
	if(html && enabled) html.classList.add(className ?? 'no-scroll');
	return () => { html && html.classList.remove(className ?? 'no-scroll') }
}, [className, enabled])
