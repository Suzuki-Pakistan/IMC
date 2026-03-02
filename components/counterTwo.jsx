// "use client";

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const CounterTwo = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(".absolute-box", {
//       scrollTrigger: {
//         trigger: ".image-spread", // Trigger the animation when this element is in view
//         start: "top top", // Start when the top of the element hits the top of the viewport
//         end: "+=200%", // End when 2x the element height is scrolled
//         pin: true, // Pin the element during the animation
//         scrub: true, // Tied to scroll position
//       },
//       width: "100%", // Make sure the box takes up 100% width
//       height: "100%", // Make sure the box takes up 100% height
//       ease: "none", // Smooth scroll animation
//     });
//   }, []);

//   return (
//     <div className="w-full min-h-screen">
//       <div className="w-full min-h-screen px-12.5 py-35 gap-5 flex flex-col gap-25 items-center">
//         <h2 className="text-7xl text-black font-black text-center max-w-250 mx-auto">
//           Measuring the PKR 231 Million Invested in Pakistan’s Future
//         </h2>
//         <div className="relative w-full h-screen image-spread">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 absolute-box w-1/3 h-1/3"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterTwo;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const CounterTwo = () => {
//   const counterPinRef = useRef(null);
//   const countreImageRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       if (!counterPinRef.current || !countreImageRef.current) return;

//       gsap
//         .timeline({
//           scrollTrigger: {
//             id: "counter-pin",
//             trigger: counterPinRef.current,
//             start: "top top", // Start when the top of AboutSection enters the viewport
//             end: "+=200%", // End when the bottom of AboutSection leaves the viewport
//             scrub: true,
//             pin: true, // Ensure no pinning for AboutSection
//           },
//         })
//         .to(countreImageRef, {
//           width: "100%",
//           height: "100%",
//           ease: "power3.inOut",
//         });
//     }, counterPinRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="w-full min-h-screen">
//       <div className="w-full min-h-screen  py-35 gap-5 flex flex-col items-center">
//         <h2 className="text-7xl text-black font-black text-center max-w-250 mx-auto">
//           Measuring the PKR 231 Million Invested in Pakistan’s Future
//         </h2>
//         <div
//           ref={counterPinRef}
//           className="relative w-full h-screen image-spread px-12.5"
//         >
//           <div
//             ref={countreImageRef}
//             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 absolute-box w-1/3 h-1/3"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterTwo;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const CounterTwo = () => {
//   const counterPinRef = useRef(null); // Ref for the pinning container
//   const countreImageRef = useRef(null); // Ref for the animated box

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Creating a context for gsap animations
//     const counterCtx = gsap.context(() => {
//       if (!counterPinRef.current || !countreImageRef.current) return;

//       // ScrollTrigger setup for the box animation
//       gsap.to(countreImageRef.current, {
//         width: "100%",
//         height: "100%",
//         ease: "power3.inOut",
//         scrollTrigger: {
//           id: "counter-pin", // Unique ID for this ScrollTrigger instance
//           trigger: counterPinRef.current, // The trigger for the animation
//           start: "top top", // Start when the top of the element enters the viewport
//           end: "+=200%", // End when 200% of the element's height is scrolled
//           scrub: true, // Tied to scroll position, smoothing animation
//           pin: true, // Pin the element during scroll
//           //   pinSpacing: false, // No extra space added when pinning
//         },
//       });

//       requestAnimationFrame(() => ScrollTrigger.refresh());
//     }, counterPinRef); // The context is applied to counterPinRef

//     return () => counterCtx.revert(); // Cleanup when the component unmounts
//   }, []);

//   return (
//     <div
//       ref={counterPinRef}
//       className="relative w-full h-screen image-spread px-12.5"
//     >
//       <div
//         ref={countreImageRef}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 absolute-box w-1/3 h-1/3"
//       ></div>
//     </div>
//   );
// };

// export default CounterTwo;

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const CounterTwo = () => {
  const counterPinRef = useRef(null); // Ref for the pinning container
  const counterContentRef = useRef(null); // Ref for content inside the container
  const countreImageRef = useRef(null); // Ref for the animated box

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Creating a context for gsap animations
    const counterCtx = gsap.context(() => {
      if (
        !counterPinRef.current ||
        !countreImageRef.current ||
        !counterContentRef.current
      )
        return;

      // ScrollTrigger setup for the pinning and animation logic
      gsap.to(countreImageRef.current, {
        width: "100%",
        height: "100%",
        ease: "power3.inOut",
        scrollTrigger: {
          id: "counter-pin", // Unique ID for this ScrollTrigger instance
          trigger: counterPinRef.current, // The trigger for the animation
          start: "top top", // Start when the top of the element enters the viewport
          end: "+=200%", // End when 200% of the element's height is scrolled
          scrub: true, // Tied to scroll position, smoothing animation
          pin: true, // Pin the element during scroll
          pinSpacing: true, // Ensure space is added to prevent overlap
          markers: true, // Markers can be removed in production
        },
      });

      // Additional content animation for the counterContentRef
      gsap.fromTo(
        counterContentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counterPinRef.current,
            start: "top top",
            end: "+=500%",
            scrub: true,
          },
        },
      );

      // Ensuring smooth transition and no overlap by adding transform
      gsap.to(counterPinRef.current, {
        transform: "translateY(50px)", // Adjust the transform to avoid overlapping
        scrollTrigger: {
          trigger: counterPinRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // Ensure GSAP refreshes properly when the ScrollTrigger is active
      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, counterPinRef); // The context is applied to counterPinRef

    return () => counterCtx.revert(); // Cleanup when the component unmounts
  }, []);

  return (
    <div
      ref={counterPinRef}
      className="relative w-full h-screen image-spread px-12.5"
    >
      <div
        ref={countreImageRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500 absolute-box w-1/3 h-1/3"
      ></div>

      {/* Content Wrapper */}
      <div
        ref={counterContentRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center"
      >
        {/* Add additional elements here */}
        <h2>Additional Content Here</h2>
        <p>More elements can be animated or added inside this wrapper.</p>
      </div>
    </div>
  );
};

export default CounterTwo;
