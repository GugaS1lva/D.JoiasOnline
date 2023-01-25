import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/logo.jpeg" />
        <title>D'Joias Online | Website</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
