import React from 'react';

type Props = {};

export default function Section_8({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12 text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="flex flex-col gap-12 items-center">
              <div className="flex-1 mt-12 lg:mt-0 z-10">
                <h2 className="text-5xl md:text-5xl xl:text-5xl font-bold tracking-tight ">
                  Sobre a Segunda Edição
                </h2>
              </div>
              <div className="flex-1">
                <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
                  <video controls>
                    <source
                      src="/lp/snatch10x/Criativo1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
