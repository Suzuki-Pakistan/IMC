// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// const AboutSection = () => {
//   const aboutPinRef = useRef(null);
//   const aboutTextRef = useRef(null);
//   // const aboutLineRef = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, SplitText);

//     const ctx = gsap.context(() => {
//       if (!aboutPinRef.current || !aboutTextRef.current) return;

//       const split = new SplitText(aboutTextRef.current, {
//         type: "words",
//         wordsClass: "word",
//       });

//       gsap.set(split.words, { opacity: 0.2, display: "inline-block" });
//       // gsap.set(aboutLineRef.current, { height: 0 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           id: "about-pin",
//           trigger: aboutPinRef.current,
//           start: "top top",
//           end: () => "+=" + window.innerHeight * 1.5, // 3 screens
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           ease: "power3.inOut",
//           // markers: true,
//         },
//       });

//       tl.to(split.words, {
//         y: -20,
//         ease: "power3.out",
//       }).to(
//         split.words,
//         {
//           opacity: 1,
//           stagger: 0.08,
//           ease: "power3.out",
//         },
//         // "<",
//       );
//       // .to(aboutLineRef.current, {
//       //   height: 200,
//       //   duration: 0.6,
//       //   ease: "none",
//       // });

//       // ✅ refresh after everything has mounted/painted
//       requestAnimationFrame(() => ScrollTrigger.refresh());

//       return () => {
//         split.revert();
//       };
//     }, aboutPinRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={aboutPinRef}
//       className="relative h-screen p-12.5 max-w-480 mx-auto  z-20 flex items-center justify-center flex-col"
//     >
//       <h2
//         ref={aboutTextRef}
//         className="text-8xl leading-[96px] p-12.5 mx-auto text-center text-black font-toyota font-book uppercase"
//       >
//         {/* <span className="text-[#EB0A1E]">  </span> */}
//         The 2050 Challenge: Near-Zero Impact Six Challenges. One Sustainable
//         Future The Road to 2050 Starts Now
//       </h2>

//       {/* <div ref={aboutLineRef} className="mx-auto mt-14 w-1 bg-[#EB0A1E]" /> */}
//     </section>
//   );
// };

// export default AboutSection;

"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutSection = ({
  text,
  start = "top top",
  screens = 1.5, // pin duration in "screens"
  className = "",
  textClassName = "",
  wordOpacity = 0.2,
  stagger = 0.08,
}) => {
  const aboutPinRef = useRef(null);
  const aboutTextRef = useRef(null);

  const stableText = useMemo(() => text, [text]);

  useLayoutEffect(() => {
    const el = aboutPinRef.current;
    const heading = aboutTextRef.current;
    if (!el || !heading) return;

    const ctx = gsap.context(() => {
      // kill any previous trigger with same id (safe for hot reload / re-render)
      ScrollTrigger.getById("about-pin")?.kill();

      const split = new SplitText(heading, {
        type: "words",
        wordsClass: "word",
      });

      gsap.set(split.words, { opacity: wordOpacity, display: "inline-block" });

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-pin",
          trigger: el,
          start,
          end: () => `+=${window.innerHeight * screens}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(split.words, {
        y: -20,
        ease: "power3.out",
      }).to(
        split.words,
        {
          opacity: 1,
          stagger,
          ease: "power3.out",
        },
        "<",
      );

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => split.revert();
    }, el);

    return () => ctx.revert();
  }, [stableText, start, screens, wordOpacity, stagger]);

  return (
    <section
      ref={aboutPinRef}
      className={`relative h-screen p-12.5 max-w-480 mx-auto z-20 flex items-center justify-center flex-col ${className}`}
    >
      <h2
        ref={aboutTextRef}
        className={`text-8xl leading-[96px] p-12.5 mx-auto text-center text-black font-toyota font-book uppercase ${textClassName}`}
      >
        {text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>
    </section>
  );
};

export default AboutSection;
