import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Section_2({}: Props) {
  return (
    <section className="flex bg-gray-900 min-h-[50vh] max-w-screen items-center -my-1">
      <div className="mx-auto text-center">
        <h3 className="font-extrabold text-white text-5xl sm:text-7xl mx-5">
          AO SEU LADO PARA AJUDAR VOCÊ!
        </h3>

        <Link
          className="inline-block rounded-xl mt-8 px-12 py-3 text-white text-sm font-bold shadow-lg shadow-red-500/30 bg-red-500 hover:scale-110 transition ease-in-out"
          href="https://calendly.com/joaoandre/consultoria-personalizada"
        >
          COMEÇAR AGORA
        </Link>
      </div>
    </section>
  );
}
