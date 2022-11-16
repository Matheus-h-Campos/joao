import React from 'react';

type Props = {};

export default function Section_1({}: Props) {
  return (
    <section className=" mx-auto max-w-7xl ">
      <div className="mx-auto text-center">
        <img src="\lp\zero-ao-pull-up\PNG.png" alt="" className="w-full" />
      </div>
      <div className=" mx-auto mb-14 text-center flex">
        <img
          src="\lp\zero-ao-pull-up\crying-face_1f622.png"
          alt="Hellonext feedback boards software screenshot"
          className="h-10 w-10 mx-auto md:h-14 md:w-14"
        />

        <img
          src="\lp\zero-ao-pull-up\thinking-face_1f914.png"
          alt="Hellonext feedback boards software screenshot"
          className="h-10 w-10 mx-auto md:h-14 md:w-14"
        />
        <img
          src="\lp\zero-ao-pull-up\smiling-face-with-sunglasses_1f60e.png"
          alt="Hellonext feedback boards software screenshot"
          className="h-10 w-10 mx-auto md:h-14 md:w-14"
        />
        <img
          src="\lp\zero-ao-pull-up\partying-face_1f973.png"
          alt="Hellonext feedback boards software screenshot"
          className="h-10 w-10 mx-auto md:h-14 md:w-14"
        />
      </div>
      <div className="w-full mx-auto text-center">
        <p className="px-0 mb-6 text-2xl font-bold md:text-3xl">
          Com passos simples, vou te ensinar a como deixar seu queixo acima da
          barra sem nem perceber!
        </p>
      </div>
    </section>
  );
}
