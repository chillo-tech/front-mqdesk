import { montserrat } from '@/app/fonts';
import { OFFRES } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import Action from './Action';

interface Props {}

function Offre(props: Props) {
  return (
    <section className="py-10 text-lg text-light">
      <div className="container text-center">
        <h2 className={`${montserrat.className} text-3xl font-bold text-center`}>
          {'Notre offre'}
        </h2>
      </div>
      <div className="container py-4 grid md:grid-cols-3 gap-8">
        {OFFRES.map((item) => (
          <div key={item.label} className="grid grid-cols-6 rounded-xl">
            <div className="image relative h-42 col-span-2 h-full flex items-center">
              <Image
                alt={`MQDesk ${item.label} ${item.descriptionOne}`}
                src={item.image}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className={`mb-3 text-center col-span-4 h-full flex items-start`}>
              <div className="pt-6 px-3 pb-4">
                <h3 className={`${montserrat.className} text-lg font-bold mb-3`}>{item.label}</h3>
                <p className="text-sm">{item.descriptionOne}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Action />
    </section>
  );
}

export default Offre;
