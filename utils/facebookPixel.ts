import { Router } from 'next/router';
import React from 'react';

export function FacebookPixel() {
  const pixelId = process.env.NEXT_PUBLIC_GTM_ID || '';
  React.useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('${pixelId}');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}
