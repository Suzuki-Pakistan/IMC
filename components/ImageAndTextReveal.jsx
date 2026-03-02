"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contentData = [
  {
    title: "IMC’s Commitment to a Greener Future",
    desc: "IMC is dedicated to reducing its environmental impact through sustainable practices like emission reduction, energy conservation, and waste management. With eco-friendly policies and awareness campaigns, IMC fosters a culture of environmental stewardship, ensuring a healthier planet for future generations.",
  },
  {
    title: "IMC Plants 920,000 Trees for the Environment",
    desc: "Through its Million Tree Plantation Drive, IMC has planted 920,000 trees, including native species like Neem and Gulmohar, across key locations in Karachi. This initiative helps combat climate change, improve air quality, and enhance the city's green cover, creating a healthier environment for its residents.",
  },
];

export default function ZoomScrollSection() {
  const containerRef = useRef(null);
  const zoomImageRef = useRef(null);
  const overlayRef = useRef(null);
  const innerContainerRef = useRef(null); // Ref for the expanding box
  const titleRefs = useRef([]);
  const descRefs = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${contentData.length * 300}%`, // Added more room for the expansion phase
          pin: true,
          scrub: 1,
        },
      });

      // 1. EXPANSION PHASE
      // Animate from 30vw/30vh to 100vw/100vh
      // tl.to(innerContainerRef.current, {
      //   // width: "100vw",
      //   height: "80vh",
      //   duration: 4,
      //   ease: "power1.inOut",
      // });
      // tl.to(innerContainerRef.current, {
      //   width: "80vw",
      //   // height: "100vh",
      //   duration: 4,
      //   ease: "power1.inOut",
      // });

      tl.to(innerContainerRef.current, {
        width: "100vw",
        height: "100vh",
        duration: 4,
        ease: "power1.inOut",
      });

      // 2. ZOOM OUT & DULL PHASE
      // Zoom from scale 1 to 4 (as per your code logic) and make it dull
      tl.to(
        zoomImageRef.current,
        {
          scale: 6,
          //   filter: "brightness(0.3) contrast(0.8)", // Making it "dull"
          duration: 6,
          ease: "none",
        },
        "-=0.2",
      ); // Start slightly before expansion ends

      tl.to(overlayRef.current, { opacity: 1 }, "=0.1"); // Placeholder if you want to animate the background as well

      // 3. SEQUENTIAL TEXT ANIMATION
      contentData.forEach((_, index) => {
        const title = titleRefs.current[index];
        const desc = descRefs.current[index];

        // --- TITLE PHASE ---
        tl.to(title, { opacity: 1, y: 0, duration: 2, ease: "power2.out" })
          .to(title, {
            opacity: 0,
            y: -40,
            duration: 2,
            delay: 1,
            ease: "power2.in",
          })

          // --- DESCRIPTION PHASE ---
          .to(desc, { opacity: 1, y: 0, duration: 2, ease: "power2.out" })
          .to(desc, {
            opacity: 0,
            y: -40,
            duration: 2,
            delay: 1,
            ease: "power2.in",
          });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden  flex items-center justify-center mt-[200px]"
    >
      {/* Expanding Inner Container */}
      <div
        ref={innerContainerRef}
        className="relative overflow-hidden z-10 w-[20vw] h-[60vh]"
        data-link-button
        data-link-text="View More"
      >
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/bg2.jpeg')" }}
        />

        {/* overlay layer */}

        <div
          ref={overlayRef}
          className="absolute h-full w-full inset-0 bg-cover bg-center z-5 bg-black/30 opacity-0"
        />

        {/* Zoom Image (Clouds) */}
        <div
          ref={zoomImageRef}
          className="absolute inset-0 z-10 bg-cover bg-center scale-[1]"
          style={{ backgroundImage: "url('/clouds.png')" }}
        />

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          {contentData.map((item, i) => (
            <div
              key={i}
              className="absolute w-full max-w-7xl flex flex-col items-center justify-center text-center"
            >
              <h2
                ref={(el) => (titleRefs.current[i] = el)}
                className="text-8xl  font-bold text-white opacity-0 translate-y-10 leading-tight uppercase tracking-tighter"
              >
                {item.title}
              </h2>

              <p
                ref={(el) => (descRefs.current[i] = el)}
                className="absolute text-4xl  text-gray-200 font-light max-w-5xl opacity-0 translate-y-10"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
