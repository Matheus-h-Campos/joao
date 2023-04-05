import React from 'react';
import Section_2 from '../components/lp_snatch10x/Section_2';
import Hero from '../components/lp_snatch10x/Hero';
import Section_1 from '../components/lp_snatch10x/Section_1';
import Section_3 from '../components/lp_snatch10x/Section_3';
import Section_4 from '../components/lp_snatch10x/Section_4';
import Section_5 from '../components/lp_snatch10x/Section_5';
import Section_6 from '../components/lp_snatch10x/Section_6';

type Props = {};

export default function snatch10x({}: Props) {
  return (
    <>
      <main className="bg-black">
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
