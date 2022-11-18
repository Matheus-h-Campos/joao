import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Section_5({}: Props) {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            O QUE VOCÊ VAI RECEBER NO TREINAMENTO
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative block overflow-hidden rounded-xl border border-red-800 shadow-xl transition  hover:shadow-red-500/10 bg-1 bg-cover bg-left bg-no-repeat">
            <div className="relative min-w-full min-h-full bg-gradient-to-b from-black/50 to-black p-8 pt-40">
              <h2 className="text-xl font-bold">Instruções Personalizadas</h2>
              <p>
                Vou te acompanhar pessoalmente e você terá um canal de
                comunicação direto comigo
              </p>
            </div>
          </div>

          <div className="relative block overflow-hidden rounded-xl border border-red-800 shadow-xl transition  hover:shadow-red-500/10 bg-2 bg-cover bg-center bg-no-repeat">
            <div className="relative min-w-full min-h-full bg-gradient-to-b from-black/50 to-black p-8 pt-40">
              <h2 className="text-xl font-bold">
                Vídeo Aulas Feedback e Orientação
              </h2>
              <p>
                Serão postadas 3 aulas por semana e farei a orientação das aulas
                após
              </p>
            </div>
          </div>

          <div className="relative block  overflow-hidden rounded-xl border border-red-800 shadow-xl transition  hover:shadow-red-500/10 bg-3 bg-cover bg-left-top bg-no-repeat">
            <div className="relative min-w-full min-h-full bg-gradient-to-b from-black/50 to-black p-8 pt-40">
              <h2 className="text-xl font-bold">Material complementar</h2>
              <p>
                Receberá materiais exclusívos e preparados para extrair o máximo
                de resultado possível
              </p>
            </div>
          </div>

          <div className="relative block overflow-hidden rounded-xl border border-red-800 shadow-xl transition  hover:shadow-red-500/10 bg-5 bg-cover bg-bottom bg-no-repeat">
            <div className="relative min-w-full min-h-full bg-gradient-to-b from-black/50 to-black p-8 pt-40">
              <h2 className="text-xl font-bold text-white">Grupo de Alunos</h2>
              <p>
                Você não estará sozinho! Faremos um canal de comunicação entre
                os alunos para promover mais motivação e interações sociais
              </p>
            </div>
          </div>

          <div className="relative block overflow-hidden rounded-xl border border-red-800 shadow-xl transition  hover:shadow-red-500/10 bg-4 bg-cover bg-top bg-no-repeat">
            <div className="relative min-w-full min-h-full bg-gradient-to-b from-black/50 to-black p-8 pt-40">
              <h2 className="text-xl font-bold text-white">E mais,</h2>
              <p>muito mais…</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://sun.eduzz.com/1681038"
            className="mt-8 inline-flex items-center rounded-full border border-white  bg-red-600 px-16 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-red-500 "
          >
            <span className="text-xl font-bold"> QUERO COMEÇAR AGORA </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
