import React from 'react';

type Props = {};

export default function Section_3({}: Props) {
  return (
    <section className="mx-auto max-w-7xl flex items-center h-[50vh] pb-12">
      <div className="mx-auto text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
          Pensando nisso eu desenvolvi o programa do Zero ao{' '}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-red-500">
            PULL UP
          </span>{' '}
          em 12 Semanas
        </h1>
        <p className="px-0 mb-12 text-lg  md:text-xl lg:px-24">
          Não somente vai estar conseguindo fazer muitos Pull Ups até o final do
          ano, mas também vou te ajudar a conquistar uma condição física
          impecável!
          <br /> <br />
          <span className="text-xl font-bold">
            TUDO ISSO AINDA NESSE VERÃO!
          </span>
          <br /> <br />
          Esse será um desafio de 12 semanas que vou te acompanhar pessoalmente
          e de perto
        </p>
        <p className="animate-bounce">
          ▼ <u>SAIBA MAIS</u> ▼
        </p>
      </div>
    </section>
  );
}
