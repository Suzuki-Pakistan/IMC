"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RotatingWheel() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const wheelRef = useRef(null);

  const numberRefs = useRef([]);
  const lineRefs = useRef([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndexRef = useRef(-1);

  const items = useMemo(
    () => [
      { title: "Discovery", desc: "Understanding the problem & users." },
      { title: "Design", desc: "Shaping the experience & flow." },
      { title: "Build", desc: "Developing clean, scalable code." },
      { title: "Launch", desc: "Going live with confidence." },
      { title: "Scale", desc: "Iterating, optimizing, growing." },
    ],
    [],
  );

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wheelCtx = gsap.context(() => {
      if (!sectionRef.current || !pinRef.current || !wheelRef.current) return;

      numberRefs.current = numberRefs.current.slice(0, items.length);
      lineRefs.current = lineRefs.current.slice(0, items.length);

      const st = ScrollTrigger.create({
        id: "wheel-pin",
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (items.length + 1)}`,
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,

        onUpdate: (self) => {
          const progress = self.progress;

          // ✅ don’t create a tween each tick (prevents jitter)
          gsap.set(wheelRef.current, {
            rotate: progress * (items.length * 70),
            transformOrigin: "50% 50%",
          });

          const totalSteps = items.length - 1;
          const idx = clamp(
            Math.round(progress * totalSteps),
            0,
            items.length - 1,
          );

          if (idx !== lastIndexRef.current) {
            lastIndexRef.current = idx;
            setActiveIndex(idx);

            numberRefs.current.forEach((el, i) => {
              if (!el) return;
              const isActive = i === idx;

              gsap.to(el, {
                scale: isActive ? 1.12 : 1,
                duration: 0.25,
                overwrite: true,
              });

              const line = lineRefs.current[i];
              if (line) {
                gsap.to(line, {
                  opacity: isActive ? 1 : 0.35,
                  scaleX: isActive ? 1.05 : 1,
                  duration: 0.25,
                  overwrite: true,
                  transformOrigin: "left center",
                });
              }
            });
          }
        },
      });

      // ✅ refresh after both pinned sections are mounted
      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => st.kill();
    }, sectionRef);

    return () => wheelCtx.revert();
  }, [items]);

  const containerSize = 900;
  const center = containerSize / 2;
  const radius = 210;
  const numberSize = 52;

  const lineStartRadius = radius - 55;
  const lineWidth = 54;

  return (
    <section ref={sectionRef} className="relative w-full">
      <div
        ref={pinRef}
        className="mx-auto flex min-h-screen items-center justify-center px-4"
      >
        <div
          className="relative"
          style={{ width: containerSize, height: containerSize }}
        >
          {/* Wheel Image */}
          <div
            ref={wheelRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 500, height: 500 }}
          >
            <Image
              src="/wheel.png"
              alt="Wheel"
              fill
              className="object-contain"
              priority
              onLoadingComplete={() => ScrollTrigger.refresh()}
            />
          </div>

          {/* Center Content */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-65 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="h-65 flex flex-col items-center justify-center rounded-full bg-white/80 p-4 shadow-sm backdrop-blur">
              <div className="text-xs text-gray-500">
                Step {activeIndex + 1}
              </div>
              <div className="mt-1 text-lg font-semibold text-gray-900">
                {items[activeIndex].title}
              </div>
              <div className="mt-2 text-sm text-gray-700">
                {items[activeIndex].desc}
              </div>
            </div>
          </div>

          {/* Numbers + Connector Lines */}
          {items.map((_, i) => {
            const angle = (Math.PI * 2 * i) / items.length - Math.PI / 2;

            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;

            const lx = center + Math.cos(angle) * lineStartRadius;
            const ly = center + Math.sin(angle) * lineStartRadius;

            const isActive = i === activeIndex;

            return (
              <div key={i} className="absolute inset-0 ">
                <span
                  ref={(el) => (lineRefs.current[i] = el)}
                  className={`absolute block h-0.5 ${
                    isActive ? "bg-[#EB0A1E]" : "bg-gray-300"
                  }`}
                  style={{
                    left: lx,
                    top: ly,
                    width: lineWidth,
                    transform: `rotate(${(angle * 180) / Math.PI}deg)`,
                    transformOrigin: "left center",
                  }}
                />

                <button
                  ref={(el) => (numberRefs.current[i] = el)}
                  type="button"
                  className={[
                    "absolute grid place-items-center rounded-full border text-sm font-semibold transition-colors duration-200",
                    isActive
                      ? "border-[#EB0A1E] bg-[#EB0A1E] text-white"
                      : "border-gray-200 bg-white text-gray-800",
                  ].join(" ")}
                  style={{
                    width: numberSize,
                    height: numberSize,
                    left: x - numberSize / 2,
                    top: y - numberSize / 2,
                  }}
                >
                  {i + 1}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
