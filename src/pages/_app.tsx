import { AppProps } from 'next/app'
import 'modern-css-reset'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
