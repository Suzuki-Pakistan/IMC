// "use client";

// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// const slidesData = [
//   // {
//   //   Heading: "45,143 Lives Empowered with Accessible Healthcare",
//   //   SubHeading:
//   //     "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   //   description:
//   //     "We are transforming healthcare for underserved communities, providing essential medical care and wellness programs. Through its Concern Beyond Cars initiative, IMC ensures reliable and accessible healthcare, impacting 45,143 lives and creating lasting social change.",
//   //   image: "/1.jpeg",
//   // },

//   {
//     image: "/Painting/p1.png",
//   },
//   {
//     image: "/Painting/p2.png",
//   },
//   {
//     image: "/Painting/p3.png",
//   },
//   {
//     image: "/Painting/p4.png",
//   },
//   {
//     image: "/Painting/p5.png",
//   },
//   {
//     image: "/Painting/p6.png",
//   },
//   {
//     image: "/Painting/p7.png",
//   },
//   {
//     image: "/Painting/p8.png",
//   },
//   {
//     image: "/Painting/p9.png",
//   },
// ];

// export default function GalleryWithContent() {
//   const galleryPinRef = useRef(null);
//   const gallerySlideRefs = useRef([]);

//   const setGallerySlideRef = (index) => (el) => {
//     gallerySlideRefs.current[index] = el;
//   };

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       const slides = gallerySlideRefs.current.filter(Boolean);
//       if (!slides.length) return;

//       // Initial state
//       slides.forEach((slide, i) => {
//         // const text = slide.querySelector("[data-text]");
//         // const textTwo = slide.querySelector("[data-text-two]");
//         // const textThree = slide.querySelector("[data-text-three]");
//         const imageWrap = slide.querySelector("[data-image-wrap]");

//         gsap.set(slide, {
//           autoAlpha: i === 0 ? 1 : 0,
//           pointerEvents: i === 0 ? "auto" : "none",
//           zIndex: slides.length - i,
//         });

//         // gsap.set(
//         //   [
//         //     ,
//         //     // text
//         //     // textTwo,
//         //     // textThree,
//         //   ],
//         //   {
//         //     autoAlpha: i === 0 ? 1 : 0,
//         //     y: i === 0 ? 0 : 16,
//         //   },
//         // );

//         gsap.set(imageWrap, { opacity: i === 0 ? 1 : 0 });
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: galleryPinRef.current,
//           start: "top top",
//           end: () => `+=${window.innerHeight * (slides.length - 1)}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           ease: "power1.inOut",
//           // markers: true,
//         },
//       });

//       for (let i = 0; i < slides.length - 1; i++) {
//         const current = slides[i];
//         const next = slides[i + 1];

//         // const cText = current.querySelector("[data-text]");
//         // const cTextTwo = current.querySelector("[data-text-two]");
//         // const cTextThree = current.querySelector("[data-text-three]");
//         const cImageWrap = current.querySelector("[data-image-wrap]");

//         // const nText = next.querySelector("[data-text]");
//         // const nTextTwo = next.querySelector("[data-text-two]");
//         // const nTextThree = next.querySelector("[data-text-three]");
//         const nImageWrap = next.querySelector("[data-image-wrap]");

//         // PREP: show NEXT image first (behind current), keep next text hidden
//         tl.set(next, { autoAlpha: 1, pointerEvents: "none" });
//         // tl.set(
//         //   [
//         //     ,
//         //     // nText
//         //     nTextTwo,
//         //     nTextThree,
//         //   ],
//         //   { autoAlpha: 0, y: 16 },
//         // );
//         tl.to(
//           nImageWrap,
//           {
//             opacity: 1,
//             duration: 0.01,
//           },
//           "<",
//         );

//         // Hide current text
//         // tl.to(
//         //   [
//         //     ,
//         //     // cText
//         //     cTextTwo,
//         //     cTextThree,
//         //   ],
//         //   {
//         //     autoAlpha: 0,
//         //     y: -10,
//         //     duration: 0.18,
//         //     ease: "power2.in",
//         //   },
//         // );

//         // Fade current image out
//         tl.to(
//           cImageWrap,
//           {
//             opacity: 0,
//             duration: 0.5,
//             ease: "power2.inOut",
//           },
//           "<",
//         );

//         // Disable current slide (no blank because next image is visible)
//         tl.set(current, { autoAlpha: 0, pointerEvents: "none" });

//         // Enable next slide
//         tl.set(next, { pointerEvents: "auto" });

//         // Reveal next text
//         // tl.to([nText, nTextTwo, nTextThree], {
//         //   autoAlpha: 1,
//         //   y: 0,
//         //   duration: 0.28,
//         //   stagger: 0.04,
//         //   ease: "power2.out",
//         // });
//       }
//     }, galleryPinRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={galleryPinRef}
//       className="relative min-h-screen overflow-hidden  text-black p-10"
//     >
//       {/* <h2 className="text-8xl text-center font-toyota font-black uppercase">
//         Empowering Neighboring Communities through Uplifting Program
//       </h2> */}

//       {slidesData.map((slide, index) => (
//         <div
//           key={index}
//           ref={setGallerySlideRef(index)}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="flex w-full max-w-480 justify-center items-center p-12.5">
//             {/* <div className="flex items-start">
//               <h2 data-text className="text-5xl font-bold uppercase ">

//                 Empowering Neighboring Communities through Uplifting Program
//               </h2>
//             </div> */}

//             <div className="relative flex items-center  justify-center ">
//               <Image
//                 src="/painting/Frame.png"
//                 alt="frame"
//                 // width={2000}
//                 // height={2000}
//                 fill
//                 className="absolute z-20 left-1/2 top-1/2 "
//               />
//               <div
//                 data-image-wrap
//                 className="relative h-[650px] w-[780px] overflow-hidden will-change-transform z-10"
//               >
//                 <Image
//                   src={slide.image}
//                   alt="gallery"
//                   fill
//                   priority={index === 0}
//                   className="object-cover w-full h-full"
//                 />
//               </div>
//             </div>

//             {/* <div className="flex flex-col items-start justify-end">
//               <h2 data-text-two className="text-5xl font-black text-[#EB0A1E]">
//                 {slide.Heading}
//               </h2>
//               <p data-text-three className="mt-6 text-lg text-black/80">
//                 {slide.description}
//               </p>
//             </div> */}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }

"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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

export default function GalleryWithContent() {
  const galleryPinRef = useRef(null);
  const gallerySlideRefs = useRef([]);

  const setGallerySlideRef = (index) => (el) => {
    gallerySlideRefs.current[index] = el;
  };

  useLayoutEffect(() => {
    const root = galleryPinRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const slides = gallerySlideRefs.current.filter(Boolean);
      if (slides.length < 2) return;

      // -----------------------------
      // DURATION CONTROL
      // Increase = longer scroll per slide
      // Decrease = faster transitions
      // -----------------------------
      const pxPerSlide = 900;
      const totalScroll = pxPerSlide * (slides.length - 1.5);

      // Initial state
      slides.forEach((slide, i) => {
        const imageWrap = slide.querySelector("[data-image-wrap]");
        if (!imageWrap) return;

        gsap.set(slide, {
          autoAlpha: i === 0 ? 1 : 0,
          pointerEvents: i === 0 ? "auto" : "none",
          zIndex: slides.length - i,
        });

        gsap.set(imageWrap, { opacity: i === 0 ? 1 : 0 });
      });

      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      for (let i = 0; i < slides.length - 1; i++) {
        const current = slides[i];
        const next = slides[i + 1];

        const cImageWrap = current.querySelector("[data-image-wrap]");
        const nImageWrap = next.querySelector("[data-image-wrap]");

        if (!cImageWrap || !nImageWrap) continue;

        // ensure next exists under current, then crossfade
        tl.set(next, { autoAlpha: 1, pointerEvents: "none" });

        // show next image behind current
        tl.to(nImageWrap, { opacity: 1, duration: 0.01 }, "<");

        // fade current image out
        tl.to(cImageWrap, { opacity: 0, duration: 0.45 }, "<");

        // fully disable current slide
        tl.set(current, { autoAlpha: 0, pointerEvents: "none" });

        // enable next
        tl.set(next, { pointerEvents: "auto" });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={galleryPinRef}
      className="relative min-h-screen overflow-hidden text-black p-10"
    >
      {slidesData.map((slide, index) => (
        <div
          key={slide.image}
          ref={setGallerySlideRef(index)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex w-full max-w-[1920px] items-center justify-center p-12">
            <div className="relative flex items-center justify-center">
              {/* Frame */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[720px] w-[860px] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/painting/Frame.png"
                  alt="frame"
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>

              {/* Image */}
              <div
                data-image-wrap
                className="relative z-10 h-[650px] w-[780px] overflow-hidden will-change-transform"
              >
                <Image
                  src={slide.image}
                  alt="gallery"
                  fill
                  sizes="(max-width: 1024px) 90vw, 780px"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
