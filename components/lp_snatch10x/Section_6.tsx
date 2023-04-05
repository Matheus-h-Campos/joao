import React from 'react';

type Props = {};

export default function Section_6({}: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="px-6 md:px-12">
        <div className="container mx-auto xl:px-32">
          <h2 className="text-5xl font-bold mb-12 text-center ">
            Não perca sua vaga <br />{' '}
            <span className="text-red-600">Lotes limitados!</span>
          </h2>

          <div className="grid lg:grid-cols-4 gap-x-6 lg:gap-x-12 text-center ">
            <div>lote promocional</div>
            <div>lote 1</div>
            <div>lote 2</div>
            <div>lote 3</div>
          </div>
        </div>
      </div>
    </section>
  );
}
