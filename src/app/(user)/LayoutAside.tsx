import Footer from "@/components/SmallFooter";
import Header from "@/components/SmallHeader";
import { DataType } from "@/types/WrapperContext";
import React from "react";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className="px-3 py-2 md:col-span-6 ">
      <div className="md:hidden">
        <Header data={data} />
      </div>

      <div className="hidden md:flex flex-col justify-between md:h-full">
        <Header data={data} />
        {/* <SuggestionsCardContainer /> */}
        {/* <h3 className="title text-slate-300 font-extrabold text-xl md:text-xl pl-2 mt-2 flex-grow">
          Ce que pensent nos stagiaires
        </h3> */}
        {/* <AvisCardContainer /> */}
        <Footer />
      </div>
    </aside>
  );
};

export default LayoutAside;
