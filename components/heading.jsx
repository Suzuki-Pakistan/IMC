// const Heading = () => {
//   return (
//     <div className="w-full pt-35  gap-5 flex flex-col items-center">
//       <h2 className="text-7xl text-black font-black text-center max-w-250 mx-auto">
//         Measuring the PKR 231 Million Invested in Pakistan’s Future
//       </h2>
//     </div>
//   );
// };

// export default Heading;

// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// const Heading = () => {
//   const headingPinRef = useRef(null);
//   const headingTextRef = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, SplitText);

//     const ctx = gsap.context(() => {
//       if (!headingPinRef.current || !headingTextRef.current) return;

//       const split = new SplitText(headingTextRef.current, {
//         type: "words",
//         wordsClass: "word",
//       });

//       gsap.set(split.words, { opacity: 0.2, display: "inline-block" });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           id: "about-pin",
//           trigger: headingPinRef.current,
//           start: "top top",
//           end: () => "+=" + window.innerHeight * 1.8, // 3 screens
//           scrub: 1,
//           pin: true,
//           pinSpacing: true,
//           anticipatePin: 1,
//           invalidateOnRefresh: true,
//           ease: "power3.inOut",
//         },
//       });

//       tl.to(split.words, {
//         y: -20,
//         ease: "power3.out",
//       }).to(split.words, {
//         opacity: 1,
//         stagger: 0.08,
//         ease: "power3.out",
//       });

//       requestAnimationFrame(() => ScrollTrigger.refresh());

//       return () => {
//         split.revert();
//       };
//     }, headingPinRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={headingPinRef}
//       className="relative h-screen p-12.5 max-w-480 mx-auto  z-20 flex items-center justify-center flex-col"
//     >
//       <h2
//         ref={headingTextRef}
//         className="text-7xl text-black font-black text-center max-w-250 mx-auto "
//       >
//         Measuring the PKR 231 Million Invested in Pakistan’s Future
//       </h2>
//     </section>
//   );
// };

// export default Heading;

"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Heading = ({ text }) => {
  const headingPinRef = useRef(null);
  const headingTextRef = useRef(null);
  const headingLineRef = useRef(null);

  useLayoutEffect(() => {
    if (!headingPinRef.current || !headingTextRef.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(headingTextRef.current, {
        type: "words",
        wordsClass: "word",
      });

      gsap.set(split.words, {
        opacity: 0.2,
        display: "inline-block",
      });
      gsap.set(headingLineRef.current, { height: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingPinRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 0.5,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(split.words, {
        y: -20,
        ease: "power3.out",
      })
        .to(
          split.words,
          {
            opacity: 1,
            stagger: 0.08,
            ease: "power3.out",
          },
          "<",
        )

        .to(headingLineRef.current, {
          height: 200,
          duration: 0.6,
          ease: "none",
        });

      return () => {
        split.revert();
      };
    }, headingPinRef);

    return () => ctx.revert();
  }, [text]); // re-run when text changes

  return (
    <section
      ref={headingPinRef}
      className="relative h-screen p-12.5 max-w-480 mx-auto z-20 flex items-center justify-center flex-col"
    >
      <h2
        ref={headingTextRef}
        className="text-8xl text-black font-black text-center max-w-1/2 mx-auto"
      >
        {text.split("||").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h2>
      <div ref={headingLineRef} className="mx-auto mt-14 w-1 bg-[#EB0A1E]" />
    </section>
  );
};

export default Heading;
