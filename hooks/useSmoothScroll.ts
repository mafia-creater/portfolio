"use client"; // Ensure this is at the top

import { useEffect, useRef, useState } from "react";

export default function useSmoothScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [locomotive, setLocomotive] = useState<any>(null);
  
  useEffect(() => {
      if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScroll) => {
          const scroll = new LocomotiveScroll.default({
          el: scrollRef.current as HTMLElement,
          smooth: true,
        });

        setLocomotive(scroll);
      });
    }

    return () => {
      if (locomotive) locomotive.destroy();
    };
  }, []);

  return scrollRef;
}
