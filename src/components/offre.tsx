import { montserrat } from '@/app/fonts';
import { OFFRES } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {}

function Offre(props: Props) {
  return (
    <section id="tarifs" className="py-10 md:py-20 text-lg text-light">
      <div className="container text-center">
        <h2 className={`${montserrat.className} text-3xl md:text-5xl font-bold text-center`}>
          {'Notre offre'}
        </h2>
      </div>
      <div className="container md:py-10 grid md:grid-cols-3 gap-4">
        {OFFRES.map((item) => (
          <div key={item.label} className="grid grid-cols-5 rounded-xl">
            <div className="image relative h-42 col-span-2 h-full flex items-center">
              <Image
                alt={`MQDesk ${item.label} ${item.descriptionOne}`}
                src={item.image}
                width={200}
                height={200}
                className='rounded-full'
              />
            </div>
            <div className={`mb-3 text-center col-span-3 h-full flex items-center`}>
              <div className="pt-6 px-3 pb-4">
                <h3 className={`${montserrat.className} text-2xl font-bold mb-3`}>{item.label}</h3>
                <p className="text-sm">{item.descriptionOne}</p>
              </div>
            </div>
          </div>
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

export default Offre;
