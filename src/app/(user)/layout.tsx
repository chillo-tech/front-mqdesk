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
      <Cube
        style={{ zIndex: -1, position: "absolute", top: 70, right: 45 }}
        light
      />
      <Cube
        style={{ zIndex: -1, position: "absolute", bottom: 70, left: 45 }}
        light
      />
      <div className="container md:grid md:grid-cols-2 md:content-center gap-10 md:h-[100vh]">
        <LayoutAside data={data} />
        <section className="relative ">{children}</section>
      </div>
    </section>
  );
}
