import React from 'react';
import Head from 'next/head';
import FACEBOOK_PIXEL_1 from './facebook/FacebookPixel';

type Props = {};

export default function index({ name }: any) {
  return <Head>{name === 'FACEBOOK_PIXEL_1' && <FACEBOOK_PIXEL_1 />}</Head>;
}
