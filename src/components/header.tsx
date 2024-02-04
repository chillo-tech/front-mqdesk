"use client";
import { MENUS, scrollToId } from "@/utils";
import Link from "next/link";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import Logo from "./Logo";

type Props = {};

function Header({}: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <header
        id="hero"
        className="col-span-12 py-3 md:py-0 flex items-center justify-between w-full container"
      >
        <Logo />
        <nav className="hidden md:flex text-black">
          {MENUS.filter((item) => item.footer).map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={scrollToId(item.path)}
              className="text-xl font-light rounded-full py-2 px-4 text-gray-900"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <Link
          href="/sign-up"
          className="hidden md:block bg-app-blue text-slate-50 text-lg front-bolder py-2 px-6 rounded-full"
        >
          Utiliser RabbitMQ
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md text-app-brown font-semibold"
        >
          <HiOutlineMenuAlt3 className="w-8 h-8" />
        </button>
      </header>
      <nav
        className={`${isOpen ? "block fixed inset-0 bg-white z-50" : "hidden"}`}
      >
        <>
          {MENUS && MENUS.length ? (
            <ul className="h-full flex flex-col md:flex-row items-center md:justify-center justify-between">
              <li className="md:hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 absolute left-[50%] translate-x-[-50%] top-[5%] border-2 border-app-black"
                >
                  <RxCross1 />
                </button>
              </li>
              <div className="flex flex-col md:flex-row">
                {MENUS.filter((item) => item.footer).map((item: any) => (
                  <button
                    type="button"
                    key={item.label}
                    onClick={(e) => {
                      console.log("item.path", item.path);
                      setIsOpen(false);
                      scrollToId(item.path)(e);
                    }}
                    className="text-xl font-light rounded-full py-2 px-4 text-gray-900 block my-1 text-center"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <Link
                href="/sign-up"
                className="bg-app-blue text-slate-50 text-lg front-bolder py-2 px-6 rounded-full mb-32"
              >
                Utiliser RabbitMQ
              </Link>
            </ul>
          ) : null}
        </>
      </nav>
    </>
  );
}

export default Header;
