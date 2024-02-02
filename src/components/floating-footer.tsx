"use client";
import { MENUS, scrollToId, Emitter } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {}

const floatingFooterEmitter = new Emitter();

const floatingFooterEmitterEvents = {
  SET_SELECTED: "SET_SELECTED",
};

export const FloatingFooter = (props: Props) => {
  const [actualLink, setActual] = useState("");
  const router = useRouter();

  floatingFooterEmitter.on(
    floatingFooterEmitterEvents.SET_SELECTED,
    (toSelect: string) => {
      setActual(toSelect);
    }
  );
  return (
    <div className="floating hidden md:fixed bottom-10 text-white md:flex items-center justify-center w-full">
      <nav className="p-2 bg-gray-900 rounded-full text-lg border border-slate-500 overflow-hidden">
        <nav className="flex text-white ">
          <button
            onClick={scrollToId("#hero")}
            className="text-4xl bg-gray-700 font-extralight rounded-full py-1 px-5 hover:bg-slate-100 hover:text-gray-900"
          >
            &#x2191;
          </button>
          {MENUS.filter((item) => item.footer).map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={(e) => {
                router.push(item.path);
                scrollToId(item.path)(e);
              }}
              className={`font-extralight rounded-full py-3 px-5 ${
                actualLink === item.path ? "bg-slate-100 text-gray-900" : ""
              } hover:bg-slate-100 hover:text-gray-900`}
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/sign-up"
            className="bg-gray-700 font-extralight rounded-full py-3 px-5 hover:bg-slate-100 hover:text-gray-900"
          >
            Sign Up
          </Link>
        </nav>
      </nav>
    </div>
  );
};

export { floatingFooterEmitter, floatingFooterEmitterEvents };
