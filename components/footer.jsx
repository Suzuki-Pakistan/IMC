import Image from "next/image";
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    // <div
    //   className="

    // // bg-[#EB0A1E]
    // bg-black
    // text-white px-12.5 pt-25"
    // >
    //   <div className="flex gap-5 justify-between items-end px-12.5">
    //     <div className="max-w-2xs">
    //       <h2 className="text-8xl  uppercase font-semibold ">
    //         Corporate Social Responsibility
    //       </h2>
    //     </div>
    //     <p className=" max-w-[620px] font-light text-xl">
    //       At Indus Motor Company, sustainability is not a side initiative. it is
    //       central to our purpose and progress. For 35 years, we have combined
    //       innovation with responsibility, ensuring that our growth delivers
    //       shared value for society
    //     </p>
    //   </div>
    //   <div className="flex justify-between items-end gap-12.5 mt-30 px-12.5">
    //     <div className="logo-footer max-w-[480px] overflow-hidden">
    //       <Image
    //         src="/footer-logo2.png"
    //         alt="alt"
    //         height={150}
    //         width={480}
    //         className="w-full h-full"
    //       />
    //     </div>
    //     <ul className="flex justify-between items-center gap-5">
    //       <li className="text-xl uppercase font-light">Home</li>
    //       <li className="text-xl">ABOUT</li>
    //       <li className="text-xl">PORTFOLIO</li>
    //       <li className="text-xl">BLOGS</li>
    //       <li className="text-xl">CONTACT</li>
    //     </ul>
    //   </div>
    //   <div className="py-8 border-t border-white/50 mt-12.5">
    //     <div className="flex justify-between items-center gap-25 px-12.5">
    //       <p className="text-sm capitalize">
    //         Copyright © Toyota All rights reserved
    //       </p>
    //       <div className="flex justify-between items-center gap-3">
    //         <a
    //           href="#"
    //           className="h-10 w-10 bg-white text-black rounded-full flex justify-center items-center text-xl duration-300 hover:bg-[#EB0A1E] hover:text-white"
    //         >
    //           <FaFacebookF />
    //         </a>
    //         <a
    //           href="#"
    //           className="h-10 w-10 bg-white text-black rounded-full flex justify-center items-center text-xl duration-300 hover:bg-[#EB0A1E] hover:text-white"
    //         >
    //           <FaLinkedinIn />
    //         </a>
    //         <a
    //           href="#"
    //           className="h-10 w-10 bg-white text-black rounded-full flex justify-center items-center text-xl duration-300 hover:bg-[#EB0A1E] hover:text-white"
    //         >
    //           <FaXTwitter />
    //         </a>
    //         <a
    //           href="#"
    //           className="h-10 w-10 bg-white text-black rounded-full flex justify-center items-center text-xl duration-300 hover:bg-[#EB0A1E] hover:text-white"
    //         >
    //           <FaInstagram />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-black pt-25 px-12.5">
      <div className="flex justify-between items-end gap-12.5">
        <div className="footer-logo">
          <Image
            src="/footer-logo2.png"
            alt="alt"
            width={350}
            height={150}
            className="w-full h-auto"
          />
        </div>
        {/* <div className="max-w-[400px] w-full">
          <h2 className="text-3xl font-semibold">Newsletter</h2>
          <div className="flex no-wrap gap-4 items-center p-2  rounded-lg mt-3 bg-white text-black">
            <input
              type="text"
              id="id"
              name="name"
              placeholder="Enter Your Email"
              className="border w-full rounded-lg border-none outline-none ml-2	bg-transparent"
            />
            <button className="h-[40px] w-[50px] rounded-md bg-black text-white text-xl flex justify-center items-center cursor-pointer duration-300 hover:bg-[#EB0A1E]">
              <IoIosArrowForward />
            </button>
          </div>
        </div> */}
      </div>

      <div className="mt-12.5 pt-30 border-t border-white/40">
        <div className="flex justify-between gap-12.5 items-end">
          <div className="">
            <div className="w-[350px]">
              <Image
                src="/move.png"
                alt="alt"
                width={350}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <div className="mt-[80px] flex justify-between items-start gap-25">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold uppercase">showroom</h3>
                <h3 className="text-lg font-semibold uppercase">
                  SUVs & Pickups
                </h3>
                <h3 className="text-lg font-semibold uppercase">
                  Buses & Vans
                </h3>
                <h3 className="text-lg font-semibold uppercase">
                  gazoo racing
                </h3>
                {/* <div className="mt-4 flex flex-col gap-1 items-start">
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Corolla X
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Yaris
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Camry Hybrid
                  </a>
                </div> */}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold uppercase">AFTER SALES</h3>
                <h3 className="text-lg font-semibold uppercase">
                  Sustainability
                </h3>
                <h3 className="text-lg font-semibold uppercase">toyota sure</h3>
                <h3 className="text-lg font-semibold uppercase">
                  Toyota Smart Purchase
                </h3>
                {/* <div className="mt-4 flex flex-col gap-1 items-start">
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Toyota 5S Program
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Education
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Environment
                  </a>
                </div> */}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold uppercase">Corporate</h3>
                <h3 className="text-lg font-semibold uppercase">Careers</h3>
                <h3 className="text-lg font-semibold uppercase">
                  START YOUR IMPOSSIBLE
                </h3>
                <h3 className="text-lg font-semibold uppercase">EVENTS</h3>
                {/* <div className="mt-4 flex flex-col gap-1 items-start">
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Toyota Bot
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Hybrid Technology
                  </a>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white cursor-pointer duration-150 font-light"
                  >
                    Motorsports in Pakistan
                  </a>
                </div> */}
              </div>
            </div>
            <div className="mt-[80px] py-5">
              <p className="text-md">Copyright © Toyota All rights reserved</p>
            </div>
          </div>

          <div className="max-w-[700px] w-full h-full rounded-t-full overflow-hidden">
            <Image
              src="/grey4.jpg"
              alt="alt"
              width={1000}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
