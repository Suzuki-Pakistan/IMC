// import Image from "next/image";
// import React from "react";

// const Counter = () => {
//   return (
//     <div className="w-full min-h-screen ">
//       <div className="w-full min-h-screen px-12.5 py-35 gap-5 flex flex-col gap-25 items-center">
//         <h2 className="text-7xl text-black font-black mb-10 text-center max-w-250 mx-auto">
//           Measuring the PKR 231 Million Invested in Pakistan’s Future{" "}
//         </h2>

//         <div className="w-full grid grid-cols-4 gap-x-5">
//           <div className="border border-[#EB0A1E] p-5 text-black row-span-2 p-5 hover:bg-[#EB0A1E] hover:text-white duration-300">
//             1
//           </div>
//           <div className="2 ">
//             <div className="flex gap-10 flex-col">
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-100  hover:bg-[#EB0A1E] hover:text-white duration-300">
//                 2.1
//               </div>
//               <div className=" border border-[#EB0A1E] p-5 text-black w-full h-60  hover:bg-[#EB0A1E] hover:text-white duration-300">
//                 2.2
//               </div>
//             </div>
//           </div>
//           <div className="border border-[#EB0A1E] p-5  text-black  row-span-2 hover:bg-[#EB0A1E] hover:text-white duration-300">
//             3
//           </div>
//           <div className=" 4">
//             <div className="flex gap-10 flex-col">
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-60  hover:bg-[#EB0A1E] hover:text-white duration-300">
//                 4.2
//               </div>
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-100  hover:bg-[#EB0A1E] hover:text-white duration-300">
//                 4.1
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;\

// "use client";

// import Image from "next/image";
// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// const Counter = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Define target values for the counters
//     const items = [
//       { label: "Education", value: 27 },
//       { label: "Road Safety", value: 4 },
//       { label: "Sports", value: 11 },
//       { label: "Health Care", value: 42 },
//       { label: "Sustenance", value: 12 },
//       { label: "Environment", value: 4 },
//     ];

//     // GSAP animation for each counter box
//     const counters = document.querySelectorAll(".counter");

//     counters.forEach((counter, index) => {
//       const targetValue = items[index].value;

//       // ScrollTrigger animation for counting effect
//       gsap.fromTo(
//         counter,
//         {
//           textContent: 0, // start from 0
//         },
//         {
//           textContent: targetValue,
//           duration: 2, // duration of animation
//           ease: "power2.out", // easing function
//           snap: { textContent: 1 }, // to avoid decimal places
//           scrollTrigger: {
//             trigger: counter,
//             start: "top 80%", // when 80% of the element comes into view
//             end: "top 60%",
//             toggleActions: "play none none none",
//             onEnter: () => animateCounter(counter, targetValue),
//           },
//         },
//       );
//     });

//     // Function to animate the counter
//     function animateCounter(element, value) {
//       let count = 0;
//       const interval = setInterval(() => {
//         if (count < value) {
//           count++;
//           element.innerText = `${count}%`; // Add percentage symbol here
//         } else {
//           clearInterval(interval);
//           element.innerText = `${value}%`; // Ensure the value reaches final value and % sign remains
//         }
//       }, 10); // Change 10 for speed of counting
//     }
//   }, []);

//   return (
//     <div className="w-full min-h-screen">
//       <div className="w-full min-h-screen px-12.5 py-35 gap-5 flex flex-col gap-25 items-center">
//         <h2 className="text-7xl text-black font-black mb-10 text-center max-w-250 mx-auto">
//           Measuring the PKR 231 Million Invested in Pakistan’s Future{" "}
//         </h2>

//         <div className="w-full grid grid-cols-4 gap-x-5">
//           {/* First Box */}
//           <div className="border border-[#EB0A1E] p-5 text-black row-span-2 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
//             <div>
//               <div className="text-7xl counter ">0%</div>
//               <div className="text-md font-semibold mt-2 uppercase">
//                 Education
//               </div>
//             </div>
//           </div>

//           {/* Second Box */}
//           <div>
//             <div className="flex gap-5 flex-col">
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-100 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
//                 <div>
//                   <div className="text-7xl counter ">0%</div>
//                   <div className="text-md font-semibold mt-2 uppercase">
//                     Environment
//                   </div>
//                 </div>
//               </div>
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-60 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-end">
//                 <div>
//                   <div className="text-7xl font-semibold counter">0%</div>
//                   <div className="text-md font-semibold mt-2 uppercase">
//                     Health Care
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Third Box */}
//           <div className="border border-[#EB0A1E] p-5 text-black row-span-2 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
//             <div>
//               <div className="text-7xl counter ">0%</div>
//               <div className="text-md font-semibold mt-2 uppercase">
//                 Road Safety
//               </div>
//             </div>
//           </div>

//           {/* Fourth Box */}
//           <div>
//             <div className="flex gap-5 flex-col">
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-60 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
//                 <div>
//                   <div className="text-7xl counter ">0%</div>
//                   <div className="text-md font-semibold mt-2 uppercase">
//                     Sports
//                   </div>
//                 </div>
//               </div>
//               <div className="border border-[#EB0A1E] p-5 text-black w-full h-100 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-end">
//                 <div>
//                   <div className="text-7xl counter ">0%</div>
//                   <div className="text-md font-semibold mt-2 uppercase">
//                     Sustenance
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Counter = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Define target values for the counters
    const items = [
      { label: "Education", value: 27 },
      { label: "Road Safety", value: 4 },
      { label: "Sports", value: 11 },
      { label: "Health Care", value: 42 },
      { label: "Sustenance", value: 12 },
      { label: "Environment", value: 4 },
    ];

    // GSAP animation for each counter box
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter, index) => {
      const targetValue = items[index].value;

      // ScrollTrigger animation for counting effect
      gsap.fromTo(
        counter,
        {
          textContent: 0, // start from 0
        },
        {
          textContent: targetValue,
          duration: 2, // duration of animation
          ease: "power2.out", // easing function
          snap: { textContent: 1 }, // to avoid decimal places
          scrollTrigger: {
            trigger: counter,
            start: "top 80%", // when 80% of the element comes into view
            end: "top 80%",
            toggleActions: "play none none none",
            onEnter: () => animateCounter(counter, targetValue),
          },
        },
      );
    });

    // Function to animate the counter
    function animateCounter(element, value) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < value) {
          count++;
          element.innerText = `${count}`; // Add percentage symbol here
        } else {
          clearInterval(interval);
          element.innerText = `${value}`; // Ensure the value reaches final value and % sign remains
        }
      }, 10); // Change 10 for speed of counting
    }
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full min-h-screen px-12.5 py-35 gap-5 flex flex-col gap-25 items-center">
        <h2 className="text-7xl text-black font-black mb-10 text-center max-w-250 mx-auto">
          Measuring the PKR 231 Million Invested in Pakistan’s Future{" "}
        </h2>

        <div className="w-full grid grid-cols-4 gap-x-5">
          {/* First Box */}
          <div className="border border-[#EB0A1E] p-5 text-black row-span-2 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
            <div>
              <div className="flex items-center text-7xl">
                <h2 className="counter">0</h2>%
              </div>
              <div className="text-md font-semibold mt-2 uppercase">
                Education
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div>
            <div className="flex gap-5 flex-col">
              <div className="border border-[#EB0A1E] p-5 text-black w-full h-100 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
                <div>
                  <div className="flex items-center text-7xl">
                    <h2 className="counter">0</h2>%
                  </div>
                  <div className="text-md font-semibold mt-2 uppercase">
                    Environment
                  </div>
                </div>
              </div>
              <div className="border border-[#EB0A1E] p-5 text-black w-full h-60 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-end">
                <div>
                  <div className="flex items-center text-7xl">
                    <h2 className="counter">0</h2>%
                  </div>
                  <div className="text-md font-semibold mt-2 uppercase">
                    Health Care
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Box */}
          <div className="border border-[#EB0A1E] p-5 text-black row-span-2 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
            <div>
              <div className="flex items-center text-7xl">
                <h2 className="counter">0</h2>%
              </div>
              <div className="text-md font-semibold mt-2 uppercase">
                Road Safety
              </div>
            </div>
          </div>

          {/* Fourth Box */}
          <div>
            <div className="flex gap-5 flex-col">
              <div className="border border-[#EB0A1E] p-5 text-black w-full h-60 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-start">
                <div>
                  <div className="flex items-center text-7xl">
                    <h2 className="counter">0</h2>%
                  </div>
                  <div className="text-md font-semibold mt-2 uppercase">
                    Sports
                  </div>
                </div>
              </div>
              <div className="border border-[#EB0A1E] p-5 text-black w-full h-100 hover:bg-[#EB0A1E] hover:text-white duration-300 flex flex-col items-start justify-end">
                <div>
                  <div className="flex items-center text-7xl">
                    <h2 className="counter">0</h2>%
                  </div>
                  <div className="text-md font-semibold mt-2 uppercase">
                    Sustenance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
