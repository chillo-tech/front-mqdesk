import { DataType } from "@/types/WrapperContext";
import Image from "next/image";

const LayoutAside = ({ data }: { data: DataType }) => {
  return (
    <aside className="container px-3 max-h-0 text-white max-w-[500px]">
      <div className="mt-1 font-extralight infos bg--900 px-2 flex flex-col grow">
        <h2
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
            height={500}
            width={500}
            objectFit="contain"
          />
        ) : null}
      </div>
    </aside>
  );
};

export default LayoutAside;
