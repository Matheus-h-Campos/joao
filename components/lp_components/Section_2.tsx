import React from 'react';

type Props = {};

export default function Section_2({}: Props) {
  return (
    <section className="py-36 mb-28 mx-auto max-w-7xl">
      <h3 className="group-date">SIGA OS PASSOS</h3>
      <div className="timeline">
        <div className="relative">
          <div className="dot"></div>
          <div className="pl-10">
            <h4 className="timeline-title">PRIMEIRO</h4>
            <p className="">
              O PULL UP é um movimento no qual é necessário usar força pra cima
              e de um grupo muscular específico.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="pl-10">
            <h4 className="timeline-title"></h4>
            <p className="">Então para destravar, você vai precisar:</p>
          </div>
        </div>
        <div className="relative">
          <div className="dot"></div>
          <div className="pl-10">
            <h4 className="timeline-title">SEGUNDO</h4>
            <p className="">
              Desenvolver essa força específica de “se puxar para cima”. E isso
              você faz através de exercícios complementares
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="dot"></div>
          <div className="pl-10">
            <h4 className="timeline-title">TERCEIRO</h4>
            <p className="">
              Trabalhar isso de forma isolada para acelerar todo o processo
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="pl-10">
            <h4 className="timeline-title"></h4>
            <p className="">
              (É importante deixar claro que existe uma estratégia na seleção
              desses movimentos complementares, no número de repetições e
              intervalos)
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="dot"></div>
          <div className="pl-10">
            <h4 className="timeline-title">DEDICAÇÃO</h4>
            <p className="">
              Se você quer destravar o seu PULL UP vai precisar de persistência,
              novos estímulos, orientação prática e correção
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="dot"></div>
          <div className="pl-10">
            <h4 className="timeline-title">ACEITE O SUCESSO</h4>
            <p className="">
              Ou você considera isso daqui pra frente nos seus treinos, ou nunca
              vai conseguir alcançar seus objetivos
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="dot scale-[3]" />
          <div className="pl-10 pt-2">
            <h4 className=" font-bold tracking-widest text-xl">
              <span className="text-red-500 text-4xl">SIMPLES, NÃO?</span>{' '}
              <br />
              <br />
              Ainda acha que nem tanto? <br /> Então se liga na boa notícia!
              <p className="animate-bounce">▼</p>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
