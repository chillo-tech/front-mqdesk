import { MENUS } from "@/utils";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header
      id="hero"
      className="col-span-12 py-3 md:py-0 flex items-center justify-between w-full container"
    >
      <Link
        href="/"
        className="px-1 md:px-0 py-2 inline-block text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        MQ DESK
      </Link>
      <nav className="hidden md:flex text-black">
        {MENUS.filter((item) => item.footer).map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className="text-xl font-light rounded-full py-2 px-4 hover:bg-slate-100 hover:text-gray-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href="/inscription"
        className="block bg-app-blue text-slate-50 text-lg front-bolder py-2 px-6 rounded-full"
      >
        Utiliser RabbitMQ
      </Link>
    </header>
  );
}

export default Header;
