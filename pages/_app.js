import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
  <title>Buildy Construction</title>
  <meta name="description" content="The Best Construction Company" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
