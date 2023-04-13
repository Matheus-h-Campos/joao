import React from 'react';

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12 text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 mt-12 lg:mt-0 z-10">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight ">
                  Faça Snatch como um Elite
                  <br />
                  <span className="text-yellow-400">Workshop Snatch 10X</span>
                </h1>
                <p className="text-lg mt-6 mb-12">
                  Aprenda como melhorar seu snatch e domine a excelência do
                  movimento mais sexy do CrossFit!
                </p>
                <a
                  className="inline-block px-7 py-3 mr-2 bg-yellow-400 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="https://evento.blinket.com.br/snatch-10x"
                  role="button"
                >
                  Quero me inscrever
                </a>
              </div>
              <div className="flex-1">
                <div className="grid">
                  <div className="w-[150%] ml-10 lg:ml-0 lg:w-[200%] place-self-center">
                    <img
                      alt="hero"
                      src="/lp/snatch10x/hero.webp"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
