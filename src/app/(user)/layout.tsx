"use client";

import React, { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import LayoutAside from "./LayoutAside";
import Footer from "@/components/SmallFooter";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useContext(ApplicationContext);
  return (
    <section className="bg-gray-800 text-slate-300 md:grid md:grid-cols-12 min-h-screen justify-between relative">
      <LayoutAside data={data} />
      <section className="md:col-span-6  flex flex-col justify-center items-center relative ">
        {children}
        <div className="max-w-[100vw] md:max-w-full overflow-hidden md:hidden md:pt-5">
          {/* <SuggestionsCardContainer /> */}
          <h3 className="title font-extrabold text-xl md:text-xl pl-2 mt-2">
            Ce que pensent nos stagiaires
          </h3>
          {/* <AvisCardContainer /> */}
          <Footer color="white" />
        </div>
      </section>
    </section>
  );
}
