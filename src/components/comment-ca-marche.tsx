import { montserrat } from '@/app/fonts';
import { CCM } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import Action from './Action';

type Props = {};

function CommentCaMarche({}: Props) {
  return (
    <section id="how-it-works" className="bg-gray-200 py-10 text-lg text-light">
      <div className="container text-center">
        <h2 className={`${montserrat.className} text-3xl font-bold text-center`}>
          {'Obtenez un compte'}
        </h2>
        <p className="md:text-lg py-2">{'Utilisez RabbitMQ'}</p>
      </div>
      <div className="container md:py-4 grid md:grid-cols-3 gap-4">
        {CCM.map((item) => (
          <div key={item.label} className="bg-white rounded-xl">
            <h3 className={`${montserrat.className} text-lg font-bold text-center mt-2`}>
              {item.label}
            </h3>
            <div className="grid grid-cols-5 ">
              <div className="image relative col-span-2 flex items-center justify-center">
                <Image
                  alt={`MQDesk ${item.label} ${item.descriptionOne} ${item.descriptionTwo}`}
                  width={80}
                  height={80}
                  src={item.image}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className={`text-center col-span-3 h-full`}>
                <div className="py-2 px-1">
                  <p className="text-xs">{item.descriptionOne}</p>
                  <p className="text-xs">{item.descriptionTwo}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Action />
    </section>
  );
}

export default CommentCaMarche;
