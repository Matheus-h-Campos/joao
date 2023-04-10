import React from 'react';

type Props = {};

export default function Section_5({}: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="px-6 md:px-12  text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <img
              alt="perfil"
              src="/perfil.jpg"
              className="aspect-square  rounded-xl  object-cover"
            />
            <div className="text-left text-lg">
              <h2 className="text-5xl font-bold lg:text-left  text-center mb-10">
                Quem é João André?
              </h2>
              <p className="">
                Como atleta competitivo e com mais de 7 anos de experiência e
                estudo, quero compartilhar o conhecimento que adquiri. Muitas
                dessas experiências vieram de tentativa e erro, mas você não
                precisa repetir nenhum dos meus erros. Estou pronto para
                estender meu conhecimento para ajudar você a alcançar o físico
                dos seus sonhos.
              </p>
              <br />
              <p className="">
                Meu objetivo é e sempre foi ajudar o maior número possível de
                pessoas a atingirem seus objetivos.{' '}
                <strong className="">
                  Se você está preparado para mudar de vida e comprometido com a
                  mudança, eu vou te ajudar.
                </strong>
              </p>
              <br />
              <p className="">
                Começar muitas vezes pode ser esmagador e intimidador, vou
                segurar sua mão durante esse processo, através dos obstáculos
                físicos e emocionais, adotando uma abordagem sustentável para
                tornar isso parte do seu estilo de vida.
              </p>
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
    </section>
  );
}
