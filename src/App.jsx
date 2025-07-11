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
            style={{
              backgroundImage: "url('/images/inquanitc-bg.gif')", 
            }}
          />

          {/* Top Nav */}
          <div className="absolute top-4 left-6 right-6 z-10 flex justify-between items-center mb-10">
            <div className="flex gap-8 text-sm tracking-wide uppercase font-alliance">
              <a href="/" className="hover:text-gray-400 cursor-pointer">Home</a>
              <a href="/" className="hover:text-gray-400 cursor-pointer">About</a>
              <a href="/" className="hover:text-gray-400 cursor-pointer">Services</a>
              <a href="/" className="hover:text-gray-400 cursor-pointer">Values</a>
              
            </div>
            <a
              href="#contact"
              className="bg-white text-black px-5 py-2 text-sm font-semibold rounded-full hover:bg-gray-200 transition font-alliance"
            >
              Contact Us ↗
            </a>
          </div>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center px-6">
            <h1 className="font-alliance text-[20rem] leading-none  tracking-tight font-regular">InQuant</h1>
          </div>

          {/* Right Section Text */}
          <div className="absolute  p-5 right-0 top-15 uppercase font-alliance w-72 text-right text-sm leading-relaxed z-10">
            <p className="text-gray-400 text-xs">
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
