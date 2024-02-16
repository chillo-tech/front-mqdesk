import { montserrat } from "@/app/fonts";
import { AVIS } from "@/utils";

type Props = {};

function AvisRecus({}: Props) {
  return (
    <section id="avis" className="py-10 md:py-10 text-light">
        <h2 className={`${montserrat.className} text-3xl font-bold text-center`}>
        {"Nos utilisateurs donnent leurs avis"}
      </h2>
      <div className="container grid md:grid-cols-3 gap-6 mt-4">
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
