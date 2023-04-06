import React from 'react';

type Props = {};

export default function Section_3({}: Props) {
  return (
    <>
      <section className="">
        <div className="px-6 py-20 md:px-12 text-white text-center bg-gradient-to-b from-[#FDC830] to-[#F37335]">
          <div className="container mx-auto xl:px-32">
            <div className=" text-gray-white">
              <div className="grow-0 shrink-0 basis-auto w-full mb-6 md:mb-0 px-3">
                <h2 className="text-5xl font-bold mb-10 ">
                  Como vai funcionar?
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-2/3 mb-md-0 px-3">
                  <div className="flex flex-wrap text-left">
                    <div className="grow-0 shrink-0 basis-auto w-full mb-12 px-3">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <div className="p-4 text-lg border-2 border-black text-black font-bold rounded-full shadow-lg">
                            1
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold">
                            O Workshop será presencial
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full  mb-12 px-3">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <div className="p-4 text-lg border-2 border-black text-black font-bold rounded-full shadow-lg">
                            2
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1">
                            Na Moutonnée Fitness em Salto/SP
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full  mb-12 px-3">
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <div className="p-4 text-lg border-2 border-black text-black font-bold rounded-full shadow-lg">
                            3
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1">
                            Dia 03 de Junho, das 14:30 às 18:00
                          </p>
                        </div>
                      </div>
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
