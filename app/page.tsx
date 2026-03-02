import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HorizentalScroll from "@/components/HorizentalScroll";
import GalleryWithContent from "@/components/GalleryWithContent";
// import RotatingWheel from "@/components/RotatingWheel";
import CarComingBottomSection from "@/components/CarComingBottomSection";
import ScrollingGalleryWithContent from "@/components/ScrollingGalleryWithContent";
// import ScrollingVideoSection from "@/components/ScrollingVideoSection";
// import CounterTwo from "@/components/counterTwo";
import Heading from "@/components/heading";
import CounterWithBackground from "@/components/CounterWithBackground";
import TimelineSection from "@/components/TimelineSection";
import ImageAndTextReveal from "@/components/ImageAndTextReveal";
import Footer from "@/components/footer";
import ScrollMarquee from "@/components/ScrollMarquee";
import Marqueesection from "@/components/Marqueesection";
import Sports from "@/components/Sports";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Heading text="Measuring the || PKR 231 Million Invested in Pakistan’s Future" />
      <CounterWithBackground />
      <AboutSection text="The 2050 Challenge: Six Strategic Pillars for Building a Sustainable, Resilient, and Future-Ready World" />
      <TimelineSection />
      <HorizentalScroll />
      {/* <Heading text="Measuring the PKR 231 Million Invested in Pakistan’s Future" /> */}
      <ImageAndTextReveal />
      {/* <Heading text="Measuring the PKR 231 Million Invested in Pakistan’s Future" />
      {/* <GalleryWithContent /> */}
      {/* <AboutSection text="Visions of a Better Tomorrow: How 25,324 Young Artists are Redefining the Future of Mobility to Produce Happiness for All through the Power of Inclusive Creativity" /> */}
      {/* <ScrollMarquee /> */}
      <Heading text="25,324 Artists Reimagining the Future of Mobility" />
      <Marqueesection />
      <Sports />
      <Heading text="Driving Change, Saving Lives: Toyota Road Safety Awareness" />
      <CarComingBottomSection />
      {/* <ScrollingGalleryWithContent /> */}
    </>
  );
}
