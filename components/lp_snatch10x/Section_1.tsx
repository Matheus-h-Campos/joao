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
                  Motivos do por que você deve ter um bom snatch
                </h2>

                <div className="mt-6 text-lg text-left">
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
