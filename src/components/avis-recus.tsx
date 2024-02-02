import useSetScrolltag from "@/hooks/useSetScrolltag";
import { AVIS } from "@/utils";
import React from "react";

type Props = {};

function AvisRecus({}: Props) {
  const { containerRef } = useSetScrolltag();
  return (
    <section
      id="avis"
      className="py-10 md:py-10 text-lg text-light"
      ref={containerRef}
    >
      <div className="container grid md:grid-cols-3 gap-6 text-md">
        {AVIS.map((item, index) => (
          <article
            key={`article-${index}`}
            className={`rounded-xl px-6 py-6 ${
              index % 2 == 1 ? "bg-blue-100" : "bg-blue-200"
            }`}
          >
            <div>{item.message}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AvisRecus;
