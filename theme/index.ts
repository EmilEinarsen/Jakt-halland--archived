import { extendTheme, ThemeOverride } from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"


// Foundational style overrides


// Component style overrides
import Heading from "./components/heading"
import Text from "./components/text"
import Divider from "./components/divider"
import Link from "./components/link"


const overrides = {
	config: {
    cssVarPrefix: ""
  },
  styles,
  components: {
    Heading,
		Text,
		Divider,
		Link,
  },
} as ThemeOverride


export default extendTheme(overrides)
