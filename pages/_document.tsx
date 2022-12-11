import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || '';
  return (
    <Html>
      <Head />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
