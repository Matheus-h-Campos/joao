import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-gradient-to-b from-gray-900 to-red-500 text-white"
    >
      <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center items-center">
          <p className="text-4xl font-extrabold sm:text-6xl">
            GRANDES SONHOS REQUEREM GRANDES AÇÕES
          </p>

          <Link
            className="mt-8 inline-block rounded-full border border-white/25 px-12 py-3 text-sm font-medium hover:bg-white hover:text-red-500"
            href="https://calendly.com/joaoandre/consultoria-personalizada"
          >
            COMECE AGORA
          </Link>
          <div className="mt-16 flex cursor-pointer gap-6 justify-center">
            <div className="rounded-full border border-white/25 p-2 hover:opacity-75">
              <SocialIcon
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                fgColor="currentColor"
                url="https://www.instagram.com/joaoandre.campos/"
              />
            </div>
            <div className="rounded-full border border-white/25 p-2 hover:opacity-75">
              <SocialIcon
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                fgColor="currentColor"
                network="whatsapp"
                url="https://api.whatsapp.com/send/?phone=5511971084479&text&type=phone_number&app_absent=09"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/25 pt-12 sm:flex sm:items-center sm:justify-between" />
      </div>
    </footer>
  );
}
