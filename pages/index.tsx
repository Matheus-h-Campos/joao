import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Section_6 from '../components/lp_components/Section_6';
import Section_1 from '../components/Section_1';
import Section_2 from '../components/Section_2';
import Section_3 from '../components/Section_3';
import Section_4 from '../components/Section_4';

export default function Home() {
  return (
    <>
      <main className="bg-gray-900">
        <Hero />
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_6 />
        <Footer />
      </main>
    </>
  );
}
