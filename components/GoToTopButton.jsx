"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function GoToTopButton() {
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const shouldShow = window.scrollY > 300; // show after 300px
      setVisible(shouldShow);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;

    if (visible) {
      gsap.to(btnRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(btnRef.current, {
        autoAlpha: 0,
        y: 12,
        duration: 0.2,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [visible]);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 0.8,
      ease: "power2.out",
      scrollTo: { y: 0, autoKill: true },
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Go to top"
      className="
        fixed bottom-6 right-6 z-[9999]
        inline-flex items-center justify-center
        h-12 w-12 rounded-full
        bg-white shadow-lg ring-1 ring-black/10
        hover:shadow-xl active:scale-95
        transition
      "
      style={{
        opacity: 0,
        transform: "translateY(12px)",
        pointerEvents: "none",
      }}
    >
      <FaArrowUp className="text-black text-lg" />
    </button>
  );
}
