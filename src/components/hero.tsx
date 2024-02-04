import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="px-2 grid grid-cols-2 md:grid-cols-5 container items-center">
      <div className="md:pt-44 pt-2 md:pb-40 col-span-3">
        <h1
          className={`${montserrat.className} text-4xl md:text-6xl font-bold`}
        >
          <span className="text-blue-700 mr-2">RabbitMQ</span> {"hébergé"}{" "}
          <br />
          {"pour tous vos projets"}
        </h1>
        <p className="mt-3 text-lg md:text-2xl">
          {"Faites communiquer vos projets on s'occupe de l'infrastructure"}
        </p>
        <p className="flex flex-col gap-1 md:flex-row md:gap-4 mt-2 md:mt-10 mb-2 text-md md:text-lg">
          <span className="flex items-center">
            <span className="icon bg-white rounded-full w-8 h-8 text-center flex items-center justify-center mr-2">
              &#10003;
            </span>
            Facile à utiliser
          </span>
          <span className="flex items-center">
            <span className="icon bg-white rounded-full w-8 h-8 text-center flex items-center justify-center mr-2">
              &#10003;
            </span>
            Disponible 24/7
          </span>
          <span className="flex items-center">
            <span className="icon bg-white rounded-full w-8 h-8 text-center flex items-center justify-center mr-2">
              &#10003;
            </span>
            Support disponible
          </span>
        </p>
        <Link
          href="/sign-up"
          className="block w-full text-center md:w-fit bg-app-blue text-slate-50 text-lg md:text-xl front-bolder py-2 md:px-10 px-8 rounded-full inline-block"
        >
          Utiliser(Gratuitement) RabbitMQ
        </Link>
      </div>
      <div className="hidden md:block col-span-2 relative h-full py-10">
        <Image
          alt=""
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
