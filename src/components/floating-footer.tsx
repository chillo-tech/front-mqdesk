"use client";
import { siteLinks } from "@/data/sitesLinks";
import { useFloatingFooter } from "@/hooks/useFloatingFooter";
import { MENUS, scrollToId } from "@/utils";
import { Emitter } from "@/utils/EventEmitter";
import Link from "next/link";
import { useState } from "react";

interface Props {}

const floatingFooterEmitter = new Emitter();

const floatingFooterEmitterEvents = {
  SET_SELECTED: "SET_SELECTED",
};

export const FloatingFooter = (props: Props) => {
  const [actualLink, setActual] = useState("");

  floatingFooterEmitter.on(
    floatingFooterEmitterEvents.SET_SELECTED,
    (toSelect: string) => {
      setActual(toSelect);
    }
  );
  useFloatingFooter();
  return (
    <div className="floating hidden md:fixed bottom-10 text-white md:flex items-center justify-center w-full">
      <nav className="p-2 bg-gray-900 rounded-full border border-slate-500 overflow-hidden">
        <nav className="flex text-white ">
          <button
            onClick={scrollToId("#hero")}
            className="text-xl bg-gray-700 font-extralight rounded-full py-1 px-5 hover:bg-slate-100 hover:text-gray-900"
          >
            &#x2191;
          </button>
          {MENUS.filter((item) => item.footer).map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={scrollToId(item.path)}
              className={`font-extralight rounded-full py-2 px-5 ${
                actualLink === item.path ? "bg-slate-100 text-gray-900" : ""
              } hover:bg-slate-100 hover:text-gray-900`}
            >
              {item.label}
            </button>
          ))}
          <Link
            href={`${siteLinks["sign-up"].host}${siteLinks["sign-up"].path}`}
            className="bg-gray-700 font-extralight rounded-full py-3 px-5 hover:bg-slate-100 hover:text-gray-900"
          >
            Sign up
          </Link>
        </nav>
      </nav>
    </div>
  );
};

export { floatingFooterEmitter, floatingFooterEmitterEvents };
