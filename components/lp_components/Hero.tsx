import React from 'react';

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="mx-auto max-w-7xl h-screen flex items-center  ">
      <div className="mx-auto text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
          O SEGREDO para destravar o{' '}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-red-500 shadow">
            PULL UP
          </span>{' '}
          é esse aqui…
        </h1>
        <img
          src="\lp\zero-ao-pull-up\down-arrow_2b07-fe0f.png"
          alt=""
          className="h-8 w-8 mx-auto md:h-14 md:w-14 animate-bounce"
        />
      </div>
    </section>
  );
}
