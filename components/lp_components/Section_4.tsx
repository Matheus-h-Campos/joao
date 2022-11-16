import React from 'react';

type Props = {};

export default function Section_4({}: Props) {
  return (
    <section className="flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <img
            alt="perfil"
            src="/perfil.jpg"
            className="aspect-square w-full max-w-xl rounded-xl mx-auto shadow-lg object-cover"
          />
          <div className="max-w-xl mx-auto text-ellipsis p-4 border border-gray-100/20  bg-gradient-to-b from-white/10  rounded-xl shadow-lg">
            <p className="text-xl font-medium lg:text-2xl  text-white">
              Me chamo João, tenho 6 anos de experiência atuando no esporte, e
              ja treinei mais de 1000 alunos. Todos com os mais diferentes
              objetivos e capacidades, sou especializado em treinamento para
              iniciantes e sei exatamente o você precisa para sair do zero e
              conquistar{' '}
              <span className="text-red-500">sua melhor forma física!</span>
            </p>
            <p className="text-4xl py-8 font-bold">VEM COMIGO?</p>
          </div>
        </div>
      </div>
    </section>
  );
}
