"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const slidesData = [
  {
    Heading: "First Title",
    SubHeading:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "First description content goes here. 2",
    image: "/1.jpeg",
  },
  {
    Heading: "Second Title",
    SubHeading:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "First description content goes here. 3",
    image: "/2.jpeg",
  },
  {
    Heading: "Third Title",
    SubHeading:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "First description content goes here. 4",
    image: "/3.jpeg",
  },
  {
    Heading: "Forth Title",
    SubHeading:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "First description content goes here. 2",
    image: "/1.jpeg",
  },
  {
    Heading: "Fifth Title",
    SubHeading:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "First description content goes here. 3",
    image: "/2.jpeg",
  },
  {
    Heading: "Sixth Title",
    SubHeading:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    description: "First description content goes here. 4",
    image: "/3.jpeg",
  },
];

export default function ScrollingGalleryWithContent() {
  const scrollingGalleryPinRef = useRef(null);
  const scrollingGallerySlideRefs = useRef([]);

  const setGallerySlideRef = (index) => (el) => {
    scrollingGallerySlideRefs.current[index] = el;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollingCtx = gsap.context(() => {
      const slides = scrollingGallerySlideRefs.current.filter(Boolean);
      if (!slides.length) return;

      slides.forEach((slide, i) => {
        const text = slide.querySelector("[data-text]");
        const textTwo = slide.querySelector("[data-text-two]");
        const textThree = slide.querySelector("[data-text-three]");
        const imageWrap = slide.querySelector("[data-image-wrap]");

        gsap.set(slide, {
          autoAlpha: i === 0 ? 1 : 0,
          pointerEvents: i === 0 ? "auto" : "none",
          zIndex: slides.length - i,
        });

        gsap.set([text, textTwo, textThree], {
          autoAlpha: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 16,
        });

        gsap.set(imageWrap, { opacity: i === 0 ? 1 : 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollingGalleryPinRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (slides.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          ease: "power1.inOut",
        },
      });

      for (let i = 0; i < slides.length - 1; i++) {
        const current = slides[i];
        const next = slides[i + 1];

        const scText = current.querySelector("[data-text]");
        const scTextTwo = current.querySelector("[data-text-two]");
        const scTextThree = current.querySelector("[data-text-three]");
        const scImageWrap = current.querySelector("[data-image-wrap]");

        const snText = next.querySelector("[data-text]");
        const snTextTwo = next.querySelector("[data-text-two]");
        const snTextThree = next.querySelector("[data-text-three]");
        const snImageWrap = next.querySelector("[data-image-wrap]");

        tl.set(next, { autoAlpha: 1, pointerEvents: "none" });
        tl.set([snText, snTextTwo, snTextThree], { autoAlpha: 0, y: 16 });
        tl.to(snImageWrap, { opacity: 1, duration: 0.01 }, "<");
        tl.to([scText, scTextTwo, scTextThree], {
          autoAlpha: 0,
          y: -10,
          duration: 0.18,
          ease: "power2.in",
        });
        tl.to(
          scImageWrap,
          { opacity: 0, duration: 0.5, ease: "power2.inOut" },
          "<",
        );
        tl.set(current, { autoAlpha: 0, pointerEvents: "none" });
        tl.set(next, { pointerEvents: "auto" });
        tl.to([snText, snTextTwo, snTextThree], {
          autoAlpha: 1,
          y: 0,
          duration: 0.28,
          stagger: 0.04,
          ease: "power2.out",
        });
      }
    }, scrollingGalleryPinRef);

    ScrollTrigger.refresh();

    return () => scrollingCtx.revert();
  }, []);

  return (
    <section
      ref={scrollingGalleryPinRef}
      className="relative min-h-screen overflow-hidden  text-black p-10"
    >
      {slidesData.map((slide, index) => (
        <div
          key={index}
          ref={setGallerySlideRef(index)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="grid w-full grid-cols-2">
            <div className="flex items-start flex-col justify-center p-10">
              <h2
                data-text-two
                className="text-5xl font-black text-[#EB0A1E] mb-5"
              >
                {slide.Heading}
              </h2>
              <h2 data-text className="text-2xl font-semibold leading-snug">
                {slide.SubHeading}
              </h2>
              <p data-text-three className="mt-6 text-lg text-black/50">
                {slide.description}
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden">
              <div
                data-image-wrap
                className="relative h-screen w-full overflow-hidden will-change-transform"
              >
                <Image
                  src={slide.image}
                  alt="gallery"
                  fill
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
