import React from 'react';

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12 text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-5xl xl:text-5xl font-bold tracking-tight ">
                  Faça Snatch como um Elite
                  <br />
                  <span className="text-yellow-400">Workshop Snatch 10X</span>
                </h1>
                <p className="text-lg mt-6 mb-12">
                  Aprenda como melhorar seu movimento, seja um profissional no
                  snatch e domine o movimento mais sexy do CrossFit!
                </p>
                <a
                  className="inline-block px-7 py-3 mr-2 bg-yellow-400 text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:yellow-700 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  href="#!"
                  role="button"
                >
                  Quero me inscrever
                </a>
              </div>
              <div className=" lg:mb-0">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
