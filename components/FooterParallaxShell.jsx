// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";

// export default function FooterParallaxShell({ children, footer }) {
//   const footerRef = useRef(null);
//   const [footerHeight, setFooterHeight] = useState(0);

//   // Measure footer height so we can add padding-bottom to the scrolling content
//   useEffect(() => {
//     if (!footerRef.current) return;

//     const el = footerRef.current;

//     const measure = () => {
//       const h = el.getBoundingClientRect().height;
//       setFooterHeight(Math.ceil(h));
//     };

//     measure();

//     const ro = new ResizeObserver(measure);
//     ro.observe(el);

//     window.addEventListener("resize", measure);
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("resize", measure);
//     };
//   }, []);

//   const styles = useMemo(
//     () => ({
//       "--footer-h": `${footerHeight}px`,
//     }),
//     [footerHeight],
//   );

//   return (
//     <div className="relative min-h-screen" style={styles}>
//       {/* Fixed footer behind */}
//       <div
//         ref={footerRef}
//         className="fixed inset-x-0 bottom-0 z-0"
//         style={{
//           transform: "translateZ(0)", // helps on some GPUs
//           willChange: "transform",
//         }}
//       >
//         {footer}
//       </div>

//       {/* Scrolling content overlays footer */}
//       <div
//         className="relative z-10"
//         style={{
//           paddingBottom: "var(--footer-h)",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FooterParallaxShell({ children, footer }) {
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;

    const el = footerRef.current;

    const measure = () => {
      const h = el.getBoundingClientRect().height;
      setFooterHeight(Math.ceil(h));
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const styles = useMemo(
    () => ({
      "--footer-h": `${footerHeight}px`,
    }),
    [footerHeight],
  );

  return (
    <div className="relative min-h-screen" style={styles}>
      {/* Fixed footer behind */}
      <div
        ref={footerRef}
        className="fixed inset-x-0 bottom-0 z-[20] pointer-events-auto"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
      >
        {footer}
      </div>

      {/* Scrolling content above */}
      <div className="relative z-[30]">
        {children}

        {/* Spacer creates scroll room BUT does not block clicks */}
        <div
          aria-hidden="true"
          className="pointer-events-none"
          style={{ height: "var(--footer-h)" }}
        />
      </div>
    </div>
  );
}
