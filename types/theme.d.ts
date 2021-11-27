import { ColorMode } from "@chakra-ui/color-mode"
import { SystemStyleObject } from "@chakra-ui/styled-system"
import { Theme } from "@chakra-ui/theme"

declare global {
	type StyleInterpolation = SystemStyleObject | ((options: StyleOptions) => SystemStyleObject)

	type StyleOptions = {
		theme: Theme
		colorMode: ColorMode
		colorScheme: string
	}

	interface StyleConfig {
		baseStyle?: StyleInterpolation
		sizes?: { [size: string]: StyleInterpolation }
		variants?: { [variant: string]: StyleInterpolation }
		defaultProps?: {
			variant?: string
			size?: string
		}
	}
}