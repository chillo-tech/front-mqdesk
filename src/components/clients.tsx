"use client";
import { montserrat } from "@/app/fonts";
import { ENTREPRISES } from "@/utils";

type Props = {
  classes: string;
};

function Clients({ classes }: Props) {
  return (
    <section className={`${classes}`} id="clients">
      <div className="container flex flex-col md:flex-row items-center gap-4 py-6">
        <h3>Ils nous font confiance</h3>
        <nav
          className={`flex flex-col md:flex-row md:col-span-2 uppercase ${montserrat.className} text-2xl font-bold`}
        >
          {ENTREPRISES.map((item) => (
            <span
              key={item.label}
              className="rounded-full py-2 px-4 block text-center"
            >
              {item.label}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Clients;
