import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FacebookPixel } from '../utils/facebookPixel';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Professor João André</title>
        <meta
          name="facebook-domain-verification"
          content="y40iu433capigubaeg6yvq4deubrlw"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FacebookPixel />
      <Component {...pageProps} />
    </>
  );
}
