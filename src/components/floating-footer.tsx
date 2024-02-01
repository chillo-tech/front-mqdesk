"use client";
import { MENUS, scrollToId } from "@/utils";
import Link from "next/link";
import React from "react";

interface Props {}

export const FloatingFooter = (props: Props) => {
  return (
    <div className="floating hidden md:fixed bottom-10 text-white md:flex items-center justify-center w-full">
      <nav className="p-2 bg-gray-900 rounded-full text-lg border border-slate-500 overflow-hidden">
        <nav className="flex text-white ">
          <Link
            href="#hero"
            className="text-4xl bg-gray-700 font-extralight rounded-full py-1 px-5 hover:bg-slate-100 hover:text-gray-900"
          >
            &#x2191;
          </Link>
          {MENUS.filter((item) => item.footer).map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={scrollToId(item.path)}
              className="font-extralight rounded-full py-3 px-5 hover:bg-slate-100 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/"
            className="bg-gray-700 font-extralight rounded-full py-3 px-5 hover:bg-slate-100 hover:text-gray-900"
          >
            Login
          </Link>
        </nav>
      </nav>
    </div>
  );
};
