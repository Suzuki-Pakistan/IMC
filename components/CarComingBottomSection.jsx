// "use client";

// import React, { useEffect, useMemo, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function CarComingBottomSection() {
//   const sectionRef = useRef(null);
//   const pinRef = useRef(null);
//   const carRef = useRef(null);
//   const roadRef = useRef(null);
//   const itemsWrapRef = useRef(null);

//   // ✅ Dynamic array (add as many as you want)
//   const items = useMemo(
//     () => [
//       { title: "Step 1", desc: "This content comes from the LEFT." },
//       { title: "Step 2", desc: "This content comes from the RIGHT." },
//       { title: "Step 3", desc: "LEFT again, dynamic." },
//       { title: "Step 4", desc: "RIGHT again, dynamic." },
//       { title: "Step 5", desc: "Keeps going as per array length." },
//     ],
//     [],
//   );

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (
//       !sectionRef.current ||
//       !pinRef.current ||
//       !carRef.current ||
//       !itemsWrapRef.current
//     )
//       return;

//     const cards = gsap.utils.toArray(
//       itemsWrapRef.current.querySelectorAll(".story-card"),
//     );

//     const ctx = gsap.context(() => {
//       // initial states
//       gsap.set(carRef.current, { yPercent: -22 }); // 60 start lower
//       gsap.set(roadRef.current, { opacity: 0 }); // 60 start lower
//       cards.forEach((card, i) => {
//         const fromX = i % 2 === 0 ? -120 : 120; // left/right alternating
//         gsap.set(card, { autoAlpha: 0, x: fromX, y: 10, scale: 0.98 });
//       });

//       // one master timeline bound to scroll
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `+=${window.innerHeight * items.length + 1}`,
//           pin: pinRef.current,
//           scrub: 1,
//           anticipatePin: 1,
//         },
//       });

//       tl.to(roadRef.current, {
//         opacity: 1,
//         duration: 0.5,
//       });

//       // car moves bottom -> top across the whole scroll
//       // tl.to(
//       //   carRef.current,
//       //   {
//       //     yPercent: -20, // end higher
//       //     ease: "none",
//       //   },
//       //   0,
//       // );

//       // content reveals step-by-step
//       cards.forEach((card, i) => {
//         // each card gets its own "slot" in the timeline
//         const slot = i + 0.2;

//         // bring in
//         tl.to(
//           card,
//           {
//             autoAlpha: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//             duration: 0.35,
//             ease: "power2.out",
//           },
//           slot,
//         );

//         // optional: dim previous card when next comes in (nice storytelling)
//         if (i > 0) {
//           tl.to(
//             cards[i - 1],
//             {
//               autoAlpha: 0.35,
//               scale: 0.98,
//               duration: 0.25,
//               ease: "power1.out",
//             },
//             slot,
//           );
//         }

//         // optional: when leaving the step, restore previous (keeps it clean)
//         // (If you want only ONE card visible at a time, tell me — I’ll swap logic.)
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [items.length, items]);

//   return (
//     <section ref={sectionRef} className="relative w-full ">
//       <div
//         ref={pinRef}
//         className="relative mx-auto flex min-h-screen max-w-400 items-center justify-center px-4"
//       >
//         {/* Stage */}
//         <div className="relative h-screen w-full overflow-hidden rounded-3xl ">
//           {/* Car (moves bottom -> top) */}
//           <div
//             className="road  absolute h-full w-full overflow-hidden left-1/2 top-0 -translate-x-1/2 flex flex-col justify-center items-center"
//             ref={roadRef}
//           >
//             <Image
//               src={"/Road.jpeg"}
//               alt=""
//               width={1600}
//               height={90000}
//               className=" w-[400px] h-full object-cover mx-auto"
//             />
//             <Image
//               src={"/Road.jpeg"}
//               alt=""
//               width={1600}
//               height={90000}
//               className=" w-[400px] h-full object-cover mx-auto"
//             />
//           </div>
//           <div
//             ref={carRef}
//             className="absolute ml-3 left-1/2 -bottom-10 -translate-x-1/2 z-20"
//             style={{ width: 1000, height: 700 }}
//           >
//             {/* Replace with your car image */}
//             <Image
//               src="/top-shot.png"
//               alt="Car"
//               fill
//               className="object-contain w-full h-full"
//               priority
//             />
//           </div>

//           {/* Content stack */}
//           <div
//             ref={itemsWrapRef}
//             className="absolute inset-0 flex flex-col justify-center gap-5 px-6 md:px-10"
//           >
//             {items.map((item, i) => {
//               const isLeft = i % 2 === 0;

//               return (
//                 <div
//                   key={i}
//                   className={[
//                     "story-card max-w-130 rounded-sm bg-[#EB0A1E] p-5 shadow-sm",
//                     isLeft ? "mr-auto" : "ml-auto",
//                   ].join(" ")}
//                 >
//                   <div className="text-xs text-white/70">{item.title}</div>
//                   <div className="mt-1 text-lg font-semibold text-white">
//                     {item.desc}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Optional subtle center line/road vibe (remove if you want) */}
//           {/* <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-200/70" /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import React, { useEffect, useMemo, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function CarComingBottomSection() {
//   const sectionRef = useRef(null);
//   const pinRef = useRef(null);
//   const carRef = useRef(null);
//   const roadRef = useRef(null);
//   const itemsWrapRef = useRef(null);

//   // ✅ CONTROL THIS (higher = faster)
//   const ROAD_SPEED_PX_PER_SEC = 260;

//   // ✅ Dynamic array (add as many as you want)
//   const items = useMemo(
//     () => [
//       { title: "Step 1", desc: "Aik Pal Ki Laparwahi: The Power of a Moment" },
//       { title: "Step 2", desc: "TRIP: Engineering Safer Infrastructure" },
//       { title: "Step 3", desc: "Digital Innovation in Post-Trauma Care" },
//       { title: "Step 4", desc: "Empowering the Next Generation" },
//       { title: "Step 5", desc: "Strategic Mobility Partnerships" },
//       { title: "Step 6", desc: "A Vision of Zero Traffic Deaths" },
//     ],
//     [],
//   );

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (
//       !sectionRef.current ||
//       !pinRef.current ||
//       !carRef.current ||
//       !itemsWrapRef.current ||
//       !roadRef.current
//     )
//       return;

//     const cards = gsap.utils.toArray(
//       itemsWrapRef.current.querySelectorAll(".story-card"),
//     );

//     const ctx = gsap.context(() => {
//       // initial states
//       gsap.set(carRef.current, { yPercent: -22 });
//       gsap.set(roadRef.current, { opacity: 0 });

//       cards.forEach((card, i) => {
//         const fromX = i % 2 === 0 ? -120 : 120;
//         gsap.set(card, { autoAlpha: 0, x: fromX, y: 10, scale: 0.98 });
//       });

//       // ✅ INFINITE ROAD SCROLL (TOP -> BOTTOM)
//       // We animate backgroundPositionY continuously.
//       // duration is derived from speed.
//       const getRoadHeight = () => roadRef.current?.offsetHeight || 1000;

//       let roadTween = null;

//       const makeRoadTween = () => {
//         const h = getRoadHeight();
//         const duration = h / ROAD_SPEED_PX_PER_SEC; // seconds for 1 full tile pass

//         // kill old if resizing
//         roadTween?.kill();

//         roadTween = gsap.to(roadRef.current, {
//           backgroundPositionY: `+=${h}px`,
//           duration,
//           ease: "none",
//           repeat: -1,
//         });
//       };

//       makeRoadTween();

//       // keep it correct on resize
//       const onResize = () => makeRoadTween();
//       window.addEventListener("resize", onResize);

//       // one master timeline bound to scroll (for the STORY cards + pinning)
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: `+=${window.innerHeight * items.length + 1}`,
//           pin: pinRef.current,
//           scrub: 1,
//           anticipatePin: 1,

//           // ✅ pause the infinite marquee when not in view
//           onEnter: () => roadTween?.play(),
//           onEnterBack: () => roadTween?.play(),
//           onLeave: () => roadTween?.pause(),
//           onLeaveBack: () => roadTween?.pause(),
//         },
//       });

//       tl.to(roadRef.current, { opacity: 1, duration: 0.4 });

//       // content reveals step-by-step
//       cards.forEach((card, i) => {
//         const slot = i + 0.2;

//         tl.to(
//           card,
//           {
//             autoAlpha: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//             duration: 0.35,
//             ease: "power2.out",
//           },
//           slot,
//         );

//         if (i > 0) {
//           tl.to(
//             cards[i - 1],
//             {
//               autoAlpha: 0.8,
//               y: -15,
//               opacity: 1,
//               // scale: 0.98,
//               duration: 0.25,
//               ease: "power1.out",
//             },
//             slot,
//           );
//         }
//       });

//       return () => {
//         window.removeEventListener("resize", onResize);
//         roadTween?.kill();
//       };
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [items.length, items]);

//   return (
//     <section ref={sectionRef} className="relative w-full">
//       <div
//         ref={pinRef}
//         className="relative mx-auto flex min-h-screen max-w-400 items-center justify-center px-4"
//       >
//         <div className="relative h-screen w-full overflow-hidden rounded-3xl">
//           {/* ✅ ROAD as an infinite tiled background */}
//           <div
//             ref={roadRef}
//             className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
//             style={{
//               // use your road image here
//               backgroundImage: "url(/Road.jpeg)",
//               backgroundRepeat: "repeat-y",
//               backgroundPositionX: "center",
//               backgroundPositionY: "0px",
//               backgroundSize: "400px auto", // controls road width
//               willChange: "background-position",
//             }}
//           />

//           {/* Car */}
//           <div
//             ref={carRef}
//             className="absolute ml-3 left-1/2 -bottom-10 -translate-x-1/2 z-20"
//             style={{ width: 1000, height: 700 }}
//           >
//             <Image
//               src="/top-shot.png"
//               alt="Car"
//               fill
//               className="object-contain w-full h-full"
//               priority
//             />
//           </div>

//           {/* Content stack */}
//           <div
//             ref={itemsWrapRef}
//             className="absolute inset-0 flex flex-col justify-center gap-5 px-6 md:px-10"
//           >
//             {items.map((item, i) => {
//               const isLeft = i % 2 === 0;

//               return (
//                 <div
//                   key={i}
//                   data-link-button
//                   data-link-text
//                   className={[
//                     "story-card max-w-130 rounded-sm bg-[#EB0A1E] p-5 shadow-sm",
//                     isLeft ? "mr-auto" : "ml-auto",
//                   ].join(" ")}
//                 >
//                   <div className="text-xs text-white/70">{item.title}</div>
//                   <div className="mt-1 text-lg font-semibold text-white">
//                     {item.desc}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import React, { useEffect, useMemo, useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function CarComingBottomSection() {
//   const sectionRef = useRef(null);
//   const pinRef = useRef(null);
//   const carRef = useRef(null);
//   const roadRef = useRef(null);
//   const itemsWrapRef = useRef(null);

//   // ✅ CONTROL THIS (higher = faster road on scroll)
//   const ROAD_PX_PER_VIEWPORT = 300;

//   // ✅ Dynamic array (add as many as you want)
//   const items = useMemo(
//     () => [
//       { title: "Step 1", desc: "Aik Pal Ki Laparwahi: The Power of a Moment" },
//       { title: "Step 2", desc: "TRIP: Engineering Safer Infrastructure" },
//       { title: "Step 3", desc: "Digital Innovation in Post-Trauma Care" },
//       { title: "Step 4", desc: "Empowering the Next Generation" },
//       { title: "Step 5", desc: "Strategic Mobility Partnerships" },
//       { title: "Step 6", desc: "A Vision of Zero Traffic Deaths" },
//     ],
//     [],
//   );

//   // useEffect(() => {
//   //   gsap.registerPlugin(ScrollTrigger);

//   //   if (
//   //     !sectionRef.current ||
//   //     !pinRef.current ||
//   //     !carRef.current ||
//   //     !itemsWrapRef.current ||
//   //     !roadRef.current
//   //   )
//   //     return;

//   //   const cards = gsap.utils.toArray(
//   //     itemsWrapRef.current.querySelectorAll(".story-card"),
//   //   );

//   //   const ctx = gsap.context(() => {
//   //     // initial states
//   //     gsap.set(carRef.current, { yPercent: -22, opacity: 0 });
//   //     // gsap.set(carRef.current, {  });

//   //     cards.forEach((card, i) => {
//   //       const fromX = i % 2 === 0 ? -120 : 120;
//   //       gsap.set(card, { autoAlpha: 0, x: fromX, y: 10, scale: 0.98 });
//   //     });

//   //     // ✅ Shared pinned distance used by BOTH (cards + road)
//   //     const getEndDistance = () => window.innerHeight * items.length + 1;

//   //     // ✅ 1) ROAD: scroll-driven, continuous, smooth, ends smoothly with section
//   //     const setBgY = gsap.quickSetter(
//   //       roadRef.current,
//   //       "backgroundPositionY",
//   //       "px",
//   //     );

//   //     const roadST = ScrollTrigger.create({
//   //       trigger: sectionRef.current,
//   //       start: "top top",
//   //       end: () => `+=${getEndDistance()}`,
//   //       scrub: 1,
//   //       invalidateOnRefresh: true,
//   //       onUpdate: (self) => {
//   //         // total move across full pinned scroll
//   //         const totalMove =
//   //           (getEndDistance() / window.innerHeight) * ROAD_PX_PER_VIEWPORT;

//   //         // Move downward as scroll progresses (continuous)
//   //         setBgY(self.progress * totalMove);
//   //       },
//   //     });

//   //     // ✅ 2) CARDS: your existing pinned storytelling timeline
//   //     const tl = gsap.timeline({
//   //       scrollTrigger: {
//   //         trigger: sectionRef.current,
//   //         start: "top top",
//   //         end: () => `+=${getEndDistance()}`,
//   //         pin: pinRef.current,
//   //         scrub: 1,
//   //         anticipatePin: 1,
//   //         invalidateOnRefresh: true,
//   //       },
//   //     });

//   //     tl.to(carRef.current, { opacity: 1, duration: 0.4 });

//   //     cards.forEach((card, i) => {
//   //       const slot = i + 0.2;

//   //       tl.to(
//   //         card,
//   //         {
//   //           autoAlpha: 1,
//   //           x: 0,
//   //           y: 0,
//   //           scale: 1,
//   //           duration: 0.35,
//   //           ease: "power2.out",
//   //         },
//   //         slot,
//   //       );

//   //       if (i > 0) {
//   //         tl.to(
//   //           cards[i - 1],
//   //           {
//   //             autoAlpha: 0.8,
//   //             y: -15,
//   //             opacity: 1,
//   //             duration: 0.25,
//   //             ease: "power1.out",
//   //           },
//   //           slot,
//   //         );
//   //       }
//   //     });

//   //     return () => {
//   //       roadST?.kill();
//   //     };
//   //   }, sectionRef);

//   //   return () => ctx.revert();
//   // }, [items.length, items]);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (
//       !sectionRef.current ||
//       !pinRef.current ||
//       !carRef.current ||
//       !itemsWrapRef.current ||
//       !roadRef.current
//     )
//       return;

//     const cards = gsap.utils.toArray(
//       itemsWrapRef.current.querySelectorAll(".story-card"),
//     );

//     const ctx = gsap.context(() => {
//       // initial states
//       gsap.set(carRef.current, { yPercent: -22, opacity: 0 });

//       // ✅ ROAD: start hidden (bottom -> top reveal)
//       gsap.set(roadRef.current, {
//         clipPath: "inset(100% 0% 0% 0%)", // hidden
//         WebkitClipPath: "inset(100% 0% 0% 0%)",
//       });

//       cards.forEach((card, i) => {
//         const fromX = i % 2 === 0 ? -120 : 120;
//         gsap.set(card, { autoAlpha: 0, x: fromX, y: 10, scale: 0.98 });
//       });

//       const getEndDistance = () => window.innerHeight * items.length + 1;

//       // ✅ 1) ROAD BG scroll (same as before)
//       const setBgY = gsap.quickSetter(
//         roadRef.current,
//         "backgroundPositionY",
//         "px",
//       );

//       const roadST = ScrollTrigger.create({
//         trigger: sectionRef.current,
//         start: "top top",
//         end: () => `+=${getEndDistance()}`,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         onUpdate: (self) => {
//           const totalMove =
//             (getEndDistance() / window.innerHeight) * ROAD_PX_PER_VIEWPORT;
//           setBgY(self.progress * totalMove);
//         },
//       });

//       // ✅ 2) Main pinned TL (cards + car + road reveal)
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: () => `+=${getEndDistance()}`,
//           pin: pinRef.current,
//           scrub: 1,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       // ✅ ROAD reveal from bottom to top (instead of opacity)
//       tl.to(
//         roadRef.current,
//         {
//           clipPath: "inset(0% 0% 0% 0%)", // fully visible
//           WebkitClipPath: "inset(0% 0% 0% 0%)",
//           ease: "none",
//           duration: 0.6, // controls how quickly it reveals
//         },
//         0, // starts immediately when pin starts
//       );

//       tl.to(carRef.current, { opacity: 1, duration: 0.4 }, 0.1);

//       cards.forEach((card, i) => {
//         const slot = i + 0.2;

//         tl.to(
//           card,
//           {
//             autoAlpha: 1,
//             x: 0,
//             y: 0,
//             scale: 1,
//             duration: 0.35,
//             ease: "power2.out",
//           },
//           slot,
//         );

//         if (i > 0) {
//           tl.to(
//             cards[i - 1],
//             {
//               autoAlpha: 0.8,
//               y: -15,
//               opacity: 1,
//               duration: 0.25,
//               ease: "power1.out",
//             },
//             slot,
//           );
//         }
//       });

//       return () => {
//         roadST?.kill();
//       };
//     }, sectionRef);

//     return () => ctx.revert();
//   }, [items.length, items]);

//   return (
//     <section ref={sectionRef} className="relative w-full">
//       <div
//         ref={pinRef}
//         className="relative mx-auto flex min-h-screen max-w-400 items-center justify-center px-4"
//       >
//         <div className="relative h-screen w-full overflow-hidden rounded-3xl">
//           {/* ✅ ROAD as an infinite tiled background */}
//           <div
//             ref={roadRef}
//             className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
//             style={{
//               // backgroundImage: "url(/Road.jpeg)",
//               // backgroundRepeat: "repeat-y",
//               // backgroundPositionX: "center",
//               // backgroundPositionY: "0px",
//               // backgroundSize: "500px auto",
//               // willChange: "background-position",
//               backgroundImage: "url(/Road.jpeg)",
//               backgroundRepeat: "repeat-y",
//               backgroundPositionX: "center",
//               backgroundPositionY: "0px",
//               backgroundSize: "500px auto",
//               willChange: "background-position, clip-path",
//             }}
//           />

//           {/* Car */}
//           <div
//             ref={carRef}
//             className="absolute ml-3 left-1/2 -bottom-10 -translate-x-1/2 z-20"
//             style={{ width: 1000, height: 700 }}
//           >
//             <Image
//               src="/top-shot.png"
//               alt="Car"
//               fill
//               className="object-contain w-full h-full"
//               priority
//             />
//           </div>

//           {/* Content stack */}
//           <div
//             ref={itemsWrapRef}
//             className="absolute inset-0 flex flex-col justify-center gap-5 px-6 md:px-10 z-40"
//           >
//             {items.map((item, i) => {
//               const isLeft = i % 2 === 0;

//               return (
//                 <div
//                   key={i}
//                   data-link-button
//                   data-link-text="View More"
//                   className={[
//                     "story-card max-w-130 rounded-sm bg-[#EB0A1E] p-5 shadow-sm",
//                     isLeft ? "mr-auto" : "ml-auto",
//                   ].join(" ")}
//                 >
//                   <div className="text-xs text-white/70">{item.title}</div>
//                   <div className="mt-1 text-lg font-semibold text-white">
//                     {item.desc}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CarComingBottomSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);
  const itemsWrapRef = useRef(null);

  // ✅ CONTROL THIS (higher = faster road on scroll)
  const ROAD_PX_PER_VIEWPORT = 300;

  // ✅ Reveal road instantly at 30% scroll progress of pinned section
  const REVEAL_AT_PROGRESS = 0.3;

  const items = useMemo(
    () => [
      { title: "Step 1", desc: "Aik Pal Ki Laparwahi: The Power of a Moment" },
      { title: "Step 2", desc: "TRIP: Engineering Safer Infrastructure" },
      { title: "Step 3", desc: "Digital Innovation in Post-Trauma Care" },
      { title: "Step 4", desc: "Empowering the Next Generation" },
      { title: "Step 5", desc: "Strategic Mobility Partnerships" },
      { title: "Step 6", desc: "A Vision of Zero Traffic Deaths" },
    ],
    [],
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      !sectionRef.current ||
      !pinRef.current ||
      !carRef.current ||
      !itemsWrapRef.current ||
      !roadRef.current
    )
      return;

    const cards = gsap.utils.toArray(
      itemsWrapRef.current.querySelectorAll(".story-card"),
    );

    const ctx = gsap.context(() => {
      const getEndDistance = () => window.innerHeight * items.length + 1;

      // ========================
      // INITIAL STATES
      // ========================
      gsap.set(carRef.current, { yPercent: 60 });

      // ✅ Road starts fully hidden
      gsap.set(roadRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        WebkitClipPath: "inset(100% 0% 0% 0%)",
      });

      cards.forEach((card, i) => {
        const fromX = i % 2 === 0 ? -120 : 120;
        const fromY = i % 2 === 0 ? 0 : 0;
        gsap.set(card, { autoAlpha: 0, x: fromX, y: fromY, scale: 0.98 });
      });

      // ========================
      // 1) ROAD BACKGROUND SCROLL (CONTINUOUS)
      // ========================
      const setBgY = gsap.quickSetter(
        roadRef.current,
        "backgroundPositionY",
        "px",
      );

      const roadMoveST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${getEndDistance()}`,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const totalMove =
            (getEndDistance() / window.innerHeight) * ROAD_PX_PER_VIEWPORT;
          setBgY(self.progress * totalMove);
        },
      });

      // ========================
      // 2) ROAD INSTANT REVEAL AT 30%
      // ========================
      let revealed = false;

      const roadThresholdST = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",

        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // If we crossed 30%, reveal once
          if (!revealed && self.progress >= REVEAL_AT_PROGRESS) {
            revealed = true;
            gsap.to(roadRef.current, {
              clipPath: "inset(0% 0% 0% 0%)",
              WebkitClipPath: "inset(0% 0% 0% 0%)",
              duration: 1, // quick snap (change to 0 for instant)
              ease: "power2.inOut",
            });
          }

          // If we go back above 30%, hide again
          if (revealed && self.progress < REVEAL_AT_PROGRESS) {
            revealed = false;
            gsap.to(roadRef.current, {
              clipPath: "inset(100% 0% 0% 0%)",
              WebkitClipPath: "inset(100% 0% 0% 0%)",
              duration: 0.2,
              ease: "power2.inOut",
            });
          }
        },
      });

      // ========================
      // 3) PINNED STORY TIMELINE
      // ========================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getEndDistance()}`,
          pin: pinRef.current,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(carRef.current, { yPercent: -22, duration: 0.4 }, 0);

      cards.forEach((card, i) => {
        const slot = i + 0.2;

        tl.to(
          card,
          {
            autoAlpha: 1,
            x: i === 3 ? -80 : i === 2 ? 80 : 0,
            y: 30,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          slot,
        );

        if (i > 0) {
          tl.to(
            cards[i - 1],
            {
              // autoAlpha: 0.8,
              // y: -15,
              duration: 0.25,
              ease: "power1.out",
            },
            slot,
          );
        }
      });

      return () => {
        roadMoveST.kill();
        roadThresholdST.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div
        ref={pinRef}
        className="relative max-w-[1800px] mx-auto flex min-h-screen items-center justify-center px-4"
      >
        <div className="relative h-screen w-full overflow-hidden rounded-3xl">
          {/* ✅ ROAD */}
          <div
            ref={roadRef}
            className="absolute left-1/2 top-0 h-full w-full z-10 -translate-x-1/2"
            style={{
              backgroundImage: "url(/Road.jpeg)",
              backgroundRepeat: "repeat-y",
              backgroundPositionX: "center",
              backgroundPositionY: "0px",
              backgroundSize: "500px auto",
              willChange: "background-position, clip-path",
            }}
          />

          {/* ✅ CAR */}
          <div
            ref={carRef}
            className="absolute ml-3 left-1/2 -bottom-10 z-30  -translate-x-1/2"
            style={{ width: 600, height: 700 }}
          >
            <Image
              src="/top-shot.png"
              alt="Car"
              fill
              className="h-full w-full object-contain"
              priority
            />
          </div>

          {/* ✅ CONTENT */}
          <div
            ref={itemsWrapRef}
            className="absolute inset-0  flex flex-col justify-center px-6 md:px-10"
          >
            {items.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  data-link-button
                  data-link-text="View More"
                  className={[
                    "story-card max-w-[370px]",
                    isLeft ? "mr-auto" : "ml-auto",
                  ].join(" ")}
                >
                  {/* <div className="text-xs text-white/70">{item.title}</div> */}
                  <div
                    className={`            text-center      text-[24px] leading-[30px] p-[30px] rounded-[4px] border-[4px] border-white outline-[4px] outline-[#EB0A1E] after:absolute ${(i + 1) % 2 === 0 ? "after:-left-[100%]" : "after:-right-[100%]"} after:-z-50 aftre:top-1/2 after:w-full after:border-b-2 after:border-black after:border-dashed  text-white bg-[#EB0A1E] `}
                  >
                    {/* <span className="font-semibold text-[#EB0A1E]">
                      {i + 1}:{" "}
                    </span> */}
                    {item.desc}
                    {/* <span className="">...</span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    // mt-1 text-lg font-semibold text-white
  );
}
