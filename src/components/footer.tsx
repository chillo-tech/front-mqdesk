import { montserrat } from "@/app/fonts";
import { siteLinks } from "@/data/sitesLinks";
import { scrollToId } from "@/utils";
import Link from "next/link";
import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="border-t border-slate-300 col-span-12 bg-gray-800 text-slate-300 pb-20 pt-10">
      <div className="container text-center">
        <h2
          className={`${montserrat.className} text-3xl font-bold text-center font-bold mb-4 flex flex-col items-center`}
        >
          MQ DESK - votre saas pour rabbitmq hébergé
        </h2>
        <p className="py-1 font-light">
          {
            "Découvrez comment vous et votre équipe pouvez profiter de notre infrastructure et faire avancer vos projets."
          }
        </p>
        <p className="py-1 font-light">
          {
            "On s'occupe de l'infrastructure et vous vous occupez de vos projets"
          }
        </p>
      </div>
      <p className="flex items-center justify-center py-8">
        <Link
          href={`${siteLinks["sign-up"].host}${siteLinks["sign-up"].path}`}
          className={`${montserrat.className} text-center hover:text-gray-800 hover:bg-slate-300 text-2xl font-bold py-3 mx-4 md:mx-0 md:py-6 md:px-20 border border-slate-300 rounded-md flex flex-col items-center`}
        >
          Utiliser(Gratuitement) RabbitMQ
        </Link>
      </p>
      <div className="container grid md:grid-cols-3 md:gap-6">
        <div className="text-center md:text-left">
          <Link
            href="/"
            className="py-2 md:inline-block text-2xl sm:text-4xl font-extrabold text-slate-200 text-center display-block"
          >
            MQ DESK
          </Link>
        </div>
        <div></div>
        <div className="flex flex-col md:flex-row items-center justify-end gap-4 mt-4 md:mt-0">
          <Link href="/" className="px-2">
            Prix
          </Link>
          <Link
            href={`${siteLinks["sign-up"].host}${siteLinks["sign-up"].path}`}
            className="px-2"
          >
            Commencer
          </Link>
          <button className="px-2" onClick={scrollToId("support")}>
            Support
          </button>
          <Link
            href={`${siteLinks["contact-us"].host}${siteLinks["contact-us"].path}`}
            className="px-2"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="footer-bottom pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-3 pb-3">
              <hr />
              <p className="mb-0 pt-4">
                &copy; Copyright {new Date().getFullYear()} MQDesk.io.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
