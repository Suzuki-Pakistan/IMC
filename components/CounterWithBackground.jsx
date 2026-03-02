// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export default function ExpandingSection() {
//   const scopeRef = useRef(null); // Ref for the entire section scope
//   const bgRef = useRef(null);
//   const oneRef = useRef(null);
//   const twoRef = useRef(null);
//   const threeRef = useRef(null);
//   const fourRef = useRef(null);
//   const contentRef = useRef(null);

//   useLayoutEffect(() => {
//     // gsap.context is critical for preventing conflicts with other sections
//     let ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: scopeRef.current,
//           start: "top top",
//           end: "+=200%", // The amount of scroll distance for the whole effect
//           pin: true,
//           scrub: 1.5, // Smoothness of the transition
//           anticipatePin: 1, // Reduces 'jumping' when pinning
//           invalidateOnRefresh: true, // Forces recalculation if other components load
//           pinSpacing: true, // Ensures space is reserved for the pinned section
//           ease: "power3.inOut", // No easing for the scroll-triggered animation
//         },
//       });

//       tl.to([oneRef.current], {
//         opacity: 0,
//         duration: 1,
//         ease: "none",
//       });

//       tl.to([twoRef.current], {
//         opacity: 0,
//         duration: 1,
//         ease: "none",
//       });

//       tl.to([threeRef.current], {
//         opacity: 0,
//         duration: 1,
//         ease: "none",
//       });

//       tl.to([fourRef.current], {
//         opacity: 0,
//         duration: 1,
//         ease: "none",
//       });

//       // 1. Expand Background (from 30vw/3vh to Full)
//       tl.to(
//         bgRef.current,
//         {
//           width: "100vw",
//           height: "100vh",
//           duration: 2,
//           ease: "none",
//         },
//         "-=0.5",
//       );

//       // 2. Reveal 5 Child Elements one by one
//       const items = contentRef.current.children;
//       tl.fromTo(
//         items,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           stagger: 0.8, // Timing between each child appearing
//           duration: 1,
//           ease: "power2.out",
//         },
//         "-=0.5", // Starts slightly before the background expansion fully finishes
//       );
//     }, scopeRef);

//     // Refresh ScrollTrigger to account for other components' heights
//     ScrollTrigger.refresh();

//     return () => ctx.revert(); // Clean up everything to prevent memory leaks/conflicts
//   }, []);

//   const stats = [
//     { val: "27%", label: "EDUCATION" },
//     { val: "4%", label: "ROAD SAFETY" },
//     { val: "42%", label: "HEALTH CARE" },
//     { val: "11%", label: "SPORTS" },
//     { val: "4%", label: "ENVIRONMENT" },
//     { val: "12%", label: "SUSTENANCE", red: true },
//   ];

//   return (
//     <section
//       ref={scopeRef}
//       className="relative h-screen w-full flex items-center justify-center bg-black  overflow-hidden z-10" // Added z-index to prevent overlap
//     >
//       <Image
//         ref={oneRef}
//         src="/Numbers.jpg"
//         alt="Forest Background"
//         className="absolute top-[100px] right-[50px]  w-[200px] h-[250px]  object-cover"
//         width={200}
//         height={300}
//       />

//       <Image
//         ref={twoRef}
//         src="/Numbers.jpg"
//         alt="Forest Background"
//         className="absolute right-[150px] bottom-[50px]   w-[350px] object-cover"
//         width={160}
//         height={300}
//       />

//       <Image
//         ref={threeRef}
//         src="/Numbers.jpg"
//         alt="Forest Background"
//         className="absolute left-[150px] bottom-[120px]  w-[200px] h-[250px] object-cover"
//         width={250}
//         height={300}
//       />

//       <Image
//         ref={fourRef}
//         src="/Numbers.jpg"
//         alt="Forest Background"
//         className="absolute top-[100] left-[100px]  w-[300] h-[200] object-cover"
//         width={220}
//         height={300}
//       />

//       {/* Expanding Background Container */}
//       <div
//         ref={bgRef}
//         className="relative w-[30vw] h-[30vh] overflow-hidden flex items-center justify-center z-0" // Background needs to be behind content
//       >
//         {/* main */}
//         <Image
//           src="/Numbers.jpg"
//           alt="Forest Background"
//           className="absolute inset-0 w-full h-full object-cover"
//           fill
//         />
//         {/* main */}

//         {/* 5 Childs Container */}
//         <div
//           ref={contentRef}
//           className="relative z-10 grid grid-cols-6  w-full  text-white"
//         >
//           {stats.map((item, i) => (
//             <div
//               key={i}
//               className=" border-r h-screen border-white/30 last:border-none px-8 py-20 group flex flex-col items-center justify-end bg-black/50"
//             >
//               <h2 className="text-7xl font-light">{item.val}</h2>
//               <p
//                 className={`text-xl mt-2 tracking-widest

//                     text-[#EB0A1E] font-semibold transition-all duration-300

//                     `}
//               >
//                 {item.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExpandingSection() {
  const scopeRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  // WRAPPERS (clip these)
  const oneWrap = useRef(null);
  const twoWrap = useRef(null);
  const threeWrap = useRef(null);
  const fourWrap = useRef(null);

  // center image wrapper (clip this)
  const centerRevealRef = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const clip = {
  //       full: "inset(0% 0% 0% 0%)",
  //       fromRight: "inset(0% 0% 0% 100%)",
  //       fromLeft: "inset(0% 100% 0% 0%)",
  //       fromTop: "inset(100% 0% 0% 0%)",
  //       fromBottom: "inset(0% 0% 100% 0%)",
  //       fromCenter: "inset(50% 50% 50% 50%)",
  //     };

  //     // initial states
  //     gsap.set(oneWrap.current, {
  //       clipPath: clip.fromRight,
  //       willChange: "clip-path",
  //     });
  //     gsap.set(twoWrap.current, {
  //       clipPath: clip.fromBottom,
  //       willChange: "clip-path",
  //     });
  //     gsap.set(threeWrap.current, {
  //       clipPath: clip.fromLeft,
  //       willChange: "clip-path",
  //     });
  //     gsap.set(fourWrap.current, {
  //       clipPath: clip.fromTop,
  //       willChange: "clip-path",
  //     });
  //     gsap.set(centerRevealRef.current, {
  //       clipPath: clip.fromCenter,
  //       willChange: "clip-path",
  //     });

  //     // reveal timeline (NOT scroll-scrubbed)
  //     const revealTl = gsap.timeline({
  //       paused: true,
  //       defaults: { duration: 1.5, ease: "power3.out" },
  //     });

  //     revealTl
  //       .to(centerRevealRef.current, { clipPath: clip.full, duration: 1.0 }, 0)
  //       .to(oneWrap.current, { clipPath: clip.full }, 0.2)
  //       .to(fourWrap.current, { clipPath: clip.full }, 0.3)
  //       .to(threeWrap.current, { clipPath: clip.full }, 0.4)
  //       .to(twoWrap.current, { clipPath: clip.full }, 0.6);

  //     // ✅ reversible trigger
  //     ScrollTrigger.create({
  //       trigger: scopeRef.current,
  //       start: "top 75%",
  //       onEnter: () => revealTl.play(),
  //       onLeaveBack: () => revealTl.reverse(),
  //     });

  //     // -----------------------------
  //     // YOUR ORIGINAL scroll timeline (kept)
  //     // -----------------------------
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: scopeRef.current,
  //         start: "top top",
  //         end: "+=200%",
  //         pin: true,
  //         scrub: 1.5,
  //         anticipatePin: 1,
  //         invalidateOnRefresh: true,
  //         pinSpacing: true,
  //       },
  //     });

  //     // fade wrappers (instead of next/image refs)
  //     tl.to(oneWrap.current, { opacity: 0, duration: 1, ease: "none" }, 1);
  //     tl.to(twoWrap.current, { opacity: 0, duration: 1, ease: "none" });
  //     tl.to(threeWrap.current, { opacity: 0, duration: 1, ease: "none" });
  //     tl.to(fourWrap.current, { opacity: 0, duration: 1, ease: "none" });

  //     tl.to(
  //       bgRef.current,
  //       { width: "100vw", height: "100vh", duration: 2, ease: "none" },
  //       "-=0.5",
  //     );

  //     const items = contentRef.current.children;
  //     tl.fromTo(
  //       items,
  //       { opacity: 0, y: 50 },
  //       { opacity: 1, y: 0, stagger: 0.8, duration: 1, ease: "power2.out" },
  //       "-=0.5",
  //     );
  //   }, scopeRef);

  //   ScrollTrigger.refresh();
  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const clip = {
        full: "inset(0% 0% 0% 0%)",
        fromRight: "inset(0% 0% 0% 100%)",
        fromLeft: "inset(0% 100% 0% 0%)",
        fromTop: "inset(100% 0% 0% 0%)",
        fromBottom: "inset(0% 0% 100% 0%)",
        fromCenter: "inset(50% 50% 50% 50%)",
      };

      // Initial states
      gsap.set(oneWrap.current, {
        clipPath: clip.fromRight,
        willChange: "clip-path",
      });
      gsap.set(twoWrap.current, {
        clipPath: clip.fromBottom,
        willChange: "clip-path",
      });
      gsap.set(threeWrap.current, {
        clipPath: clip.fromLeft,
        willChange: "clip-path",
      });
      gsap.set(fourWrap.current, {
        clipPath: clip.fromTop,
        willChange: "clip-path",
      });
      gsap.set(centerRevealRef.current, {
        clipPath: clip.fromCenter,
        willChange: "clip-path",
      });

      // ✅ Reveal each image when IT enters viewport
      const revealItems = [
        {
          el: centerRevealRef.current,
          from: clip.fromCenter,
          delay: 0.0,
          dur: 1.0,
        },
        { el: oneWrap.current, from: clip.fromRight, delay: 0.0, dur: 1.1 },
        { el: fourWrap.current, from: clip.fromTop, delay: 0.3, dur: 1.1 },
        { el: threeWrap.current, from: clip.fromLeft, delay: 0.6, dur: 1.1 },
        { el: twoWrap.current, from: clip.fromBottom, delay: 0.9, dur: 1.1 },
      ];

      revealItems.forEach(({ el, from, delay, dur }) => {
        ScrollTrigger.create({
          trigger: el, // 👈 this is the key
          start: "top 90%", // when element comes into view
          end: "bottom 10%",
          onEnter: () =>
            gsap.to(el, {
              clipPath: clip.full,
              duration: dur,
              delay,
              ease: "power3.out",
              overwrite: "auto",
            }),
          onEnterBack: () =>
            gsap.to(el, {
              clipPath: clip.full,
              duration: dur * 0.8,
              ease: "power3.out",
              overwrite: "auto",
            }),
          onLeaveBack: () =>
            gsap.to(el, {
              clipPath: from,
              duration: 0.7,
              ease: "power2.inOut",
              overwrite: "auto",
            }),
        });
      });

      // -----------------------------
      // YOUR ORIGINAL scroll timeline (kept)
      // -----------------------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });

      tl.to(oneWrap.current, { opacity: 0, duration: 1, ease: "none" }, 1);
      tl.to(twoWrap.current, { opacity: 0, duration: 1, ease: "none" });
      tl.to(threeWrap.current, { opacity: 0, duration: 1, ease: "none" });
      tl.to(fourWrap.current, { opacity: 0, duration: 1, ease: "none" });

      tl.to(
        bgRef.current,
        { width: "100vw", height: "100vh", duration: 2, ease: "none" },
        "+=1",
      );

      const items = contentRef.current.children;
      tl.fromTo(
        items,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.8, duration: 1, ease: "power2.out" },
        "-=0.5",
      );
    }, scopeRef);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, []);

  const stats = [
    { val: "27%", label: "EDUCATION" },
    { val: "4%", label: "Environment" },
    { val: "42%", label: "HEALTHCARE" },
    { val: "4%", label: "Road Safety" },
    { val: "11%", label: "SPORTS" },
    { val: "12%", label: "SUSTENANCE" },
  ];

  return (
    <section
      ref={scopeRef}
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden z-10"
    >
      {/* FLOATING IMAGE 1 (RIGHT reveal) */}
      <div
        data-link-button
        data-link-text="View More"
        ref={oneWrap}
        className="absolute top-[100px] right-[50px] w-[200px] h-[250px] overflow-hidden"
      >
        <Image src="/t3.jpg" alt="" fill className="object-cover" />
      </div>

      {/* FLOATING IMAGE 2 (BOTTOM reveal) */}
      <div
        data-link-button
        data-link-text="View More"
        ref={twoWrap}
        className="absolute right-[150px] bottom-[50px] w-[350px] h-[300px] overflow-hidden"
      >
        <Image src="/food.jpg" alt="" fill className="object-cover" />
      </div>

      {/* FLOATING IMAGE 3 (LEFT reveal) */}
      <div
        data-link-button
        data-link-text="View More"
        ref={threeWrap}
        className="absolute left-[150px] bottom-[120px] w-[200px] h-[250px] overflow-hidden"
      >
        <Image src="/edu.jpg" alt="" fill className="object-cover" />
      </div>

      {/* FLOATING IMAGE 4 (TOP reveal) */}
      <div
        data-link-button
        data-link-text="View More"
        ref={fourWrap}
        className="absolute top-[100px] left-[100px] w-[300px] h-[200px] overflow-hidden"
      >
        <Image src="/val.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Expanding Background Container */}
      <div
        ref={bgRef}
        className="relative w-[30vw] h-[30vh] overflow-hidden flex items-center justify-center z-0"
      >
        {/* CENTER image (reveal from center) */}
        <div ref={centerRevealRef} className="absolute inset-0 overflow-hidden">
          <Image
            src="/Numbers.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Stats grid */}
        <div
          ref={contentRef}
          className="relative z-10 grid grid-cols-6 w-full text-white"
        >
          {stats.map((item, i) => (
            <div
              data-link-button
              data-link-text="View More"
              key={i}
              className="border-r h-screen border-white/30 last:border-none px-8 py-20 flex flex-col items-center justify-end bg-black/50"
            >
              <h2 className="text-7xl font-light">{item.val}</h2>
              <p className="text-xl mt-2 tracking-widest uppercase text-[#EB0A1E] font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
