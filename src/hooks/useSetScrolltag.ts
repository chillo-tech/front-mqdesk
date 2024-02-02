'use client'

import { floatingFooterEmitter, floatingFooterEmitterEvents } from "@/components/floating-footer";
import { useScroll } from ".";
import { useEffect, useRef } from "react";

const useSetScrolltag = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const position = useScroll();
    useEffect(() => {
      if (containerRef.current?.offsetTop) {
        const offsetTop = containerRef.current.offsetTop;
        if (position.y > offsetTop - 20 && position.y < offsetTop + 20) {
          if (position.sens === "up") {
            floatingFooterEmitter.emit(
              floatingFooterEmitterEvents.SET_SELECTED,
              ``
            );
          } else {
            floatingFooterEmitter.emit(
              floatingFooterEmitterEvents.SET_SELECTED,
              `#${containerRef.current.id}`
            );
          }
        }
        const bottomOffset = offsetTop + containerRef.current.offsetHeight;
        if (position.y > bottomOffset -20 && position.y < bottomOffset + 20) {
          if (position.sens === "up") {
            floatingFooterEmitter.emit(
              floatingFooterEmitterEvents.SET_SELECTED,
              `#${containerRef.current.id}`
            );
          } else {
            floatingFooterEmitter.emit(
              floatingFooterEmitterEvents.SET_SELECTED,
              ``
            );
          }
        }
      }
    }, [position]);
    return {containerRef , }
}

export default useSetScrolltag
