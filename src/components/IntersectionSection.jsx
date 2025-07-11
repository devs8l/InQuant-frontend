import React from 'react';

const IntersectionSection = () => {
  return (
    <section className="bg-black text-white px-8 md:px-16 lg:px-20 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Left Sidebar Text */}
        <div className="w-full lg:w-1/4">
          <h2 className="font-alliance text-xs sm:text-sm uppercase text-gray-400 font-semibold leading-tight mb-2 sm:mb-4">
            INQUANT <br />
            SERVICES WING
          </h2>
        </div>

        {/* Middle Main Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-alliance text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-6 sm:mb-10">
            Built at the Intersection of <br />
            Quant, Code & Cloud.
          </h2>
          <p className="font-alliance uppercase text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-10">
            InQuant is a fintech innovation company focused on transforming the banking experience
            through quantitative intelligence and cloud engineering. Founded by a team with deep
            expertise in AI, cloud computing, and banking infrastructure, we look to shift the complex
            pieces banks face today — from legacy system modernization to predictive financial models.
            <br /><br />
            With a sharp focus on performance, compliance, and customer experience, our goal is to help
            banks operate smarter, faster, and more securely in a digital-first world.
          </p>

          <a href="#contact">
            <button className="bg-white text-black px-6 py-2 text-sm font-semibold rounded-full hover:bg-gray-200 transition">
              Explore →
            </button>
          </a>
        </div>

        {/* Right Image/Visual */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-56 sm:h-64 md:h-72 lg:h-80 rounded-3xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg">
            <img
              src="/images/inquant-hero.gif"
              alt="Visual"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntersectionSection;
