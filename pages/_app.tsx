import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CookieConsent from 'react-cookie-consent';
import { FacebookPixel } from '../utils/facebookPixel';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { useEffect } from 'react';
// import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <>
      {/* <Script id="gtm" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WZLGR5K');
        `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WZLGR5K"
          height="0"
          width="0"
          className="hidden"
        ></iframe>
      </noscript> */}
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
