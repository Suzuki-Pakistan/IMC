// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const Marqueesection = () => {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);
//   const headingRef = useRef(null);

//   const slidesData = [
//     { image: "/painting/p1.png" },
//     { image: "/painting/p2.png" },
//     { image: "/painting/p3.png" },
//     { image: "/painting/p4.png" },
//     { image: "/painting/p5.png" },
//     { image: "/painting/p6.png" },
//     { image: "/painting/p7.png" },
//     { image: "/painting/p8.png" },
//     { image: "/painting/p9.png" },
//   ];

//   useLayoutEffect(() => {
//     if (!containerRef.current || !sliderRef.current) return;

//     const ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");

//       const getTotalWidth = () =>
//         sliderRef.current.scrollWidth - window.innerWidth + 400;

//       // Heading reveal
//       gsap.fromTo(
//         headingRef.current,
//         { clipPath: "inset(100% 0% 0% 0%)", y: 30, opacity: 0 },
//         {
//           clipPath: "inset(0% 0% 0% 0%)",
//           y: 0,
//           opacity: 1,
//           duration: 0.5,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 60%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       // Pinned horizontal scroll timeline
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           pin: true,
//           scrub: 1,
//           start: "top top",
//           end: () => `+=${sliderRef.current.offsetWidth}`,
//           invalidateOnRefresh: true,
//         },
//       });

//       tl.to(sliderRef.current, {
//         x: () => -getTotalWidth(),
//         ease: "none",
//       });

//       // Per-panel reveal: bottom -> top, only when panel comes into viewport
//       //   panels.forEach((panel) => {
//       //     const revealEl = panel.querySelector(".image-reveal");
//       //     if (!revealEl) return;

//       //     gsap.set(revealEl, { clipPath: "inset(100% 0% 0% 0%)" });

//       //     gsap.to(revealEl, {
//       //       clipPath: "inset(0% 0% 0% 0%)",
//       //       duration: 0.9,
//       //       ease: "power3.out",
//       //       scrollTrigger: {
//       //         trigger: panel,
//       //         containerAnimation: tl, // ✅ key for pinned horizontal sections
//       //         start: "left 75%",
//       //         toggleActions: "play none none reverse",
//       //         // once: true, // enable if you never want it to reverse
//       //       },
//       //     });
//       //   });

//       panels.forEach((panel, index) => {
//         const revealEl = panel.querySelector(".image-reveal");
//         if (!revealEl) return;

//         // Initial state (hidden from bottom)
//         gsap.set(revealEl, { clipPath: "inset(100% 0% 0% 0%)" });

//         gsap.to(revealEl, {
//           clipPath: "inset(0% 0% 0% 0%)",
//           duration: 0.5,
//           ease: "power3.out",
//           delay: index <= 4 ? index * 0.1 : 0, // 👈 0.3s stagger
//           scrollTrigger: {
//             trigger: panel,
//             containerAnimation: tl,
//             start: "left 90%",
//             toggleActions: "play none none reverse",
//           },
//         });
//       });

//       ScrollTrigger.refresh();
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full bg-white overflow-hidden py-12.5"
//     >
//       <div className=" w-full z-20 flex justify-center pointer-events-none">
//         <div className="overflow-hidden">
//           <h2
//             ref={headingRef}
//             className="text-8xl font-black uppercase tracking-tighter max-w-[1400px] text-center text-black"
//           >
//             25,324 Artists Reimagining the Future of Mobility
//           </h2>
//         </div>
//       </div>

//       <div className="h-full flex items-end pb-18 pt-10">
//         <div
//           ref={sliderRef}
//           className="flex flex-nowrap gap-[80px] mx-[200px] items-center will-change-transform"
//         >
//           {slidesData.map((slide, index) => (
//             <div
//               key={index}
//               className="panel relative flex-shrink-0 w-[500px] aspect-[6/5] "
//             >
//               <div className="image-reveal relative w-full h-full overflow-hidden bg-gray-100 border-2 border-black/10 shadow-xl">
//                 <Image
//                   src={slide.image}
//                   alt={`Gallery ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 70vw, 40vw"
//                   priority={index < 2}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Marqueesection;

// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";

// const Marqueesection = () => {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
//   const headingRef = useRef(null);
//   const marqueeTweenRef = useRef(null);

//   const slidesData = [
//     { image: "/painting/p1.png" },
//     { image: "/painting/p2.png" },
//     { image: "/painting/p3.png" },
//     { image: "/painting/p4.png" },
//     { image: "/painting/p5.png" },
//     { image: "/painting/p6.png" },
//     { image: "/painting/p7.png" },
//     { image: "/painting/p8.png" },
//     { image: "/painting/p9.png" },
//   ];

//   useLayoutEffect(() => {
//     if (!containerRef.current || !trackRef.current) return;

//     const ctx = gsap.context(() => {
//       // Heading: simple fade in
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
//       );

//       const track = trackRef.current;

//       const buildMarquee = () => {
//         // kill previous tween if rebuilding
//         marqueeTweenRef.current?.kill();
//         marqueeTweenRef.current = null;

//         // reset position
//         gsap.set(track, { x: 0 });

//         // total width of ONE set of slides (we render 2 sets)
//         const singleWidth = track.scrollWidth / 2;

//         // speed control: pixels per second
//         const pxPerSecond = 180; // adjust (140-240 usually feels good)
//         const duration = singleWidth / pxPerSecond;

//         marqueeTweenRef.current = gsap.to(track, {
//           x: -singleWidth,
//           duration,
//           ease: "none",
//           repeat: -1,
//           modifiers: {
//             x: gsap.utils.unitize((x) => {
//               // keep it wrapping smoothly
//               const num = parseFloat(x);
//               return num % -singleWidth || 0;
//             }),
//           },
//         });
//       };

//       buildMarquee();

//       // Rebuild on resize (keeps loop perfect)
//       const onResize = () => buildMarquee();
//       window.addEventListener("resize", onResize);

//       // Pause on hover (optional but nice)
//       const onEnter = () => marqueeTweenRef.current?.pause();
//       const onLeave = () => marqueeTweenRef.current?.resume();
//       containerRef.current.addEventListener("mouseenter", onEnter);
//       containerRef.current.addEventListener("mouseleave", onLeave);

//       return () => {
//         window.removeEventListener("resize", onResize);
//         containerRef.current?.removeEventListener("mouseenter", onEnter);
//         containerRef.current?.removeEventListener("mouseleave", onLeave);
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Duplicate slides for seamless loop
//   const loopSlides = [...slidesData, ...slidesData];

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full bg-white overflow-hidden py-25 flex flex-col justify-between items-center gap-25"
//     >
//       <div className="w-full z-20 flex justify-center pointer-events-none">
//         <div className="overflow-hidden">
//           <h2
//             ref={headingRef}
//             className="text-8xl font-black uppercase tracking-tighter max-w-[1400px] text-center text-black opacity-0"
//           >
//             25,324 Artists Reimagining the Future of Mobility
//           </h2>
//         </div>
//       </div>

//       <div className="flex items-end pt-10">
//         {/* Outer viewport */}
//         <div className="w-full overflow-hidden">
//           {/* Moving track */}
//           <div
//             ref={trackRef}
//             className="flex flex-nowrap gap-[80px] mx-[200px] items-center will-change-transform"
//           >
//             {loopSlides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="panel relative flex-shrink-0 w-[500px] aspect-[6/5]"
//               >
//                 {/* No reveal effect */}
//                 <div className="relative w-full h-full overflow-hidden bg-gray-100 border-2 border-black/10 shadow-xl">
//                   <Image
//                     src={slide.image}
//                     alt={`Gallery ${index + 1}`}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 70vw, 40vw"
//                     priority={index < 2}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Marqueesection;

// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const Marqueesection = () => {
//   const containerRef = useRef(null);
//   const trackRef = useRef(null);
//   const headingRef = useRef(null);
//   const marqueeTweenRef = useRef(null);

//   const slidesData = [
//     { image: "/painting/p1.png" },
//     { image: "/painting/p2.png" },
//     { image: "/painting/p3.png" },
//     { image: "/painting/p4.png" },
//     { image: "/painting/p5.png" },
//     { image: "/painting/p6.png" },
//     { image: "/painting/p7.png" },
//     { image: "/painting/p8.png" },
//     { image: "/painting/p9.png" },
//   ];

//   useLayoutEffect(() => {
//     if (!containerRef.current || !trackRef.current) return;

//     const ctx = gsap.context(() => {
//       // Heading: simple fade in (no clipPath)
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 10 },
//         { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
//       );

//       const track = trackRef.current;

//       const buildMarquee = () => {
//         marqueeTweenRef.current?.kill();
//         marqueeTweenRef.current = null;

//         // Keep current x if you want — but safest is reset then rebuild
//         gsap.set(track, { x: 0 });

//         // width of ONE set (we render 2 sets)
//         const singleWidth = track.scrollWidth / 2;

//         // speed control (px/sec)
//         const pxPerSecond = 180;
//         const duration = singleWidth / pxPerSecond;

//         const tween = gsap.to(track, {
//           x: -singleWidth,
//           duration,
//           ease: "none",
//           repeat: -1,
//           // ✅ never paused
//           modifiers: {
//             x: gsap.utils.unitize((x) => {
//               const num = parseFloat(x);
//               return num % -singleWidth || 0;
//             }),
//           },
//         });

//         marqueeTweenRef.current = tween;
//       };

//       buildMarquee();

//       // ✅ Scroll direction only changes direction, never stops movement
//       const st = ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         onUpdate: (self) => {
//           const tween = marqueeTweenRef.current;
//           if (!tween) return;

//           // down => forward, up => reverse
//           tween.timeScale(self.direction === 1 ? 1 : -1);
//         },
//       });

//       // Rebuild on resize (keeps seamless loop)
//       const onResize = () => {
//         // preserve direction at moment of resize
//         const dir = st?.direction === 1 ? 1 : -1;
//         buildMarquee();
//         marqueeTweenRef.current?.timeScale(dir);
//         ScrollTrigger.refresh();
//       };

//       window.addEventListener("resize", onResize);

//       return () => {
//         window.removeEventListener("resize", onResize);
//         st.kill();
//       };
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // duplicate for seamless loop
//   const loopSlides = [...slidesData, ...slidesData];

//   return (
//     <section
//       ref={containerRef}
//       className="relative w-full  overflow-hidden pb-70 -mt-15 flex flex-col justify-center items-center gap-25"
//     >
//       {/* <div className="w-full z-20 flex justify-center pointer-events-none">
//         <div className="overflow-hidden">
//           <h2
//             ref={headingRef}
//             className="text-8xl font-black uppercase tracking-tighter max-w-[1400px] text-center text-black opacity-0"
//           >
//             25,324 Artists Reimagining the Future of Mobility
//           </h2>
//         </div>
//       </div> */}

//       <div className="flex items-end w-full">
//         <div className="w-full overflow-hidden">
//           <div
//             ref={trackRef}
//             className="flex flex-nowrap items-center will-change-transform"
//           >
//             {loopSlides.map((slide, index) => (
//               <div
//                 key={index}
//                 className="panel relative flex-shrink-0 w-[500px] aspect-[6/5] "
//                 data-link-button
//                 data-link-text="Full Screen"
//               >
//                 <div className="relative w-full h-full overflow-hidden bg-gray-100 ">
//                   <Image
//                     src={slide.image}
//                     alt={`Gallery ${index + 1}`}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 70vw, 40vw"
//                     priority={index < 2}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Marqueesection;

"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Marqueesection = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const headingRef = useRef(null);
  const marqueeTweenRef = useRef(null);

  // store last scroll direction so we can resume correctly
  const lastDirRef = useRef(1);

  const slidesData = [
    { image: "/painting/p1.png" },
    { image: "/painting/p2.png" },
    { image: "/painting/p3.png" },
    { image: "/painting/p4.png" },
    { image: "/painting/p5.png" },
    { image: "/painting/p6.png" },
    { image: "/painting/p7.png" },
    { image: "/painting/p8.png" },
    { image: "/painting/p9.png" },
  ];

  const pauseMarquee = () => {
    marqueeTweenRef.current?.pause();
  };

  const resumeMarquee = () => {
    const tween = marqueeTweenRef.current;
    if (!tween) return;
    tween.resume();
    tween.timeScale(lastDirRef.current); // resume with correct direction
  };

  useLayoutEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Heading: simple fade in (no clipPath)
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        );
      }

      const track = trackRef.current;

      const buildMarquee = () => {
        marqueeTweenRef.current?.kill();
        marqueeTweenRef.current = null;

        gsap.set(track, { x: 0 });

        // width of ONE set (we render 2 sets)
        const singleWidth = track.scrollWidth / 2;

        // speed control (px/sec)
        const pxPerSecond = 180;
        const duration = singleWidth / pxPerSecond;

        const tween = gsap.to(track, {
          x: -singleWidth,
          duration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const num = parseFloat(x);
              return num % -singleWidth || 0;
            }),
          },
        });

        marqueeTweenRef.current = tween;
        tween.timeScale(lastDirRef.current);
      };

      buildMarquee();

      // Scroll direction only changes direction, never stops movement
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const tween = marqueeTweenRef.current;
          if (!tween) return;

          const dir = self.direction === 1 ? 1 : -1;
          lastDirRef.current = dir;

          // only apply direction if not paused (hover)
          if (!tween.paused()) tween.timeScale(dir);
        },
      });

      // Rebuild on resize (keeps seamless loop)
      const onResize = () => {
        buildMarquee();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        st.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // duplicate for seamless loop
  const loopSlides = [...slidesData, ...slidesData];

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden pb-70 -mt-15 flex flex-col justify-center items-center gap-25"
    >
      <div className="flex items-end w-full">
        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-nowrap items-center will-change-transform"
          >
            {loopSlides.map((slide, index) => (
              <div
                key={index}
                className="panel relative flex-shrink-0 w-[500px] aspect-[6/5]"
                data-link-button
                data-link-text="Full Screen"
                onMouseEnter={pauseMarquee}
                onMouseLeave={resumeMarquee}
                onFocus={pauseMarquee}
                onBlur={resumeMarquee}
              >
                <div className="relative w-full h-full overflow-hidden bg-gray-100">
                  <Image
                    src={slide.image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 70vw, 40vw"
                    priority={index < 2}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marqueesection;
