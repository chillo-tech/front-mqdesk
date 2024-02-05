import { montserrat } from "@/app/fonts";
import Link from "next/link";
import React from "react";

type Props = {};

function Support({}: Props) {
  return (
    <section
      id="support"
      className="bg-app-blue opacity-80 py-20 md:py-20 text-white text-xl text-light text-center"
    >
      <div className="container flex flex-col items-center gap-3">
        <h2
          className={`${montserrat.className} text-3xl md:text-5xl font-bold text-center`}
        >
          <span className="mr-2">MQ DESK</span> {"- RabbitMQ as a Service"}
        </h2>
        <p>
          {
            "Nous sommes disponible pour répondre à toutes vos questions ou demandes de renseignements."
          }
        </p>
        <p>{"L'essai de MQDesk est 100 % gratuit."}</p>
        <Link
          href="/contactez-nous"
          className="mt-6 border w-full text-center md:w-fit text-white border-white hover:bg-white hover:text-app-blue text-lg md:text-xl front-bolder py-4 md:px-10 px-8 rounded-full inline-block"
        >
          Contactez nous
        </Link>
      </div>
    </section>
  );
}

export default Support;
