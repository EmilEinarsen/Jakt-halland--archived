import dynamic from 'next/dynamic'
import { useIsMobile } from 'hooks/useIsMobile'
import { Menu } from './Menu'

const MobileMenu = dynamic(() => import('./MobileMenu'))

/**
 * `MobileMenu` should be dynamically imported to reduce JS bundle-size and increase performance.
 * 
 * isMobile is meant to help Menu fake `MobileMenu`'s appearance until it's dynamically imported and CSR swapped
 */
export const Nav = () => {
	const isMobile = useIsMobile()
	
	return !isMobile ? <Menu /> : <MobileMenu />
}
