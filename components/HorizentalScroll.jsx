"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollReveal() {
  const scrollSectionRef = useRef(null);
  const scrollContentRef = useRef(null);

  // Array for slides content
  const slidesData = [
    {
      type: "heading", // Static Heading Slide
      text: "Neighboring Communities Uplifting Program",
      para: "At IMC, the Neighboring Communities Uplifting Program reflectsour commitment to creating a positive and sustainable impact on society. We remain dedicated to empowering communities by fostering education, addressing social challenges, and inspiring growth for national development.",
      paraClassName: "reveal-text text-2xl  text-white ",
      className:
        "reveal-text text-8xl font-bold uppercase text-white  whitespace-normal",
    },
    // {
    //   type: "image", // Static Image Slide
    //   src: "/t3.jpg",
    //   alt: "community",
    //   additionalClasses: "object-cover grayscale",
    //   className: "reveal-image",
    // },
    // {
    //   type: "stats", // Dynamic Stats Slide 1
    //   title: "45,143 Lives",
    //   subtitle: "Empowered with Accessible Healthcare",
    //   content:
    //     "We are transforming healthcare for underserved communities, providing essential medical care and wellness programs. Through its Concern Beyond Cars initiative, IMC ensures reliable and accessible healthcare, impacting 45,143 lives and creating lasting social change.",
    //   titleClass: "uppercase text-8xl font-bold text-white",
    //   subtitleClass:
    //     "uppercase text-red-600 font-light text-4xl mt-5 reveal-healthcare-text",
    //   contentClass: "max-w-222.5 text-xl font-normal reveal-healthcare-text",
    //   images: ["/grey1.jpg", "/grey2.jpg", "/grey5.jpg", "/grey3.jpg"],
    //   image: "/t3.jpg",
    //   additionalClasses: "object-cover grayscale",
    //   className: "reveal-image h-screen",
    // },
    // {
    //   type: "stats", // Dynamic Stats Slide 2
    //   title: "38,000+ Students",
    //   subtitle: "Empowered with Educational Programs",
    //   content:
    //     "Our educational initiatives have provided learning opportunities to more than 38,000 students, helping them build a brighter future with the resources and support they need.",
    //   titleClass: "uppercase text-8xl font-bold text-white",
    //   subtitleClass:
    //     "uppercase text-green-600 font-light text-4xl mt-5 reveal-healthcare-text",
    //   contentClass: "max-w-222.5 text-xl font-normal reveal-healthcare-text",
    //   images: ["/grey1.jpg", "/grey2.jpg", "/grey5.jpg", "/grey3.jpg"],
    //   image: "/t3.jpg",
    //   additionalClasses: "object-cover grayscale",
    //   className: "reveal-image h-screen",
    // },
    {
      type: "stats", // Dynamic Stats Slide 3
      title: "45,143",
      subtitle: "  Lives Turned into Miracles from Medicines",
      mainTittle: "Free Healthcare to Neighboring Communities",
      pointers: [
        {
          text: "Free Weekly Medical Camps",
          img: "/edu.jpg",
        },
        {
          text: "Free Psychiatric Health Camps",
          img: "/food.jpg",
        },
        {
          text: "Transforming Child Healthcare in Underserved Communities",
          img: "/painting/p3.png",
        },
        {
          text: "Constructing Health, CreatingHope",
          img: "/mar.jpg",
        },
        {
          text: "Blood Donation Drive at IMC",
          img: "/painting/p1.png",
        },
      ],
      content:
        " Access to quality healthcare remains a critical challenge in Pakistan, with millions of people, particularly in underserved communities, lacking timely medical attention and essential services. Recognizing this urgent need, IMC focuses on strengthening healthcare infrastructure, providing medical assistance, and supporting wellness programs to improve the health and well-being of communities. Through its initiatives, IMC ensures that healthcare becomes accessible, reliable, and inclusive, reflecting its commitment to creating lasting social impact under its flagship CSR platform, Concern Beyond Cars.",
      titleClass: "uppercase text-[96px] leading-[90px] font-light text-white",
      subtitleClass:
        "uppercase text-grey-600 font-light text-md mt-2 reveal-healthcare-text",
      contentClass: "max-w-[1550px] text-xl font-light reveal-healthcare-text",
      images: ["/grey1.jpg", "/grey2.jpg", "/grey5.jpg", "/grey3.jpg"],
      image: "/t3.jpg",
      additionalClasses: "object-cover grayscale",
      className: "reveal-image h-screen",
    },
    {
      type: "stats", // Dynamic Stats Slide 3
      title: "154,034",
      subtitle: "Lives Fed with Dignity by IMC",
      mainTittle: "Free Food Distribution",
      pointers: [
        {
          text: "Weekly Food Distribution",
          img: "/3.jpeg",
        },
        {
          text: "Daily Food Distribution",
          img: "/grey1.jpg",
        },
        {
          text: "Food Distribution During Muharram",
          img: "/2.jpeg",
        },
        {
          text: "Ration Distribution During Ramazan",
          img: "/img1.jpeg",
        },
      ],
      content:
        "Food scarcity remains a pressing challenge in Pakistan, where millions of people struggle to secure sufficient nutrition. Rising poverty, inflation, and unemployment have left a significant portion of the population vulnerable, with many families forced to skip meals. Every day, countless individuals go to sleep hungry, highlighting the urgent need for sustainable food assistance and social support programs.",
      titleClass: "uppercase text-[96px] leading-[90px] font-light text-white",
      subtitleClass:
        "uppercase text-grey-600 font-light text-md mt-2 reveal-healthcare-text",
      contentClass: "max-w-[1550px] text-xl font-light reveal-healthcare-text",
      images: ["/grey1.jpg", "/grey2.jpg", "/grey5.jpg", "/grey3.jpg"],
      image: "/food.jpg",
      additionalClasses: "object-cover grayscale",
      className: "reveal-image h-screen",
    },
    {
      type: "stats", // Dynamic Stats Slide 3
      title: "2,269",
      subtitle: "Futures Brightened Through Free Education",
      mainTittle: "Driving Social Impact Through Education",
      pointers: [
        {
          text: "Toyota Goth Education Program (T-GEP)",
          img: "/2.jpeg",
        },
        {
          text: "Nurturing Minds for Generations with The Citizen Foundation (TCF)",
          img: "/1.jpeg",
        },
        {
          text: "Advancing Literacy, Shaping Tomorrow with Development in Literacy (DIL)",
          img: "/grey1.jpg",
        },
        {
          text: "Inclusive Education for Every Child with Deaf Reach School",
          img: "/img1.jpeg",
        },
        {
          text: "Nurturing Talent, Shaping Tomorrow with Habib University",
          img: "/3.jpeg",
        },
        {
          text: "KVTC Graduation Ceremony",
          img: "img2.jpeg",
        },
      ],
      content:
        "Education is a fundamental right of every child, forming the foundation for personal growth, empowerment, and a brighter future. It equips children with the knowledge, skills, and confidence to overcome barriers, break the cycle of poverty, and contribute meaningfully to society. Recognizing this, IMC, through its flagship CSR platform Concern Beyond Cars, focuses on ensuring access to quality education for underserved communities. By supporting schools, scholarships, and inclusive learning programs, IMC not only upholds the right of every child to learn but also nurtures the next generation of informed, capable, and empowered citizens.",
      titleClass: "uppercase text-[96px] leading-[90px] font-light text-white",
      subtitleClass:
        "uppercase text-grey-600 font-light text-md mt-2 reveal-healthcare-text",
      contentClass: "max-w-[1550px] text-xl font-light reveal-healthcare-text",
      images: ["/grey1.jpg", "/grey2.jpg", "/grey5.jpg", "/grey3.jpg"],
      image: "/edu.jpg",
      additionalClasses: "object-cover grayscale",
      className: "reveal-image h-screen",
    },
  ];

  useLayoutEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const scrollContent = scrollContentRef.current;

    let ctx = gsap.context(() => {
      // 1. The Main Horizontal Movement (Still tied to scroll)
      const mainTween = gsap.to(scrollContent, {
        x: () => -(scrollContent.scrollWidth - window.innerWidth + 20),
        ease: "none",
        scrollTrigger: {
          trigger: scrollSection,
          start: "top top",
          end: () => `+=${scrollContent.scrollWidth + 50}`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // 2. Text Reveal (Word by Word) - Triggered on Reveal
      const headings = gsap.utils.toArray(".reveal-text");
      headings.forEach((heading) => {
        const words = heading.querySelectorAll(".word");

        gsap.fromTo(
          words,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1, // Slow the animation by increasing the duration
            stagger: 0.1, // Slightly increased stagger for a more gradual reveal
            ease: "power3.out", // Smooth ease out
            scrollTrigger: {
              trigger: heading,
              containerAnimation: mainTween, // Connects to horizontal path
              start: "left 80%", // Triggers when the left side of the text is 75% into the screen
              toggleActions: "play none none reverse", // Plays once when revealed
            },
          },
        );
      });

      // 3. Additional Text Reveal for "Healthcare" Paragraphs
      const additionalText = gsap.utils.toArray(".reveal-healthcare-text");
      additionalText.forEach((textElement) => {
        gsap.fromTo(
          textElement,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2, // Slightly slower reveal for additional text
            ease: "power3.out",
            scrollTrigger: {
              trigger: textElement,
              containerAnimation: mainTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // 4. Image Reveal with different directions for each image
      const images = gsap.utils.toArray(".reveal-image");
      images.forEach((imgContainer, index) => {
        const direction = [
          "left-to-right",
          "top-to-bottom",
          "right-to-left",
          "bottom-to-top",
        ];

        // Define animation for each image depending on the index (direction)
        let animationProps;
        switch (
          direction[index % direction.length] // Adjusted to cycle through directions
        ) {
          case "left-to-right":
            animationProps = {
              clipPath: "inset(0% 100% 0% 0%)",
              endClip: "inset(0% 0% 0% 0%)",
            };
            break;
          case "top-to-bottom":
            animationProps = {
              clipPath: "inset(100% 0% 0% 0%)",
              endClip: "inset(0% 0% 0% 0%)",
            };
            break;
          case "right-to-left":
            animationProps = {
              clipPath: "inset(0% 0% 0% 100%)",
              endClip: "inset(0% 0% 0% 0%)",
            };
            break;
          case "bottom-to-top":
            animationProps = {
              clipPath: "inset(0% 0% 100% 0%)",
              endClip: "inset(0% 0% 0% 0%)",
            };
            break;
          default:
            animationProps = {
              clipPath: "inset(0% 100% 0% 0%)",
              endClip: "inset(0% 0% 0% 0%)",
            };
        }

        gsap.fromTo(
          imgContainer,
          { clipPath: animationProps.clipPath },
          {
            clipPath: animationProps.endClip,
            duration: 3,
            ease: "expo.out",
            scrollTrigger: {
              trigger: imgContainer,
              containerAnimation: mainTween,
              start: "left 90%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, scrollSectionRef);

    return () => ctx.revert();
  }, []);

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden mr-[0.2em] min-h-[70px]"
      >
        <span className="word inline-block">{word}</span>
      </span>
    ));
  };

  return (
    <section
      className="horizontal-section bg-black overflow-hidden"
      ref={scrollSectionRef}
    >
      <div className="wrapper">
        <div
          className="content inline-block whitespace-nowrap"
          ref={scrollContentRef}
        >
          <div className="flex no-wrap items-center">
            {slidesData.map((slide, index) => {
              switch (slide.type) {
                case "heading":
                  return (
                    <div
                      key={index}
                      className="h-screen flex flex-col justify-between items-start p-20 min-w-[1200px]"
                    >
                      <h2
                        className={`${slide.className} max-w-[1000px] text-wrap`}
                      >
                        {splitWords(slide.text)}
                      </h2>
                      <div className="max-w-[800px] reveal-healthcare-text">
                        <p className="text-lg reveal-text text-wrap">
                          {slide.para}
                        </p>
                      </div>
                    </div>
                  );
                case "image":
                  return (
                    <div
                      key={index}
                      className="h-screen px-20 flex items-center"
                    >
                      <div
                        className={`${slide.className} overflow-hidden w-[1200px] h-screen relative`}
                      >
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          fill
                          className={slide.additionalClasses}
                        />
                      </div>
                    </div>
                  );
                case "stats":
                  return (
                    <div
                      key={index}
                      className=" flex justify-between gap-20 mr-20"
                    >
                      <div className="h-screen relative w-[1200px] overflow-hidden">
                        <Image
                          src={slide.image}
                          alt="stats background"
                          fill
                          className="w-full h-full  object-cover reveal-image"
                          data-link-button
                          data-link-text="View Gallery"
                        />
                      </div>

                      <div className="h-screen min-w-[1300px] flex justify-between flex-col px-10 py-15 reveal-text whitespace-normal">
                        <div className="flex justify-between items-center gap-20">
                          <div>
                            <h2 className="text-6xl font-bold max-w-[900px]  min-h-max">
                              {splitWords(slide.mainTittle)}
                            </h2>
                          </div>
                          <div
                            className={`border-l-2 ${slide.title ? "border-[#EB0A1E]" : "border-none"}  pl-30`}
                          >
                            <h2 className={slide.titleClass}>
                              {splitWords(slide.title)}
                            </h2>
                            <p className={slide.subtitleClass}>
                              {slide.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col justify-between items-start gap-4">
                          {slide.pointers.map((item, index) => (
                            <div
                              key={index}
                              className="flex gap-5 group items-center reveal-healthcare-text cursor-pointer"
                              data-link-image
                              image-url={item.img}
                              data-link-button
                              data-link-text="Read More"
                            >
                              <div className="svg duration-200 group-hover:scale-[1.5]">
                                <svg
                                  width="15"
                                  height="18"
                                  viewBox="0 0 15 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15 8.66016L-8.15666e-07 17.3204L-5.85621e-08 -9.88841e-05L15 8.66016Z"
                                    fill="#D9060A"
                                  />
                                </svg>
                              </div>
                              <h2 className="font-light text-[#A2A2A2] text-2xl leading-8 group-hover:text-white group-hover:underline duration-200">
                                {item.text}
                              </h2>
                            </div>
                          ))}
                        </div>
                        <p className={slide.contentClass}>{slide.content}</p>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            })}

            {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div
              className=" flex justify-between gap-20 mr-20"
              data-link-button
              data-link-text="View Gallery"
            >
              <div className="h-screen relative w-[1200px] overflow-hidden">
                <Image
                  src={"/mar.jpg"}
                  alt="stats background"
                  fill
                  className="w-full h-full  object-cover reveal-image"
                />
              </div>

              <div className="max-w-[120px] h-full flex justify-center items-end">
                <h2 className="text-9xl font-bold uppercase -rotate-90 translate-y-4/5 relative top-70 reveal-text">
                  {splitWords("MARKHOR")}
                </h2>
              </div>

              <div className="h-screen min-w-[1300px] flex justify-between flex-col px-10 py-15 reveal-text whitespace-normal">
                <div className="">
                  <h2
                    className={
                      "uppercase text-[40px] leading-[80px] font-semibold text-white "
                    }
                  >
                    {splitWords("Unleashed Step into Leadership:")}
                  </h2>
                  <p
                    className={
                      "max-w-[1250px] text-xl font-light reveal-healthcare-text -mt-5"
                    }
                  >
                    IMC, in partnership with Youth Impact, hosted the
                    “Unleashed: Step into Leadership” camp on 29–30 May 2025 in
                    Karachi, training 21 young participants (7 boys, 14 girls)
                    in leadership through workshops, challenges, and mentoring.
                    Focused on self-awareness, confidence, and communication,
                    the program shortlisted 10 high-potential individuals for
                    Youth Impact’s advanced leadership track, Markhor,
                    underscoring IMC’s commitment to inclusive youth development
                    in Pakistan.
                  </p>
                </div>

                <div className="">
                  <h2
                    className={
                      "uppercase text-[40px] leading-[80px] font-semibold text-white "
                    }
                  >
                    {splitWords("Youth Leadership Conference")}
                  </h2>
                  <p
                    className={
                      "max-w-[1250px] text-xl font-light reveal-healthcare-text -mt-5"
                    }
                  >
                    Markhor is Pakistan’s first wilderness-based Youth
                    Leadership Club run by the not-for-profit and award-winning
                    brain-child of Abdul Samad Khan, Youth Impact. The Markhor
                    Conference is a five-day all outdoors program held at an
                    off-the-beaten track location, which is pivotal in
                    showcasing the richness of Pakistan, this time by holding
                    the YLC at Paye Meadows, Shogran Valley, KPK. Innovation is
                    central to everything we do at IMC, and likewise, group
                    diversity is Markhor’s unique stamp. Over 78 young kids,
                    from different socio-economic backgrounds, religions, and
                    regions, in their element was a visual treat. The intricate
                    theme was Quest of Zarbe kaleemi. IMC has been an
                    enthusiastic supporter of Markhor since 2014, however, this
                    was the fifth consecutive year the IMC has sponsored
                    students under its flagship Toyota Goth Education Program
                    (T-GEP), run in tandem with The Citizens Foundation,
                    functioning under the Neighboring Community Uplift Program.
                    This year a group of 10 students, 7 of them girls, were part
                    of the program.
                  </p>
                </div>
              </div>
            </div>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className=" flex justify-between gap-20 mr-20">
              <div
                className="h-screen relative w-[1200px] overflow-hidden"
                data-link-button
                data-link-text="View Gallery"
              >
                <Image
                  src={"/val.jpg"}
                  alt="stats background"
                  fill
                  className="w-full h-full  object-cover reveal-image"
                />
              </div>

              <div className="h-screen min-w-[1300px] flex justify-between flex-col px-10 py-15 reveal-text whitespace-normal">
                <div className="flex justify-between items-center gap-20">
                  <div>
                    <h2 className="text-6xl font-bold max-w-[900px] min-h-max">
                      {splitWords("Volunteering Hours")}
                    </h2>
                    <p
                      className={
                        " max-w-[1000px] text-xl font-light reveal-healthcare-text mt-4"
                      }
                    >
                      During the year, employees at all levels,both management
                      and non-management, actively took part in IMC’s social
                      initiatives. To support this, IMC has partnered with
                      various NGOs, providing employees with meaningful
                      opportunities to volunteer their time and contribute to
                      the
                    </p>
                  </div>
                  <div className="border-l-2 border-[#EB0A1E] pl-20">
                    <h2
                      className={
                        "uppercase text-[96px] leading-[90px] font-light text-white"
                      }
                    >
                      {splitWords("45,143")}
                    </h2>
                    <p
                      className={
                        "uppercase text-grey-600 font-light text-md mt-2 reveal-healthcare-text"
                      }
                    >
                      Lives Turned into Miracles from Medicines
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-start gap-6">
                  <p className="max-w-[927px] font-semibold text-[20px] reveal-healthcare-text ">
                    With this vision, IMC has developeda structured volunteering
                    platform designed to create impactful and engaging
                    opportunities. The primary objectives of the program are:
                  </p>
                  <ul className="flex flex-col justify-between items-start gap-3 reveal-healthcare-text">
                    <li className="font-light text-[20px] relative pl-8 before:content-[''] before:absolute before:left-0 before:mt-3 before:w-3 before:h-3 before:bg-red-500 before:rounded-full">
                      <span className="font-bold">Raise awareness</span> of
                      IMC’s social contribution initiatives across the
                      organization.
                    </li>
                    <li className="font-light text-[20px] relative pl-8 before:content-[''] before:absolute before:left-0 before:mt-3 before:w-3 before:h-3 before:bg-red-500 before:rounded-full">
                      <span className="font-bold">Inspire employees</span> to
                      give back to communities by providing accessible and
                      impactful engagement opportunities.
                    </li>
                    <li className="font-light text-[20px] relative pl-8 before:content-[''] before:absolute before:left-0 before:mt-3 before:w-3 before:h-3 before:bg-red-500 before:rounded-full">
                      <span className="font-bold">
                        Foster meaningfulemployee participation{" "}
                      </span>{" "}
                      that creates a sense of purpose and connection.
                    </li>
                    <li className="font-light text-[20px] relative pl-8 before:content-[''] before:absolute before:left-0 before:mt-3 before:w-3 before:h-3 before:bg-red-500 before:rounded-full">
                      <span className="font-bold">
                        Enhance transparencyand communication
                      </span>{" "}
                      around IMC’s social impact efforts.
                    </li>
                    <li className="font-light text-[20px] relative pl-8 before:content-[''] before:absolute before:left-0 before:mt-3 before:w-3 before:h-3 before:bg-red-500 before:rounded-full">
                      <span className="font-bold">
                        StrengthenIMC’s brand image
                      </span>{" "}
                      as a responsible and socially committed corporate entity.
                    </li>
                  </ul>
                </div>
                <p
                  className={
                    "max-w-[1250px] text-xl font-light reveal-healthcare-text"
                  }
                >
                  During the year, employees at all levels,both management and
                  non-management, actively took part in IMC’s social
                  initiatives. To support this, IMC has partnered with various
                  NGOs, providing employees with meaningful opportunities to
                  volunteer their time and contribute to the
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
