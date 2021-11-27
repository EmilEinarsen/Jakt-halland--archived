import { Box, List, ListItem } from '@chakra-ui/layout'
import { Heading, HeadingProps, IconButton } from '@chakra-ui/react'

import { Link } from 'components/core/Link'
import { HamburgerIcon } from 'components/icons/HamburgerIcon'
import { LogoIcon } from 'components/icons/LogoIcon'

export const Item: React.FC<HeadingProps & { isDrawer?: boolean }> = ({ isDrawer, ...props }) => 
	<ListItem
		className="nav__list-item"
	>
		<Heading
			{...props}
			variant={isDrawer ? "h4" : "h6"}
			{...isDrawer?{display:'flex', justifyContent: 'center'}:null}
		/>
	</ListItem>

/**
 * This component is meant to be used in conjunction with `MobileMenu`.
 * `MobileMenu` should be dynamically imported to reduce JS bundle-size and increase performance.
 * 
 * Uses media queries to fake `MobileMenu`'s appearance while reducing CLS until it's dynamically imported and CSR swapped
 */
export const Menu = () => 
	<>
		<Link href="/" aria-label="Go to homepage" exact><LogoIcon fontSize="2xl" /></Link>
		<Box as="nav" className="nav" aria-label="Main">
			<List className="nav__list" orientation="horizontal" alignItems="center">
				<Item className="d-not-mobile" as={props => <Link {...props} href="/" exact>Home</Link>} />
				<Item className="d-not-mobile" as={props => <Link {...props} href="/example" exact>Example</Link>} />
				<IconButton
					size="lg"
					aria-label="Open the menu"
					aria-controls="mobileMenu"
					className="d-only-mobile"
				>
					<HamburgerIcon aria-hidden />
				</IconButton>
			</List>
		</Box>
	</>
