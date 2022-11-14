import React from 'react';

type Props = {};

export default function Section_3({}: Props) {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-8 ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <img
            alt="perfil"
            src="/perfil.jpg"
            className="aspect-square w-full max-w-xl rounded-xl mx-auto shadow-lg object-cover"
          />
          <div className="max-w-lg mx-auto text-ellipsis p-4 border border-gray-100/20  bg-gradient-to-b from-white/10  rounded-xl shadow-lg">
            <p className="text-xl font-medium lg:text-2xl  text-white">
              Como atleta competitivo e com mais de 7 anos de experiência e
              estudo, quero compartilhar o conhecimento que adquiri. Muitas
              dessas experiências vieram de tentativa e erro, mas você não
              precisa repetir nenhum dos meus erros. Estou pronto para estender
              meu conhecimento para ajudar você a alcançar o físico dos seus
              sonhos.
            </p>
            <p className="text-xl font-medium lg:text-2xl text-white pt-12">
              Meu objetivo é e sempre foi ajudar o maior número possível de
              pessoas a atingirem seus objetivos.{' '}
              <strong className="text-red-500">
                Se você está preparado para mudar de vida e comprometido com a
                mudança, eu vou te ajudar.
              </strong>
            </p>
            <p className="text-xl font-medium lg:text-2xl text-white pt-12">
              Começar muitas vezes pode ser esmagador e intimidador, vou segurar
              sua mão durante esse processo, através dos obstáculos físicos e
              emocionais, adotando uma abordagem sustentável para tornar isso
              parte do seu estilo de vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
