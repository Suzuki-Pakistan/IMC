// "use client";
// import React, { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";

// const Cursor = () => {
//   const cursorRef = useRef(null);
//   const textRef = useRef(null);

//   useLayoutEffect(() => {
//     const cursor = cursorRef.current;
//     const text = textRef.current;

//     // 1. Follow Mouse Logic
//     const onMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       gsap.to(cursor, {
//         x: clientX,
//         y: clientY,
//         duration: 0.6,
//         ease: "power3.out",
//       });
//     };

//     // 2. Hover Logic for [data-link-button]
//     const onMouseEnter = () => {
//       gsap.to(cursor, {
//         width: 100,
//         height: 100,
//         backgroundColor: "#ffffff", // Change color
//         mixBlendingMode: "difference",
//         duration: 0.3,
//       });
//       gsap.to(text, { opacity: 1, scale: 1, duration: 0.3 });
//     };

//     const onMouseLeave = () => {
//       gsap.to(cursor, {
//         width: 20,
//         height: 20,
//         backgroundColor: "#ffffff",
//         mixBlendingMode: "normal",
//         duration: 0.3,
//       });
//       gsap.to(text, { opacity: 0, scale: 0, duration: 0.3 });
//     };

//     // Attach listeners
//     window.addEventListener("mousemove", onMouseMove);

//     const targets = document.querySelectorAll("[data-link-button]");
//     targets.forEach((target) => {
//       target.addEventListener("mouseenter", onMouseEnter);
//       target.addEventListener("mouseleave", onMouseLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       targets.forEach((target) => {
//         target.removeEventListener("mouseenter", onMouseEnter);
//         target.removeEventListener("mouseleave", onMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-9999 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
//     >
//       <span
//         ref={textRef}
//         className="opacity-0 scale-0 text-[10px] font-bold text-black text-center leading-tight"
//       >
//         VIEW MORE <span className="inline-block text-[15px] -rotate-45">→</span>
//       </span>
//     </div>
//   );
// };

// export default Cursor;

// "use client";
// import React, { useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const textRef = useRef(null);
//   const imageContainerRef = useRef(null);
//   const [imgSrc, setImgSrc] = useState("");

//   // useLayoutEffect(() => {
//   //   const cursor = cursorRef.current;
//   //   const text = textRef.current;
//   //   const imgContainer = imageContainerRef.current;

//   //   // Set initial state to avoid jumpiness
//   //   gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 });
//   //   gsap.set(imgContainer, { opacity: 0, clipPath: "inset(100% 0% 0% 0%)" });

//   //   const onMouseMove = (e) => {
//   //     const { clientX, clientY } = e;

//   //     // Move the main cursor - Using quickTo for better performance
//   //     gsap.to(cursor, {
//   //       x: clientX,
//   //       y: clientY,
//   //       duration: 0.5,
//   //       ease: "power3.out",
//   //     });

//   //     // Position the floating image
//   //     const isRightSide = clientX > window.innerWidth / 2;
//   //     gsap.to(imgContainer, {
//   //       x: isRightSide ? -130 : 30, // Dynamic offset
//   //       y: -90,
//   //       duration: 0.7,
//   //       ease: "power2.out",
//   //     });
//   //   };

//   //   const onBtnEnter = () => {
//   //     gsap.to(cursor, {
//   //       width: 100,
//   //       height: 100,
//   //       backgroundColor: "#EB0A1E",
//   //       mixBlendingMode: "difference",
//   //       duration: 0.3,
//   //     });
//   //     gsap.to(text, { opacity: 1, scale: 1, duration: 0.3 });
//   //   };

//   //   const onBtnLeave = () => {
//   //     gsap.to(cursor, {
//   //       width: 20,
//   //       height: 20,
//   //       backgroundColor: "#EB0A1E", // Changed to white so it's visible on black bg
//   //       mixBlendingMode: "normal",
//   //       duration: 0.3,
//   //     });
//   //     gsap.to(text, { opacity: 0, scale: 0, duration: 0.3 });
//   //   };

//   //   const onImgEnter = (e) => {
//   //     const url = e.currentTarget.getAttribute("image-url");
//   //     if (url) setImgSrc(url);

//   //     gsap.to(imgContainer, {
//   //       clipPath: "inset(0% 0% 0% 0%)",
//   //       opacity: 1,
//   //       duration: 0.5,
//   //       ease: "power2.inOut",
//   //     });
//   //   };

//   //   const onImgLeave = () => {
//   //     gsap.to(imgContainer, {
//   //       clipPath: "inset(100% 0% 0% 0%)",
//   //       opacity: 0,
//   //       duration: 0.4,
//   //     });
//   //   };

//   //   window.addEventListener("mousemove", onMouseMove);

//   //   // Use a small timeout to ensure DOM elements are rendered
//   //   const refreshTargets = () => {
//   //     const btnTargets = document.querySelectorAll("[data-link-button]");
//   //     const imgTargets = document.querySelectorAll("[data-link-image]");

//   //     btnTargets.forEach((t) => {
//   //       t.addEventListener("mouseenter", onBtnEnter);
//   //       t.addEventListener("mouseleave", onBtnLeave);
//   //     });

//   //     imgTargets.forEach((t) => {
//   //       t.addEventListener("mouseenter", onImgEnter);
//   //       t.addEventListener("mouseleave", onImgLeave);
//   //     });
//   //   };

//   //   refreshTargets();

//   //   return () => {
//   //     window.removeEventListener("mousemove", onMouseMove);
//   //     // Clean up would go here, but since it's global, usually handled by Next.js unmount
//   //   };
//   // }, []);

//   useLayoutEffect(() => {
//     const cursor = cursorRef.current;
//     const text = textRef.current;
//     const imgContainer = imageContainerRef.current;

//     gsap.set(cursor, { xPercent: -50, yPercent: -50 });
//     gsap.set(imgContainer, {
//       opacity: 0,
//       clipPath: "inset(100% 0% 0% 0%)",
//     });

//     // ⚡ Smooth movement using quickTo (no stacking)
//     const xTo = gsap.quickTo(cursor, "x", {
//       duration: 0.4,
//       ease: "power3",
//     });

//     const yTo = gsap.quickTo(cursor, "y", {
//       duration: 0.4,
//       ease: "power3",
//     });

//     const imgXTo = gsap.quickTo(imgContainer, "x", {
//       duration: 0.6,
//       ease: "power2",
//     });

//     const imgYTo = gsap.quickTo(imgContainer, "y", {
//       duration: 0.6,
//       ease: "power2",
//     });

//     const onMouseMove = (e) => {
//       const { clientX, clientY } = e;

//       xTo(clientX);
//       yTo(clientY);

//       const isRightSide = clientX > window.innerWidth / 2;
//       imgXTo(isRightSide ? -130 : 30);
//       imgYTo(-90);
//     };

//     const onBtnEnter = () => {
//       gsap.to(cursor, {
//         width: 100,
//         height: 100,
//         duration: 0.3,
//         ease: "power2",
//         overwrite: "auto",
//       });

//       gsap.to(text, {
//         opacity: 1,
//         scale: 1,
//         duration: 0.3,
//         overwrite: "auto",
//       });
//     };

//     const onBtnLeave = () => {
//       gsap.to(cursor, {
//         width: 20,
//         height: 20,
//         duration: 0.3,
//         ease: "power2",
//         overwrite: "auto",
//       });

//       gsap.to(text, {
//         opacity: 0,
//         scale: 0,
//         duration: 0.3,
//         overwrite: "auto",
//       });
//     };

//     let revealTween;

//     const onImgEnter = (e) => {
//       const url = e.currentTarget.getAttribute("image-url");
//       if (url) setImgSrc(url);

//       if (revealTween) revealTween.kill();

//       revealTween = gsap.to(imgContainer, {
//         clipPath: "inset(0% 0% 0% 0%)",
//         opacity: 1,
//         duration: 0.4,
//         ease: "power2.out",
//         overwrite: "auto",
//       });
//     };

//     const onImgLeave = () => {
//       if (revealTween) revealTween.kill();

//       revealTween = gsap.to(imgContainer, {
//         clipPath: "inset(100% 0% 0% 0%)",
//         opacity: 0,
//         duration: 0.3,
//         ease: "power2.in",
//         overwrite: "auto",
//       });
//     };

//     window.addEventListener("mousemove", onMouseMove);

//     const btnTargets = document.querySelectorAll("[data-link-button]");
//     const imgTargets = document.querySelectorAll("[data-link-image]");

//     btnTargets.forEach((t) => {
//       t.addEventListener("mouseenter", onBtnEnter);
//       t.addEventListener("mouseleave", onBtnLeave);
//     });

//     imgTargets.forEach((t) => {
//       t.addEventListener("mouseenter", onImgEnter);
//       t.addEventListener("mouseleave", onImgLeave);
//     });

//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);

//       btnTargets.forEach((t) => {
//         t.removeEventListener("mouseenter", onBtnEnter);
//         t.removeEventListener("mouseleave", onBtnLeave);
//       });

//       imgTargets.forEach((t) => {
//         t.removeEventListener("mouseenter", onImgEnter);
//         t.removeEventListener("mouseleave", onImgLeave);
//       });
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 w-5 h-5 bg-[#EB0A1E] border border-white rounded-full pointer-events-none z-99999 flex items-center justify-center origin-center"
//       style={{ mixBlendingMode: "difference" }} // Helps visibility on any background
//     >
//       {/* View More Text */}
//       <span
//         ref={textRef}
//         className="opacity-0 scale-0 text-[10px] font-bold text-white text-center pointer-events-none uppercase"
//       >
//         VIEW MORE{" "}
//         <span className="inline-block text-md -rotate-45 ml-1">→</span>
//       </span>

//       {/* Floating Image Container */}
//       <div
//         ref={imageContainerRef}
//         className="absolute pointer-events-none overflow-hidden rounded-lg bg-gray-800"
//         style={{ width: "450px", height: "280px", left: 250, top: 0 }}
//       >
//         {imgSrc && (
//           <Image
//             src={imgSrc}
//             alt="Preview"
//             fill
//             unoptimized // Useful for external/placeholder URLs
//             className="w-[450px] h-[280px] object-cover"
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomCursor;
"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const imageContainerRef = useRef(null);

  const [imgSrc, setImgSrc] = useState("");
  const [cursorText, setCursorText] = useState("VIEW MORE");

  useLayoutEffect(() => {
    // Hide native cursor globally
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    const cursor = cursorRef.current;
    const text = textRef.current;
    const imgContainer = imageContainerRef.current;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(imgContainer, {
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    });

    // ⚡ Smooth cursor movement
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const imgXTo = gsap.quickTo(imgContainer, "x", {
      duration: 0.6,
      ease: "power2",
    });

    const imgYTo = gsap.quickTo(imgContainer, "y", {
      duration: 0.6,
      ease: "power2",
    });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;

      xTo(clientX);
      yTo(clientY);

      const isRightSide = clientX > window.innerWidth / 2;
      imgXTo(isRightSide ? -130 : 30);
      imgYTo(-90);
    };

    const onBtnEnter = (e) => {
      const dynamicText =
        e.currentTarget.getAttribute("data-link-text") || "VIEW MORE";

      setCursorText(dynamicText);

      gsap.to(cursor, {
        width: 110,
        height: 110,
        duration: 0.3,
        ease: "power2",
        overwrite: "auto",
      });

      gsap.to(text, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        overwrite: "auto",
      });
    };

    const onBtnLeave = () => {
      gsap.to(cursor, {
        width: 20,
        height: 20,
        duration: 0.3,
        ease: "power2",
        overwrite: "auto",
      });

      gsap.to(text, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        overwrite: "auto",
      });
    };

    let revealTween;

    const onImgEnter = (e) => {
      const url = e.currentTarget.getAttribute("image-url");
      if (url) setImgSrc(url);

      if (revealTween) revealTween.kill();

      revealTween = gsap.to(imgContainer, {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onImgLeave = () => {
      if (revealTween) revealTween.kill();

      revealTween = gsap.to(imgContainer, {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        overwrite: "auto",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const btnTargets = document.querySelectorAll("[data-link-button]");
    const imgTargets = document.querySelectorAll("[data-link-image]");

    btnTargets.forEach((t) => {
      t.addEventListener("mouseenter", onBtnEnter);
      t.addEventListener("mouseleave", onBtnLeave);
    });

    imgTargets.forEach((t) => {
      t.addEventListener("mouseenter", onImgEnter);
      t.addEventListener("mouseleave", onImgLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);

      btnTargets.forEach((t) => {
        t.removeEventListener("mouseenter", onBtnEnter);
        t.removeEventListener("mouseleave", onBtnLeave);
      });

      imgTargets.forEach((t) => {
        t.removeEventListener("mouseenter", onImgEnter);
        t.removeEventListener("mouseleave", onImgLeave);
      });
    };
    return () => {
      // Restore cursor if component unmounts
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-[#EB0A1E]  rounded-full pointer-events-none z-[99999] flex items-center justify-center origin-center"
      style={{ mixBlendingMode: "difference" }}
    >
      {/* Dynamic Text */}
      <span
        ref={textRef}
        className="opacity-0 scale-0 text-[12px] font-bold text-white text-center pointer-events-none uppercase"
      >
        {cursorText}
        <span className="inline-block text-md -rotate-45 ml-1">→</span>
      </span>

      {/* Floating Image */}
      <div
        ref={imageContainerRef}
        className="absolute pointer-events-none overflow-hidden rounded-lg bg-gray-800"
        style={{ width: "450px", height: "280px", left: 250, top: 0 }}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt="Preview"
            fill
            unoptimized
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default CustomCursor;
