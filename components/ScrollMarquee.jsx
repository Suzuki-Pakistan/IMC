// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollMarquee = () => {
//   const componentRef = useRef(null);
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
//     let ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");

//       // 1. Heading Animation (Triggers immediately when section hits center/top)
//       gsap.fromTo(
//         headingRef.current,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: componentRef.current,
//             start: "top 80%",
//           },
//         },
//       );

//       // 2. Main Horizontal Scroll Timeline
//       const totalWidth = sliderRef.current.scrollWidth - window.innerWidth;

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: componentRef.current,
//           pin: true, // Pins the section in place
//           scrub: 1, // Smoothly links animation to scroll distance
//           start: "top top", // Starts when the top of section hits top of viewport
//           end: () => `+=${sliderRef.current.offsetWidth}`, // Length of scroll based on content width
//           invalidateOnRefresh: true,
//         },
//       });

//       // Move the slider container to the left
//       tl.to(
//         sliderRef.current,
//         {
//           x: -totalWidth,
//           ease: "none",
//         },
//         0,
//       );

//       // 3. Clip-Path Reveal for each image as it enters the viewport
//       panels.forEach((panel) => {
//         const img = panel.querySelector(".image-reveal");
//         tl.fromTo(
//           img,
//           { clipPath: "inset(0% 100% 0% 0%)" }, // Hidden to the right
//           {
//             clipPath: "inset(0% 0% 0% 0%)", // Fully revealed
//             ease: "none",
//           },
//           ">-=0.5", // Start reveal slightly before the previous move finishes
//         );
//       });
//     }, componentRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={componentRef} className="relative overflow-hidden bg-white">
//       {/* Initial Heading Section */}
//       <div className="h-screen flex flex-col items-center justify-center">
//         <h2
//           ref={headingRef}
//           className="text-6xl md:text-8xl font-bold uppercase tracking-tighter"
//         >
//           The Collection
//         </h2>
//         <p className="mt-4 text-gray-500 uppercase tracking-widest">
//           Scroll to explore
//         </p>
//       </div>

//       {/* Horizontal Slider Wrapper */}
//       <div className="relative h-screen flex items-center">
//         <div
//           ref={sliderRef}
//           className="flex flex-nowrap gap-10 px-[10vw] will-change-transform"
//         >
//           {slidesData.map((slide, index) => (
//             <div
//               key={index}
//               className="panel relative flex-shrink-0 w-[60vw] md:w-[40vw] aspect-[4/5]"
//             >
//               <div className="image-reveal relative w-full h-full overflow-hidden bg-gray-100">
//                 <Image
//                   src={slide.image}
//                   alt={`Painting ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 60vw, 40vw"
//                 />
//               </div>
//               <span className="absolute -bottom-10 left-0 font-mono text-sm text-gray-400">
//                 0{index + 1} / {slidesData.length}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollMarquee;

// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollMarquee = () => {
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
//     let ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");
//       const totalWidth = sliderRef.current.scrollWidth - window.innerWidth;

//       // 1. Heading Reveal Effect
//       // Triggered when the section is 20% away from the top of the viewport
//       gsap.fromTo(
//         headingRef.current,
//         { clipPath: "inset(100% 0% 0% 0%)", y: 50, opacity: 0 },
//         {
//           clipPath: "inset(0% 0% 0% 0%)",
//           y: 0,
//           opacity: 1,
//           duration: 1.2,
//           ease: "power4.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top center", // Starts when top of section is 20% from top of screen
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       // 2. Horizontal Scroll Timeline (The Pinning Logic)
//       // This kicks in when the section actually touches the top
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           pin: true,
//           scrub: 1,
//           start: "top top", // Pins exactly at the top
//           end: () => `+=${sliderRef.current.offsetWidth}`,
//           invalidateOnRefresh: true,
//         },
//       });

//       // Move the container horizontally
//       tl.to(sliderRef.current, {
//         x: -totalWidth,
//         ease: "none",
//       });

//       // 3. Image Reveal (Clip-path) as they scroll into view
//       panels.forEach((panel) => {
//         const img = panel.querySelector(".image-reveal");
//         tl.fromTo(
//           img,
//           { clipPath: "inset(0% 100% 0% 0%)" },
//           { clipPath: "inset(0% 0% 0% 0%)", ease: "none", duration: 0.5 },
//           "<", // Starts revealing as the horizontal movement happens
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full bg-white overflow-hidden"
//     >
//       {/* 100px Gap / Heading Area */}
//       <div className="absolute top-10 left-0 w-full z-20 flex justify-center">
//         <div className="overflow-hidden">
//           <h2
//             ref={headingRef}
//             className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-black"
//           >
//             Fine Art Gallery
//           </h2>
//         </div>
//       </div>

//       {/* Spacer to simulate the 100px gap before images are centered */}
//       <div className="h-[100px]" />

//       {/* Horizontal Slider Wrapper */}
//       <div className="h-full flex items-center">
//         <div
//           ref={sliderRef}
//           className="flex flex-nowrap gap-12 px-[15vw] items-center will-change-transform"
//         >
//           {slidesData.map((slide, index) => (
//             <div
//               key={index}
//               className="panel relative flex-shrink-0 w-[80vw] md:w-[45vw] aspect-[3/4]"
//             >
//               <div className="image-reveal relative w-full h-full overflow-hidden bg-gray-200">
//                 <Image
//                   src={slide.image}
//                   alt={`Slide ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 80vw, 45vw"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between items-center px-2">
//                 <span className="text-sm font-mono text-gray-400">
//                   P-0{index + 1}
//                 </span>
//                 <div className="h-[1px] flex-grow mx-4 bg-gray-200" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollMarquee;

// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollMarquee = () => {
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
//     let ctx = gsap.context(() => {
//       const panels = gsap.utils.toArray(".panel");
//       // Calculate how far the container needs to move left
//       const totalWidth = sliderRef.current.scrollWidth - window.innerWidth;

//       // 1. Heading Reveal (Triggers when section is 20% from top)
//       gsap.fromTo(
//         headingRef.current,
//         { clipPath: "inset(100% 0% 0% 0%)", y: 30, opacity: 0 },
//         {
//           clipPath: "inset(0% 0% 0% 0%)",
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: "top 60%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       );

//       // 2. Main Pinning & Horizontal Scroll
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           pin: true,
//           scrub: 1,
//           start: "top top",
//           // The end value determines the "length" of the scroll experience
//           end: () => `+=${sliderRef.current.offsetWidth * 1}`,
//           invalidateOnRefresh: true,
//         },
//       });

//       panels.forEach((panel) => {
//         const img = panel.querySelector(".image-reveal");
//         gsap.fromTo(
//           img,
//           { clipPath: "inset(0% 100% 0% 0%)" },
//           {
//             clipPath: "inset(0% 0% 0% 0%)",
//             duration: 1.2,
//             ease: "power1.inout",
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: "top 20%",
//               toggleActions: "play none none reverse",
//             },
//           },
//         );
//       });

//       // Move the whole slider horizontally
//       tl.to(sliderRef.current, {
//         x: -totalWidth,
//         ease: "none",
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-screen w-full bg-white overflow-hidden"
//     >
//       {/* Absolute Heading - Stays fixed while images slide under */}
//       <div className="absolute top-[50px] left-0 w-full z-20 flex justify-center pointer-events-none">
//         <div className="overflow-hidden">
//           <h2
//             ref={headingRef}
//             className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black"
//           >
//             Paintings
//           </h2>
//         </div>
//       </div>

//       {/* Horizontal Slider Wrapper */}
//       <div className="h-full flex items-end pb-25">
//         <div
//           ref={sliderRef}
//           className="flex flex-nowrap gap-[50px] px-[150px] items-end will-change-transform"
//         >
//           {slidesData.map((slide, index) => (
//             <div
//               key={index}
//               className="panel relative flex-shrink-0 w-[450] aspect-[1/1]"
//             >
//               {/* This inner div handles the reveal effect */}
//               <div className="image-reveal relative w-full h-full overflow-hidden bg-gray-100 shadow-xl">
//                 <Image
//                   src={slide.image}
//                   alt={`Gallery ${index + 1}`}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 70vw, 40vw"
//                   priority={index < 2} // Priority for first two images
//                 />
//               </div>

//               {/* Caption/Numbering */}
//               {/* <div className="absolute -bottom-10 left-0 w-full flex items-center justify-between text-black">
//                 <span className="font-mono text-sm font-bold">
//                   VOL. 0{index + 1}
//                 </span>
//                 <span className="text-[10px] uppercase tracking-widest opacity-50">
//                   Studio Archive
//                 </span>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScrollMarquee;
"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ScrollMarquee = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const headingRef = useRef(null);

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

  useLayoutEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      const getTotalWidth = () =>
        sliderRef.current.scrollWidth - window.innerWidth + 400;

      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", y: 30, opacity: 0 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Pinned horizontal scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${sliderRef.current.offsetWidth}`,
          invalidateOnRefresh: true,
        },
      });

      tl.to(sliderRef.current, {
        x: () => -getTotalWidth(),
        ease: "none",
      });

      // Per-panel reveal: bottom -> top, only when panel comes into viewport
      //   panels.forEach((panel) => {
      //     const revealEl = panel.querySelector(".image-reveal");
      //     if (!revealEl) return;

      //     gsap.set(revealEl, { clipPath: "inset(100% 0% 0% 0%)" });

      //     gsap.to(revealEl, {
      //       clipPath: "inset(0% 0% 0% 0%)",
      //       duration: 0.9,
      //       ease: "power3.out",
      //       scrollTrigger: {
      //         trigger: panel,
      //         containerAnimation: tl, // ✅ key for pinned horizontal sections
      //         start: "left 75%",
      //         toggleActions: "play none none reverse",
      //         // once: true, // enable if you never want it to reverse
      //       },
      //     });
      //   });

      panels.forEach((panel, index) => {
        const revealEl = panel.querySelector(".image-reveal");
        if (!revealEl) return;

        // Initial state (hidden from bottom)
        gsap.set(revealEl, { clipPath: "inset(100% 0% 0% 0%)" });

        gsap.to(revealEl, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.5,
          ease: "power3.out",
          delay: index <= 4 ? index * 0.1 : 0, // 👈 0.3s stagger
          scrollTrigger: {
            trigger: panel,
            containerAnimation: tl,
            start: "left 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-white overflow-hidden"
    >
      <div className="absolute top-[50px] left-0 w-full z-20 flex justify-center pointer-events-none">
        <div className="overflow-hidden">
          <h2
            ref={headingRef}
            className="text-8xl font-black uppercase tracking-tighter max-w-[1400px] text-center text-black"
          >
            25,324 Artists Reimagining the Future of Mobility
          </h2>
        </div>
      </div>

      <div className="h-full flex items-end pb-18 pt-10">
        <div
          ref={sliderRef}
          className="flex flex-nowrap gap-[80px] mx-[200px] items-center will-change-transform"
        >
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="panel relative flex-shrink-0 w-[500px] aspect-[6/5] "
            >
              <div className="image-reveal relative w-full h-full overflow-hidden bg-gray-100 border-2 border-black/10 shadow-xl">
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
    </section>
  );
};

export default ScrollMarquee;
