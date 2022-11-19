import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coach João André</title>
        <meta
          name="facebook-domain-verification"
          content="y40iu433capigubaeg6yvq4deubrlw"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
