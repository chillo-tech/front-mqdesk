"use client";


const scrollToId =
  (id: string) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

export { scrollToId };

