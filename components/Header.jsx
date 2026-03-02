// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const menuItems = [
//   { label: "Home", href: "#home" },
//   { label: "About", href: "#about" },
//   { label: "Services", href: "#services" },
//   { label: "Contact", href: "#contact" },
// ];

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Lock scroll when menu is open + ESC to close
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
//     document.addEventListener("keydown", onKeyDown);
//     return () => document.removeEventListener("keydown", onKeyDown);
//   }, [isOpen]);

//   return (
//     <>
//       {/* Header */}
//       <header className="fixed top-0 left-0 z-50 w-full backdrop-blur">
//         <div className="mx-auto flex max-w-480 items-center justify-between px-12.5 py-4">
//           {/* Left: Logo image */}
//           <Image src="/toyota-logo.png" alt="Logo" width={100} height={40} />

//           {/* Right: Hamburger */}
//           <button
//             type="button"
//             aria-label="Open menu"
//             aria-expanded={isOpen}
//             onClick={() => setIsOpen(true)}
//             className="group inline-flex cursor-pointer h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/60 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
//           >
//             <span className="grid gap-1.5">
//               <span className="h-0.5 w-5 rounded bg-[#EB0A1E] transition" />
//               <span className="h-0.5 w-5 rounded bg-[#EB0A1E] transition" />
//               <span className="h-0.5 w-5 rounded bg-[#EB0A1E] transition" />
//             </span>
//           </button>
//         </div>
//       </header>

//       {/* Overlay + Sliding Menu */}
//       <div
//         className={[
//           "fixed inset-0 z-60 transition-opacity duration-300",
//           isOpen ? "opacity-100" : "pointer-events-none opacity-0",
//         ].join(" ")}
//         onMouseDown={() => setIsOpen(false)} // click outside to close
//         aria-hidden={!isOpen}
//       >
//         {/* Dim background */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Sliding panel */}
//         <div
//           className={[
//             "absolute inset-0 bg-white/90 backdrop-blur-xl",
//             "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
//             isOpen ? "translate-x-0" : "-translate-x-full",
//           ].join(" ")}
//           onMouseDown={(e) => e.stopPropagation()}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Navigation menu"
//         >
//           {/* Close button (top right) */}
//           <button
//             type="button"
//             aria-label="Close menu"
//             onClick={() => setIsOpen(false)}
//             className="absolute right-12.5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-xl cursor-pointer duration-200 hover:text-white border font-black border-[#EB0A1E] bg-white/70 text-[#EB0A1E] text-xl transition hover:bg-[#EB0A1E] focus:outline-none focus:ring-2 focus:ring-black/20"
//           >
//             ✕
//           </button>

//           {/* Centered menu */}
//           <nav className="flex h-full items-center justify-center px-6">
//             <ul className="flex flex-col items-center gap-6 text-center">
//               {menuItems.map((item, idx) => (
//                 <li key={`${item.label}-${idx}`}>
//                   <a
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className="inline-block rounded-2xl px-4 py-2 text-3xl font-semibold tracking-tight text-black/90 transition  hover:text-[#EB0A1E] active:scale-[0.99] sm:text-4xl"
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </nav>
//         </div>
//       </div>

//       {/* Spacer so content doesn't hide under fixed header */}
//       {/* <div className="h-18" /> */}
//     </>
//   );
// };

// export default Header;

"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // scroll behavior states
  const [isHidden, setIsHidden] = useState(false); // header translate up/down
  const [isScrolled, setIsScrolled] = useState(false); // background tint after scroll
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  // Lock scroll when menu is open + ESC to close
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Hide header after 300px when scrolling down, show when scrolling up
  useEffect(() => {
    if (isOpen) return; // don't fight scroll logic when menu is open

    lastYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const currentY = window.scrollY || 0;
      if (tickingRef.current) return;

      tickingRef.current = true;
      requestAnimationFrame(() => {
        const lastY = lastYRef.current;
        const delta = currentY - lastY;

        // background tint trigger
        setIsScrolled(currentY > 300);

        // hide/show behavior
        // only hide once user is past 300px AND actually scrolling down meaningfully
        if (currentY > 300 && delta > 6) {
          setIsHidden(true);
        }

        // show if user scrolls up meaningfully (or near top)
        if (delta < -6 || currentY < 120) {
          setIsHidden(false);
        }

        lastYRef.current = currentY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={[
          "fixed top-0 left-0 z-50 w-full ",
          // smooth slide hide/show
          "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          // isHidden ? "-translate-y-full" : "translate-y-0",
          // smooth background tint
          "transition-[background-color,transform,backdrop-filter] duration-500",
          // isScrolled ? "bg-white/50 backdrop-blur" : "bg-white/0",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-480 items-center justify-between px-12.5 py-4">
          {/* Left: Logo image */}
          <Image
            src="/toyota-logo-black.png"
            alt="Logo"
            width={100}
            height={40}
          />

          {/* Right: Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer inline-flex h-13 w-13 items-center justify-center rounded-full border border-black/10 bg-white/20 transition hover:bg-[#EB0A1E] focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            <span className="grid gap-1">
              <span className="h-1 w-6 rounded bg-[#EB0A1E] group-hover:bg-white transition" />
              <span className="h-1 w-6 rounded bg-[#EB0A1E] group-hover:bg-white transition" />
              <span className="h-1 w-6 rounded bg-[#EB0A1E] group-hover:bg-white transition" />
            </span>
          </button>
        </div>
      </header>

      {/* Overlay + Sliding Menu */}
      {/* <div
        className={[
          "fixed inset-0 z-60 transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onMouseDown={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div
          className={[
            "absolute inset-0 bg-white/90 backdrop-blur-xl",
            "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen ? "translate-x-0" : "-translate-x-full",
          ].join(" ")}
          onMouseDown={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="absolute cursor-pointer right-12.5 top-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#EB0A1E] bg-white/70 text-xl font-black text-[#EB0A1E] transition duration-200 hover:bg-[#EB0A1E] hover:text-white focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            ✕
          </button>

          <nav className="flex h-full items-center justify-center px-6">
            <ul className="flex flex-col items-center gap-6 text-center">
              {menuItems.map((item, idx) => (
                <li key={`${item.label}-${idx}`}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-block rounded-2xl px-4 py-2 text-3xl font-semibold tracking-tight text-black/90 transition hover:text-[#EB0A1E] active:scale-[0.99] sm:text-4xl"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div> */}
    </>
  );
};

export default Header;
