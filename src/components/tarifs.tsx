import { montserrat } from '@/app/fonts';
import { TARIFS } from '@/utils';
import { link } from 'fs';
import Link from 'next/link';
import React from 'react';

type Props = {};

function Tarifs({}: Props) {
  return (
    <section id="tarifs" className="bg-[#e1eaf4] py-20 md:py-20 text-lg text-light">
      <div className="container text-center">
        <h2 className={`${montserrat.className} text-3xl md:text-5xl font-bold text-center`}>
          {'Une tarification transparente pour tous.'}
        </h2>
        <p className="md:text-2xl py-2">{'Choisissez un forfait qui vous convient.'}</p>
      </div>
      <div className="container md:py-20 grid md:grid-cols-3 md:px-20">
        {TARIFS.map((item, index) => (
          <>
            <div
              key={item.label}
              className={`bg-white mb-3 ${index === 1 ? 'md:border-l-2 md:border-r-2 md:border-app-blue' : ''}`}
            >
              <div className="pt-6 px-6 pb-4">
                <h3 className={`${montserrat.className} text-3xl font-bold`}>{item.label}</h3>
                <p className="text-sm">{item.descriptionOne}</p>
                <p className="text-sm">{item.descriptionTwo}</p>
                <p className={`${montserrat.className} text-3xl font-bold my-14 leading-[2srem]`}>
                  {item.content ? (item.price): (<span className='text-white'>{item.price}</span>)}
                </p>
                <div className="flex flex-col items-center">
                  <Link
                    href="/inscription"
                    className="block bg-app-blue text-slate-50 text-lg md:text-lg front-bolder py-4 md:px-4 px-2 rounded-full text-center"
                  >
                    Utiliser(Gratuitement) RabbitMQ
                  </Link>
                  <Link
                    href="/contact"
                    className="mt-2 border-b border-app-blue text-app-blue text-lg"
                  >
                    Contactez nous
                  </Link>
                </div>
              </div>
              {item.content ? (
                <div className="pt-6 pb-8 px-6 border-t border-app-blue">
                  <p className={`${montserrat.className} text-xl font-bold mb-2`}>
                    {"Contenu de l'offre"}
                  </p>
                  <ul className="list-disc text-md leading-8 mx-6">
                    {item.content.map((contentItem) => (
                      <li key={contentItem.label}>{`${contentItem.label}`}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </>
        ))}
      </div>
      <div className="container flex items-center justify-center">
        <Link
          href="/inscription"
          className="block bg-app-blue text-slate-50 text-lg md:text-xl front-bolder py-4 md:px-10 px-8 rounded-full inline-block"
        >
          Utiliser(Gratuitement) RabbitMQ
        </Link>
      </div>
    </section>
  );
}

export default Tarifs;
