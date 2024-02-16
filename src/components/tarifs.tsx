import { montserrat } from "@/app/fonts";
import { TARIFS } from "@/utils";
import Link from "next/link";
import React from "react";
import Action from "./Action";

type Props = {};

function Tarifs({}: Props) {
  return (
    <section
      id="tarifs"
      className="bg-[#e1eaf4] py-10 text-light"
    >
      <div className="container text-center">
        <h2 className={`${montserrat.className} text-3xl font-bold text-center`}>
          {"Une tarification transparente."}
        </h2>
        <p className="py-2">
          {"Choisissez un forfait qui vous convient."}
        </p>
      </div>
      <div className="container md:py10 grid md:grid-cols-3">
        {TARIFS.map((item, index) => (
          <div
            key={item.label + index}
            className={`bg-white mb-3 ${
              index === 1
                ? "md:border-l-2 md:border-r-2 md:border-app-blue"
                : ""
            }`}
          >
            <div className="pt-6 px-3 pb-4">
              <h3 className={`${montserrat.className} text-xl font-bold`}>
                {item.label}
              </h3>
              <p className="text-sm">{item.descriptionOne}</p>
              <p className="text-sm">{item.descriptionTwo}</p>
              <p
                className={`${montserrat.className} text-lg font-bold my-14 leading-[2srem]`}
              >
                {item.content ? (
                  item.price
                ) : (
                  <span className="text-white">{item.price}</span>
                )}
              </p>
              <div className="flex flex-col items-center">
                <Link
                  href="/sign-up"
                  className="block w-full md:w-fit bg-app-blue text-slate-50 front-bolder py-2 text-sm px-4 rounded-full text-center"
                >
                  Utiliser(Gratuitement) RabbitMQ
                </Link>
                <Link
                  href="/contactez-nous"
                  className="mt-2 border-b text-center md:w-fit border-app-blue text-app-blue"
                >
                  Contactez nous
                </Link>
              </div>
            </div>
            {item.content ? (
              <div className="pt-6 pb-8 px-6 border-t border-app-blue">
                <p className={`${montserrat.className} font-bold mb-2`}>
                  {"Contenu de l'offre"}
                </p>
                <ul className="list-disc leading-8 mx-6">
                  {item.content.map((contentItem, idx) => (
                    <li
                      key={contentItem.label + idx}
                    >{`${contentItem.label}`}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <Action />
    </section>
  );
}

export default Tarifs;
