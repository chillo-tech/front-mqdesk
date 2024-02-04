"use client";
import { montserrat } from "@/app/fonts";
import { ENTREPRISES } from "@/utils";

type Props = {
  classes: string;
};

function Clients({ classes }: Props) {
  return (
    <section className={`${classes}`} id="clients">
      <div className="container flex flex-col md:flex-row items-center md:gap-8 gap-4 md:py-10 py-6">
        <h3 className="text-lg">Ils nous font confiance</h3>
        <nav
          className={`flex flex-col md:flex-row md:col-span-2 uppercase md:gap-8 ${montserrat.className} text-2xl md:text-3xl font-bold`}
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
