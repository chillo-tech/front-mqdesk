"use client";

import React, { useContext } from "react";
import { ApplicationContext } from "./ApplicationContext";
import LayoutAside from "./LayoutAside";
import Cube from "@/components/Cube";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, setData } = useContext(ApplicationContext);
  return (
    <section className="relative">
      <Cube style={{ position: "absolute", top: 70, right: 45 }} light />
      <Cube style={{ position: "absolute", bottom: 70, left: 45 }} light />
      <div className="container grid md:grid-cols-2 content-center gap-10 h-[100vh]">
        <LayoutAside data={data} />
        <section className="relative ">{children}</section>
      </div>
    </section>
  );
}
