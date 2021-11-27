import { useBreakpoint } from '@chakra-ui/react'

export const useIsMobile = () => ['base', 'sm'].includes(useBreakpoint()??'')
