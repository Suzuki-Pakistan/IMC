"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TimelineSection = () => {
  const containerRef = useRef();

  const challenges = [
    {
      id: 1,
      title: "New Vehicle Zero CO2 Emissions Challenge",
      img: "/challenge/c1.png",
    },
    {
      id: 2,
      title: "Life Cycle Zero CO2 Emissions Challenge",
      img: "/challenge/c2.png",
    },
    {
      id: 3,
      title: "Plant Zero CO2 Emissions Challenge",
      img: "/challenge/c3.png",
    },
    {
      id: 4,
      title: "New Vehicle Zero CO2 Emissions Challenge",
      img: "/challenge/c4.png",
    },
    {
      id: 5,
      title: "Life Cycle Zero CO2 Emissions Challenge",
      img: "/challenge/c5.png",
    },
    {
      id: 6,
      title: "Plant Zero CO2 Emissions Challenge",
      img: "/challenge/c6.png",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".timeline-section");

      sections.forEach((section) => {
        const line = section.querySelector(".progress-line");
        const dot = section.querySelector(".status-dot");
        const image = section.querySelector(".image-content");

        // Target each word span created in the render
        const words = section.querySelectorAll(".word");

        // 1. Progress Line Animation (Scrubbed)
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          },
        );

        // 2. Entrance Animation (Triggered)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 40%", // Trigger slightly earlier for better flow
            toggleActions: "play none none reverse",
          },
        });

        tl.to(dot, {
          backgroundColor: "#EB0A1E",
          borderColor: "#EB0A1E",
          duration: 0.4,
        })
          // Word-by-word reveal
          .fromTo(
            words,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1, // This creates the "one by one" effect
              ease: "power3.out",
            },
            "<",
          )
          // Smooth image reveal using clip-path
          .fromTo(
            image,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.8,
              ease: "power4.inOut",
            },
            "<.1",
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden ">
      {challenges.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={item.id}
            className={`timeline-section relative flex min-h-screen items-stretch ${!isEven ? "flex-row-reverse" : ""}`}
          >
            {/* TEXT SIDE */}
            <div
              className={`flex-1 flex items-center py-12 px-10 md:px-24 ${isEven ? "justify-end text-right" : "justify-start text-left"}`}
            >
              <div className="text-content max-w-[700px]">
                <span className="text-[#EB0A1E] font-bold text-md uppercase block mb-4">
                  Challenge {item.id}
                </span>
                <h2 className="text-4xl md:text-6xl font-light text-black leading-tight overflow-hidden">
                  {/* Split title into individual spans for GSAP to target */}
                  {item.title.split(" ").map((word, i) => (
                    <span key={i} className="inline-block mr-[0.2em]">
                      <span className="word inline-block">{word}</span>
                    </span>
                  ))}
                </h2>
              </div>
            </div>

            {/* CENTER TRACK */}
            <div className="relative w-[2px] flex flex-col items-center flex-shrink-0">
              <div className="absolute inset-0 w-full bg-gray-200" />
              <div className="progress-line absolute inset-0 w-full bg-[#EB0A1E] origin-top scale-y-0" />
              <div className="status-dot absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gray-400 border-4 border-gray-300 z-10" />
            </div>

            {/* IMAGE SIDE */}
            <div
              className={`flex-1 flex items-center py-12 px-10 md:px-24 ${isEven ? "justify-start" : "justify-end"}`}
            >
              <div
                data-link-button
                data-link-text="Full Screen"
                className="image-content relative overflow-hidden w-full max-w-[600px] aspect-[3/2] "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                  sizes="450px"
                />
              </div>
            </div>
          </div>
        );
      })}
      <div className="h-[50vh]" />
    </div>
  );
};

export default TimelineSection;
