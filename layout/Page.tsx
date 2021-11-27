import React from "react"

import { usePrefersReducedMotion } from "@chakra-ui/react"
import { TransitionLayout, TransitionLayoutProps } from "./TransitionLayout"

export const Page: React.FC<TransitionLayoutProps> = ({ children, ...props }) => {
	const shouldReduceMotion = usePrefersReducedMotion()
	
	return !shouldReduceMotion ? (
		<TransitionLayout {...props}>
			{children}
		</TransitionLayout>
	) : <>{children}</>
}
