/* eslint-disable @next/next/no-img-element */
import { DataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header({ data }: { data: DataType }) {
  return (
    <header className="pt-4 px-1">
      <Link
        href="/"
        className="px-1 md:px-0 py-2 inline-block text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        MQ DESK
      </Link>
      <div className="mt-1 font-extralight infos bg--900 md:py-7 px-2 flex flex-col grow">
        <h2
          className="title font-extrabold text-3xl md:text-3xl"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.title }}
        />
        <p
          className="mb-2 text-bold md:my-5 text-l md:text-left"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.description }}
        />
      </div>
    </header>
  );
}

export default Header;
