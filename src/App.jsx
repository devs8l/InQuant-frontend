import React from "react";
import IntersectionSection from "./components/IntersectionSection";
import BankingFeatureSection from "./components/BankingFeatureSection";
import DNASection from "./components/DNASection";
import JourneySection from "./components/JourneySection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black text-white">
  {/* Background Overlay */}
  <div
    className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: "url('/images/inquanitc-bg.gif')" }}
  />

  {/* Top Nav */}
  <div className="absolute top-4 left-4 right-4 z-10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-xs sm:text-sm tracking-wide uppercase font-alliance">
      <a href="/" className="hover:text-gray-400 cursor-pointer">Home</a>
      <a href="/" className="hover:text-gray-400 cursor-pointer">About</a>
      <a href="/" className="hover:text-gray-400 cursor-pointer">Services</a>
      <a href="/" className="hover:text-gray-400 cursor-pointer">Values</a>
    </div>
    <a
      href="#contact"
      className="bg-white text-black px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full hover:bg-gray-200 transition font-alliance"
    >
      Contact Us ↗
    </a>
  </div>

  {/* Center Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-4 sm:px-6">
    <h1 className="font-alliance text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[18rem] 2xl:text-[20rem] leading-none tracking-tight font-regular">
      InQuant
    </h1>
  </div>

  {/* Right Section Text */}
  <div className="absolute bottom-6 md:top-20 right-4 md:right-6 max-w-xs w-[90%] md:w-72 text-right text-xs sm:text-sm leading-relaxed z-10 font-alliance uppercase">
    <p className="text-gray-400">
      At InQuant AI, we blend deep financial domain knowledge with cutting-edge technology to build robust, scalable solutions for modern banks.
    </p>
  </div>
</div>

      <div className="bg-black text-white min-h-screen">
        <IntersectionSection />
        <div className="h-px bg-gray-800 opacity-30 my-10"></div>
        <BankingFeatureSection />
        <div className="h-px bg-gray-800 opacity-30 my-10"></div>
        <DNASection />
      </div>
      <main className="bg-[#0F0F0F] text-white">
        <JourneySection />
      </main>
      <main className="bg-black text-white">
        <ContactForm />
         <Footer />
      </main>
    </>
      );
}

export default App;
