import React from 'react';

type Props = {};

export default function Section_1({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12  text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="text-5xl font-bold tracking-tight text-yellow-400">
                  Por que eu devo me preocupar com meu stach?
                </h2>

                <div className="mt-6 text-lg text-left">
                  <ul className="w-full">
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Motivo 1
                    </li>
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Motivo 2
                    </li>
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Motivo 3
                    </li>
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Motivo 4
                    </li>
                    <li className="w-full py-4">Motivo 5</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
