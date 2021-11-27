import React, { useEffect, useRef } from 'react'

import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box, List, VStack } from '@chakra-ui/layout'
import FocusLock from '@chakra-ui/focus-lock'
import { Fade, Portal } from '@chakra-ui/react'

import { Link } from 'components/core/Link'
import { CloseIcon, HamburgerIcon, LogoIcon } from 'components/icons'
import { useMount } from 'hooks/useMount'
import { useIsMobile } from 'hooks/useIsMobile'
import { useDisableScroll } from 'hooks/useDisableScroll'
import { Item } from './Menu'

/**
 * This components appearance should be synced with `Menu`, so that `Menu` can fake `MobileMenu`s 
 * appearance before bing swapped dynamically in `Nav`
 */
const MobileMenu = () => {
	const btnRef = useRef<HTMLButtonElement>(null)
	const headerRef = useRef<HTMLElement | null>(null)

	const listRef = useRef<HTMLDivElement | null>(null)
	useMount(() => { headerRef.current = document.querySelector('#header')?.parentElement ?? null })

	const { isOpen, onToggle, onClose } = useDisclosure()

	const isMobile = useIsMobile()
	useEffect(() => { isMobile || onClose() }, [isMobile, onClose])

	useDisableScroll({ enabled: isMobile && isOpen })
	
	return (
		<>
			{/* 
				Adds a div to the dom with data attribute "data-focus-lock-disabled" 
				use this to style navigation since FocusLock doesn't have the props className or style 
			*/}
			<FocusLock finalFocusRef={btnRef} isDisabled={!isOpen}>
				<Link href="/" aria-label="Go to homepage" exact onClick={onClose}><LogoIcon fontSize="2xl" /></Link>
				<Box as="nav" className="nav" aria-label="Main">
						<List className="nav__list" orientation="horizontal" alignItems="center">
							<IconButton
								size="lg"
								ref={btnRef} 
								onClick={onToggle}
								aria-expanded={isOpen} 
								aria-label={(isOpen ? "Close" : "Open") + ' the menu'}
								aria-controls="mobileMenu"
							>
								{isOpen ? <CloseIcon aria-hidden /> : <HamburgerIcon aria-hidden />}
							</IconButton>
						</List>
						<Fade 
							in={isOpen}
							onAnimationStart={() => listRef.current!.style.display = 'unset'}
							onAnimationComplete={() => !isOpen && (listRef.current!.style.display = 'none')} 
						>
							<VStack
								as={List}
								d={{ base: 'unset', md: 'none' }}
								className="nav__list nav__list--mobile"
								ref={listRef}
								id="mobileMenu"
							>
								<Item as={props => <Link {...props} href="/" exact>Home</Link>} isDrawer onClick={onClose} />
								<Item as={props => <Link {...props} href="/example" exact>Example</Link>} isDrawer onClick={onClose} />
							</VStack>
							<Portal containerRef={headerRef}>
								{/* Needed since the portal breaks the outer Fade effect */}
								<Fade in={isOpen}>
									<Box
										d={isOpen ? 'unset' : 'none'}
										className="nav__backdrop"
										onClick={onClose}
									/>
								</Fade>
							</Portal>
						</Fade>
				</Box>
			</FocusLock>
		</>
	)
}

export default MobileMenu
