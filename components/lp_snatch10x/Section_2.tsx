import React from 'react';

type Props = {};

export default function Section_1({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="text-white text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white">
                O que você vai aprender?
              </h2>

              <div className="grid lg:gap-x-12 lg:grid-cols-2 text-neutral-900 text-left">
                <div className="mb-12 lg:mb-0">
                  <div className="rounded-lg shadow-lg h-full block bg-white">
                    <div className="flex justify-center">
                      <div className="p-4 bg-yellow-400 font-bold rounded-full shadow-lg inline-block -mt-8 text-black text-xl">
                        TEORIA
                      </div>
                    </div>
                    <div className="p-10 text-lg">
                      <p>
                        Em um dia vou te passar tudo que estudei ao longo de
                        anos, centenas de horas de cursos com profissionais de
                        renome internacional. Tudo isso condensado para você!
                        <br />
                        <br />
                        Todos meus métodos e dinâmicas de treinamento que me
                        ajudaram a chegar em altos níveis de excelência como
                        atleta e treinador, de forma única e de um jeito que
                        você nunca viu! Vou compartilhar com você princípios da
                        Técnica e todos os segredos que facilitam o movimento…
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
                        Uma progressão técnica e didática que vai te ajudar
                        passo a passo a aprender e entender cada fase e
                        seguimento do snatch. Visando otimizar todos os pontos
                        possíveis.
                        <br />
                        <br />
                        Vou estar la para te acompanhar lado a lado, corrigindo
                        cada detalhe e fornecendo feedbacks indivíduais para sua
                        evolução.
                        <br />
                        <br />
                        Mais do que te ensinar, vou te mostrar o caminho das
                        pedras e lhe demonstrar como continuar a evoluir
                        constantemente, com técnicas secretas que você vai
                        incorporar na sua rotina de treinos facilmente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="flex py-4 bg-yellow-400 text-black font-medium text-lg leading-snug uppercase rounded-full shadow-md hover:bg-yellow-500 hover:shadow-lg focus:bg-yellow-500 focus:shadow-lg focus:outline-none focus:ring-0 active:yellow-700 active:shadow-lg transition duration-150 ease-in-out w-full lg:w-1/2 justify-center mt-10 mx-auto"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="https://evento.blinket.com.br/snatch-10x"
              role="button"
            >
              Quero me inscrever
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
