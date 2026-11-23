import type { AppProps } from 'next/app';

import { geistMono, montserrat, montserratItalic, quicksand } from '../app/lib/fonts';

import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --font-quicksand: ${quicksand.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
          --font-geist-mono: ${geistMono.style.fontFamily};
        }
      `}</style>
      <span hidden className={montserratItalic.className} aria-hidden="true" />
      <Component {...pageProps} />
    </>
  );
}
