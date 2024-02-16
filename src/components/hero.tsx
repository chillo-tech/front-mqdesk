import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="px-2 grid grid-cols-2 md:grid-cols-5 container items-center">
      <div className="md:py-32 pt-2 col-span-3">
        <h1
          className={`${montserrat.className} text-2xl md:text-3xl font-bold`}
        >
          <span className="text-blue-700 mr-2">RabbitMQ</span> {"hébergé"}{" "}
          <br />
          {"pour tous vos projets"}
        </h1>
        <p className="mt-3">
          {"Faites communiquer vos projets on s'occupe de l'infrastructure"}
        </p>
        <p className="flex flex-col gap-1 md:flex-row md:gap-4 mt-2 md:mt-10 mb-2">
          <span className="flex items-center">
            <span className="icon bg-white rounded-full w-4 h-4 text-center flex items-center justify-center mr-2">
              &#10003;
            </span>
            Facile à utiliser
          </span>
          <span className="flex items-center">
            <span className="icon bg-white rounded-full w-4 h-4 text-center flex items-center justify-center mr-2">
              &#10003;
            </span>
            Disponible 24/7
          </span>
          <span className="flex items-center">
            <span className="icon bg-white rounded-full w-4 h-4 text-center flex items-center justify-center mr-2">
              &#10003;
            </span>
            Support disponible
          </span>
        </p>
        <Link
          href="/sign-up"
          className="block w-full text-center md:w-fit bg-app-blue text-slate-50 front-bolder py-2 md:px-10 px-8 rounded-full inline-block"
        >
          Utiliser(Gratuitement) RabbitMQ
        </Link>
      </div>
      <div className="hidden md:block col-span-2 relative h-full">
        <Image
          alt="mqdesk.io RabbitMQ hébergé pour vos projets"
          priority
          src={"/MQDESK.png"}
          sizes="100%"
          fill={true}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
