"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ✅ latest approach: use autoRaf (Lenis handles RAF internally)
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      // tweak feel:
      lerp: 0.05, //prev = 0.1 // smaller = smoother
      // duration: 1.2, // optional alternative to lerp
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
