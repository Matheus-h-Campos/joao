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
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 text-lg font-bold bg-black rounded-full shadow-lg">
                            1
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1">Support 24/7</p>
                          <p className="">
                            Pellentesque mollis, metus nec fringilla aliquam.
                            Donec consequat orci quis volutpat imperdiet.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full  mb-12 px-3">
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 text-lg font-bold bg-black rounded-full shadow-lg">
                            2
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1">Safe and solid</p>
                          <p className="">
                            Magna lacus iaculis elit, quis pharetra varius.
                            Aenean lectus ex, placerat id tellus in eros.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full  mb-12 px-3">
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 text-lg font-bold bg-black rounded-full shadow-lg">
                            3
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1">Extremely fast</p>
                          <p className="">
                            Pellentesque varius ex vel consequat quis. Sed
                            mauris ex, imperdiet sit amet nisl ac, ultrices.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grow-0 shrink-0 basis-auto w-full  px-3">
                      <div className="flex">
                        <div className="shrink-0">
                          <div className="p-4 text-lg font-bold bg-black rounded-full shadow-lg">
                            4
                          </div>
                        </div>
                        <div className="grow ml-4">
                          <p className="font-bold mb-1">Money back guarantee</p>
                          <p className="">
                            Vestibulum gravida iaculis nisl, vel lobortis eros.
                            Praesent vulputate lacus bibendum augue.
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
