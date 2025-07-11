import React from "react";

const DNASection = () => {
  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Left small label */}
        <div className="lg:w-1/4">
          <p className="text-sm uppercase text-gray-400 tracking-widest">It's in our DNA</p>
        </div>

        {/* Right Content */}
        <div className="lg:w-3/4 space-y-6">
          <h2 className="text-4xl md:text-6xl font-normal font-alliance leading-tight tracking-tight">
            Smarter core systems and real-
            <br/>
            time decision engines define 
            <br/>the future of banking.
          </h2>

          <p className="text-gray-400 max-w-xl font-alliance uppercase text-sm md:text-base">
            Our goal is to help banks operate smarter, faster, and more securely in a digital-first world.
          </p>

          <a href="#contact">
            <button className="bg-white text-black px-6 py-2 md:px-8 md:py-3 text-sm md:text-base font-medium rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg">
              Contact
              <span className="text-xl font-light">↗</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DNASection;
