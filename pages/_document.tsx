import Document, { Html, Main, NextScript, Head } from 'next/document'
import CSSReset from '@chakra-ui/css-reset'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
				<Head />
        <body>
					<CSSReset />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument