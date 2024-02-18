"use client";

const scrollToId =
  (id: string, scrollFn?: Function) =>
  (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (scrollFn) scrollFn();
    e?.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

export { scrollToId };
