import { scrollToId } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MenuItem = ({
  path,
  label,
  actualPath,
}: {
  path: string;
  label: string;
  actualPath: string;
}) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setAnchorTarget(document.getElementById(path));
  }, [path]);
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    anchorTarget?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link
      href={path}
      onClick={(e) => {
        handleClick;
      }}
      scroll={false}
      className={`font-extralight rounded-full py-3 px-5 ${
        actualPath === path ? "bg-slate-100 text-gray-900" : ""
      } hover:bg-slate-100 hover:text-gray-900`}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
