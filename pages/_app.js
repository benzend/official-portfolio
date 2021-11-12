import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/dfd07826ac.js" crossOrigin="anonymous"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
