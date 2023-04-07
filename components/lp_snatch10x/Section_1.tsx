import React from 'react';

type Props = {};

export default function Section_1({}: Props) {
  return (
    <>
      <section className="py-20">
        <div className="px-6 md:px-12  text-white text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="grid">
                  <div className="w-[150%] mr-10 lg:mr-0 lg:w-[200%] place-self-center">
                    <img
                      alt="hero"
                      src="/lp/snatch10x/section2.webp"
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-5xl font-bold tracking-tight text-yellow-400">
                  Motivos do porquê você deve ter um bom snatch
                </h2>

                <div className="mt-6 text-lg text-left bg-black/80 px-4 -mx-4 rounded-2xl">
                  <ul className="w-full">
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Para melhorar seu desempenho e explosão, o snatch é o
                      movimento mais complexo e explosivo de LPO.
                    </li>
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Aperfeiçoar o domínio deste movimento vai te ajudar a ter
                      mais segurança durante a prática. Principalmente quando
                      movendo grandes cargas ou com alta intensidade.
                    </li>
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Com um movimento mais eficiênte, menos energia é
                      disperdiçada. Possibilitando menor desgaste em repetições
                      mais longas.
                    </li>
                    <li className="w-full border-b-2 border-yellow-400 border-opacity-100 py-4 dark:border-opacity-50">
                      Ter um bom snatch vai te ajudar a ser mais explosivo, ágil
                      e coordenado. O que vai ajudar a desenvolver assim outros
                      movimentos.
                    </li>
                    <li className="w-full py-4">
                      Performar em alto nível, não fique mais triste quando cair
                      snatch no seu treino.
                    </li>
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
