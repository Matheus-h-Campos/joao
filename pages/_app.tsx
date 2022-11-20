import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CookieConsent from 'react-cookie-consent';
import { FacebookPixel } from '../utils/facebookPixel';
import Script from 'next/script';
import TagManager from '../utils/TagManager';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <TagManager />
        <title>Professor João André</title>
        <meta
          name="facebook-domain-verification"
          content="y40iu433capigubaeg6yvq4deubrlw"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FacebookPixel />
      <Component {...pageProps} />

      <CookieConsent
        buttonText="Estou ciente"
        cookieName="myAwesomeCookieName2"
        expires={365}
        style={{
          background: '#1f1f1f',
          padding: '5px',
        }}
        buttonStyle={{
          background: '#ff3333',
          color: 'white',
          fontWeight: 'bolder',
          borderRadius: '5px',
        }}
      >
        Este site utiliza cookies para melhorar a experiencia do usuário
      </CookieConsent>
    </>
  );
}
