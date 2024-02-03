import { montserrat } from "@/app/fonts";
import { CCM } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function CommentCaMarche({}: Props) {
  return (
    <section
      id="how-it-works"
      className="bg-gray-200 py-10 md:py-20 text-lg text-light"
    >
      <div className="container text-center">
        <h2
          className={`${montserrat.className} text-3xl md:text-5xl font-bold text-center`}
        >
          {"Obtenez un compte"}
        </h2>
        <p className="md:text-2xl py-2">{"Utilisez RabbitMQ"}</p>
      </div>
      <div className="container md:py-10 grid md:grid-cols-3 gap-4">
        {CCM.map((item) => (
          <div
            key={item.label}
            className="bg-white grid grid-cols-5 rounded-xl"
          >
            <div className="image relative h-42 col-span-2">
              <Image
                alt={`MQDesk ${item.label} ${item.descriptionOne} ${item.descriptionTwo}`}
                fill={true}
                sizes="100%"
                src={item.image}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className={`mb-3 text-center col-span-3 h-full`}>
              <div className="pt-6 px-3 pb-4">
                <h3
                  className={`${montserrat.className} text-3xl font-bold mb-3`}
                >
                  {item.label}
                </h3>
                <p className="text-sm">{item.descriptionOne}</p>
                <p className="text-sm">{item.descriptionTwo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container flex items-center justify-center">
        <Link
          href="/sign-up"
          className="block bg-app-blue text-slate-50 text-lg md:text-xl front-bolder py-4 md:px-10 px-8 rounded-full inline-block"
        >
          Utiliser(Gratuitement) RabbitMQ
        </Link>
      </div>
    </section>
  );
}

export default CommentCaMarche;
