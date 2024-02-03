"use client";
import {
  floatingFooterEmitter,
  floatingFooterEmitterEvents,
} from "@/components/floating-footer";
import { useEffect, useState } from "react";

const ids = ["clients", "avantages", "avis", "tarifs", "support"];

const useFloatingFooter = () => {
  const [sections, setSections] = useState<HTMLElement[]>();
  useEffect(() => {
    setSections((prev) => {
      const res: HTMLElement[] = [];
      ids.forEach((el) => {
        const elToPush = document.getElementById(el);
        if (elToPush) res.push(elToPush);
      });

      return res;
    });
  }, []);
  if (typeof window !== "undefined")
    window.onscroll = () => {
      sections?.forEach((sec) => {
        if (sec) {
          let top = window.scrollY;
          let offset = sec.offsetTop;
          let height = sec.offsetHeight;
          let id = sec.getAttribute("id");
          if (top >= offset && top < offset + height) {
            floatingFooterEmitter.emit(
              floatingFooterEmitterEvents.SET_SELECTED,
              `#${id}`
            );
          }
        }
      });
    };
};

export { useFloatingFooter };
