import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex">
      <Image
        src="/cylindre.png"
        sizes="100%"
        style={{
          objectFit: "contain",
        }}
        alt="cylindre"
        height={30}
        width={30}
      />
      <Link
        href="/"
        className="px-1 md:px-0 py-2 inline-block text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
      >
        MQ DESK
      </Link>
    </div>
  );
};

export default Logo;
