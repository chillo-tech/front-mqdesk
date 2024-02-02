"use client";

import {
  floatingFooterEmitter,
  floatingFooterEmitterEvents,
} from "@/components/floating-footer";

const scrollToId =
  (id: string) => (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    floatingFooterEmitter.emit(floatingFooterEmitterEvents.SET_SELECTED, id);
  };

export { scrollToId };
