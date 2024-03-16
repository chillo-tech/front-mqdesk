import Logo from "@/components/Logo";
import { DataType } from "@/types/WrapperContext";
import Image from "next/image";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className="container px-3 max-w-[500px]">
      <div className="mt-1 font-extralight infos bg--900 px-2 flex flex-col grow">
        <Logo />
        <h1
          className="title font-extrabold text-3xl md:text-3xl"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.title }}
        />
        <p
          className="mb-2 text-bold md:my-5 text-l md:text-left"
          dangerouslySetInnerHTML={{ __html: data?.leftComponent?.description }}
        />
        {data?.leftComponent?.displayImage ? (
          <Image
            alt="mqdesk"
            src={"/MQDESK.png"}
            priority
            height={400}
            width={400}
            className="hidden md:block"
            style={{
              margin: "4px auto",
              objectFit: "contain",
            }}
          />
        ) : null}
      </div>
    </aside>
  );
};

export default LayoutAside;
