/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {};

export default function Section_6({}: Props) {
  return (
    <section className="py-20 bg-white mt-[-1px]">
      <div className="px-6 md:px-12">
        <div className="container mx-auto xl:px-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center ">
            Não perca sua vaga <br />{' '}
            <span className="text-red-600">Lotes limitados!</span>
          </h2>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center">
            <div className="relative flex-initial  mb-6 md:mb-0">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/90 rounded-2xl" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-black text-3xl">
                ESGOTADO!!
              </span>
              <img
                alt=""
                src="/lp/snatch10x/Lotepromocional.webp"
                className="w-full  rounded-2xl shadow-xl"
              />
            </div>
            <div className="relative flex-initial  mb-6 md:mb-0">
              {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/90 rounded-2xl" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-red-600 font-black text-3xl">
                ESGOTADO!!
              </span> */}
              <div className="absolute -top-8 w-full text-center text-lg text-red-600 font-bold">
                ⬇ Aberto até 27/04! ⬇
              </div>
              <img
                alt=""
                src="/lp/snatch10x/Lote1.webp"
                className="w-full  rounded-2xl shadow-xl"
              />
            </div>
            <div className="relative flex-initial  mb-6 md:mb-0">
              <div className="absolute -top-8 w-full text-center text-lg text-red-600 font-bold">
                ⬇ Abertura em 28/04! ⬇
              </div>
              <img
                alt=""
                src="/lp/snatch10x/Lote2webp.webp"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>

            <img
              alt=""
              src="/lp/snatch10x/Lote3webp.webp"
              className="rounded-2xl shadow-xl flex-initial"
            />
          </div>
        </div>
        <a
          className="flex py-4 bg-yellow-400 text-black font-medium text-lg leading-snug uppercase rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:yellow-700 active:shadow-lg transition duration-150 ease-in-out w-full lg:w-1/2 justify-center mt-10 mx-auto"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="https://evento.blinket.com.br/snatch-10x"
          role="button"
        >
          Quero me inscrever
        </a>
      </div>
    </section>
  );
}
