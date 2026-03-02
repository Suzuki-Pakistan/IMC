"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollingVideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    if (!video) return;

    console.log(video.duration);

    const ctx = gsap.context(() => {
      const onLoaded = () => {
        if (!video.duration || isNaN(video.duration)) return;

        gsap.to(video, {
          currentTime: video.duration,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: video,
            start: "top top",
            end: "+=3950",
            scrub: true,
            pin: true,
            pinSpacing: false,
            ease: "power1.inOut",
          },
        });
      };

      if (video.readyState >= 1) {
        onLoaded();
      } else {
        video.addEventListener("loadedmetadata", onLoaded);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative max-w-screen">
      <div className="relative h-1000 max-w-screen ">
        <div className="sticky w-screen max-w-screen h-screen top-0 left-0 z-20 p-12.5">
          <div className="w-full h-full flex justify-between items-center gap-2">
            <div className="w-2/6">
              <h2 className="text-[#EB0A1E] text-3xl font-bold">
                IMC’s Commitment to a Greener Future
              </h2>
              <p className="text-black text-lg mt-5">
                IMC is dedicated to reducing its environmental impact through
                sustainable practices like emission reduction, energy
                conservation, and waste management. With eco-friendly policies
                and awareness campaigns, IMC fosters a culture of environmental
                stewardship, ensuring a healthier planet for future generations.
              </p>
            </div>
            <div className="w-2/6">
              <h2 className="text-[#EB0A1E] text-3xl font-bold">
                IMC Plants 920,000 Trees for the Environment
              </h2>
              <p className="text-black text-lg mt-5">
                Through its Million Tree Plantation Drive, IMC has planted
                920,000 trees, including native species like Neem and Gulmohar,
                across key locations in Karachi. This initiative helps combat
                climate change, improve air quality, and enhance the city&apos;s
                green cover, creating a healthier environment for its residents.
              </p>
            </div>
          </div>
        </div>
        <video
          ref={videoRef}
          src="/tree.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full max-w-screen h-screen object-cover absolute top-0 left-0 z-10"
        />
      </div>
    </div>
  );
};

export default ScrollingVideoSection;
