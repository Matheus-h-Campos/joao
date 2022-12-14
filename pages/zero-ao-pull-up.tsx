import React from 'react';
import Hero from '../components/lp_components/Hero';
import Section_1 from '../components/lp_components/Section_1';
import Section_2 from '../components/lp_components/Section_2';
import Section_3 from '../components/lp_components/Section_3';
import Section_4 from '../components/lp_components/Section_4';
import Section_5 from '../components/lp_components/Section_5';
import Section_6 from '../components/lp_components/Section_6';

type Props = {};

export default function zeroAoPullUp({}: Props) {
  return (
    <>
      <main className=" text-white bg-[#131313] px-8">
        {/* <FacebookPixel /> */}
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
