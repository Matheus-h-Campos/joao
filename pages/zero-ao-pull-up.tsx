import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import { Router } from 'next/router';
import Hero from '../components/lp_components/Hero';
import Section_1 from '../components/lp_components/Section_1';
import Section_2 from '../components/lp_components/Section_2';
import Section_3 from '../components/lp_components/Section_3';
import Section_4 from '../components/lp_components/Section_4';
import Section_5 from '../components/lp_components/Section_5';
import Section_6 from '../components/lp_components/Section_6';

type Props = {};

export default function zeroAoPullUp({}: Props) {
  function FacebookPixel() {
    React.useEffect(() => {
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init('877400983486159');
          ReactPixel.pageView();

          Router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView();
          });
        });
    });
    return null;
  }
  return (
    <>
      {/* <Script
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '877400983486159');
            fbq('track', 'PageView');
            `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          className="display-none"
          src="https://www.facebook.com/tr?id=877400983486159&ev=PageView&noscript=1"
        />
      </noscript> */}

      <main className=" text-white bg-[#131313] px-8">
        <FacebookPixel />
        <Hero />
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5 />
        <Section_6 />
      </main>
    </>
  );
}
