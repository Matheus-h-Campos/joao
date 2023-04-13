import React from 'react';

type Props = {};

export default function Section_7({}: Props) {
  return (
    <section className="py-20 bg-white mt-[-1px]">
      <div className="px-6 md:px-12">
        <div className="container mx-auto xl:px-32">
          <h2 className="text-5xl font-bold mb-12 text-center ">
            Perguntas frequentes
          </h2>
          <div className="bg-white border border-neutral-400 divide-y divide-neutral-300 rounded-xl">
            <details
              className="group p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                  Posso fazer mesmo sendo ruim?
                </h2>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                O objetivo do programa é ensinar o movimento, então sim, se você
                é iniciante ou nunca fez snatch antes, essa é a oportunidade de
                aprender da maneira mais segura possível, acompanhado de um
                profissional.
              </p>
            </details>
            <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                  Quando e onde vai ser?
                </h2>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                Será na Moutonneé Fitness em Salto-SP, o evento ocorrerá das
                14:30 as 18:00, todas as demais informações serão
                disponibilizadas na filazicação da compra do ingresso.
              </p>
            </details>
            <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                  Vai ser só pratico?
                </h2>

                <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700">
                O workshop é dividivo em duas partes, teórica e pratica, vamos
                rever os fundamentos básicos do movimento e aplicar na pratica,
                com métodos eficiêntes.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
