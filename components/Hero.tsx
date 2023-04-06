import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className=" bg-center bg-cover min-h-screen flex items-center custom-img">
      <div className="absolute min-h-screen top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-gray-900/80  to-gray-900" />
      <div className="mx-auto max-w-screen-xl px-4 py-32 z-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="pt-[4px] bg-red-500 bg-clip-text font-extrabold text-transparent text-5xl sm:text-7xl">
            JOÃO ANDRÉ
            <span className="block text-white font-normal text-3xl sm:text-3xl">
              {' '}
              PERSONAL COACHING{' '}
            </span>
          </h1>
          <p className="text-white text-lg mt-8 mb-4">
            Clique aqui e me diga como posso te ajudar
          </p>
          <Link
            className="inline-block rounded-xl  px-12 py-3 text-white text-sm font-bold shadow-lg shadow-red-500/30 bg-red-500 hover:scale-110 transition ease-in-out"
            href="https://wa.me/5511971084479"
          >
            COMEÇAR AGORA
          </Link>
        </div>
      </div>
    </section>
  );
}
