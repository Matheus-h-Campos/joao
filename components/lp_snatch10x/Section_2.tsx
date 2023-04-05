import React from 'react';

type Props = {};

export default function Section_1({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="text-white text-center">
              <h2 className="text-5xl font-bold mb-20 text-white">
                O que você vai aprender?
              </h2>

              <div className="grid lg:gap-x-12 lg:grid-cols-2 text-neutral-900">
                <div className="mb-12 lg:mb-0">
                  <div className="rounded-lg shadow-lg h-full block bg-white">
                    <div className="flex justify-center">
                      <div className="p-4 bg-yellow-400 font-bold rounded-full shadow-lg inline-block -mt-8 text-black text-xl">
                        TEORIA
                      </div>
                    </div>
                    <div className="p-10 text-lg">
                      <p>
                        Laudantium totam quas cumque pariatur at doloremque hic
                        quos quia eius. Reiciendis optio minus mollitia rerum
                        labore facilis inventore voluptatem ad, quae quia sint.
                        Ullam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="rounded-lg shadow-lg h-full block bg-white">
                    <div className="flex justify-center">
                      <div className="p-4 bg-yellow-400 font-bold rounded-full shadow-lg inline-block -mt-8 text-black text-xl">
                        PRÁTICA
                      </div>
                    </div>
                    <div className="p-10 text-lg">
                      <p>
                        Eum nostrum fugit numquam, voluptates veniam neque
                        quibusdam ullam aspernatur odio soluta, quisquam dolore
                        animi mollitia a omnis praesentium, expedita nobis!
                      </p>
                    </div>
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
