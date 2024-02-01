"use client";

import React, { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import LayoutAside from "./LayoutAside";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useContext(ApplicationContext);
  return (
    <section className="bg-gray-800 text-slate-300 md:grid md:grid-cols-12 min-h-screen justify-between relative">
      <Header />
      <LayoutAside data={data} />
      <section className="md:col-span-6  flex flex-col justify-center items-center relative ">
        {children}
      </section>
      <Footer />
    </section>
  );
}
