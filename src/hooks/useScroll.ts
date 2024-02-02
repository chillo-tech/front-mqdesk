"use client";
import { useState, useEffect } from "react";

export interface ScrollPosition {
  x: number;
  y: number;
  sens: "up" | "down";
}

const useScroll = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    sens: "down",
  });

  const handleScroll = () => {
    setScrollPosition((prev) => {
      if (prev.y < window.scrollY) {
        return {
          x: window.scrollX,
          y: window.scrollY,
          sens : 'down',
        };
      }else {
        return {
          x: window.scrollX,
          y: window.scrollY,
          sens : 'up',
        };
      }
      
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPosition;
};

export { useScroll };
