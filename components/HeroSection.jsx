const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute h-screen w-full aspect-video z-10">
        <video
          src={"https://saadurrehman.com/reel.mp4"}
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* <div className="absolute w-full h-full bg-black/40 z-15"></div> */}
      {/* <div className=" mx-auto p-12.5 h-screen z-20 relative pt-35">
        <div className=" max-w-10/12 w-full h-full flex flex-col items-start justify-end">
          <h1 className="text-8xl text-white font-toyota font-black uppercase">
            Toyota&apos;s 2024-25 Investment in Communities and Sustainability
          </h1>
          <p className="mt-6 text-2xl font-semibold text-white max-w-[800px]">
            Discover the perfect blend of performance, style, and innovation in
            our newest car. Engineered for those who crave excitement, our
            latest model delivers an unparalleled driving experience that will
            leave you breathless.
          </p>
          <div className="mt-15 flex gap-6">
            <button className="rounded-sm cursor-pointer bg-white px-10 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[#EB0A1E] hover:text-white duration-300 curos">
              Explore Now
            </button>
            <button className="rounded-sm border cursor-pointer border-white px-10 py-3 text-sm font-semibold text-white hover:bg-[#EB0A1E] hover:text-white hover:border-[#EB0A1E] duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
