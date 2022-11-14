import React from 'react';

type Props = {};

export default function Section_1({}: Props) {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center -mb-10 lg:-mb-32">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 ">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            TREINAMENTO DESENVOLVIDO PARA ALCANÇAR SEUS OBJETIVOS
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400 sm:text-xl">
            Você recebe um treinamento personalizado por nós, para você, com uma
            maneira prática, fornecendo suporte profundo para ajudá-lo a atingir
            seus objetivos físicos.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 lg:grid-cols-3 justify-start">
            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 shadow-lg hover:shadow-xl transition ease-in-out mb-auto">
              <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400 pt-5">
                Totalmente personalizado flexível e estruturado em torno de seus
                objetivos, nível atual e estilo de vida.
              </dt>

              <dd className="text-4xl font-extrabold text-red-500 md:text-3xl">
                PLANEJAMENTO
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center  dark:border-gray-800 shadow-lg hover:shadow-xl transition ease-in-out mb-auto">
              <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400 pt-5">
                Vou monitorar constantemente seu progresso com check-ins diários
                e semanais. Vou ajudar a mantê-lo no caminho certo para levá-lo
                onde você quer chegar. Faremos ajustes regulares para ajudá-lo a
                atingir seus objetivos e potencial total.
              </dt>

              <dd className="text-4xl font-extrabold text-red-500 md:text-3xl">
                MONITORIA
              </dd>
            </div>

            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800 shadow-lg hover:shadow-xl transition ease-in-out mb-auto">
              <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400 pt-5">
                Fornecerei suporte constante e ajudarei você com qualquer dúvida
                que possa ter, enquanto forneço dicas e motivação para superar
                as barreiras mentais e físicas, para alcançar cada um de seus
                objetivos.
              </dt>

              <dd className="text-4xl font-extrabold text-red-500 md:text-3xl">
                SUPORTE
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
