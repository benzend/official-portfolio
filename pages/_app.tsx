import Script from 'next/script';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/dfd07826ac.js"
        crossOrigin="anonymous"
      ></Script>

      {/** Start of Helio Embed Code --> */}
       <Script defer id="helioEmbedLoader" src="https://embed.helio.app/load.js?i=01BDZ8DDVXK6S1DW9S5YXTR5R2"></Script>
      {/** End of Helio Embed Code --> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
