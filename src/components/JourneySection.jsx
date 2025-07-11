import React from "react";

const JourneySection = () => {
  return (
    <section className="bg-[#0F0F0F] text-white px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/images/red-chip.jpg" // Place this image in public/images/
            alt="Circuit Board"
            className="rounded-3xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-normal font-alliance mb-10">
            Journey with <span className="font-light">InQuant</span>
          </h2>

          <h4 className="uppercase font-alliance  text-xs text-gray-300 font-normal mb-10">
            Deep banking expertise. Cloud-native thinking. Built for scale.
          </h4>

          <p className="text-sm font-alliance uppercase text-gray-400 leading-relaxed mb-6">
            At InQuant AI, our strength lies in the intersection of domain mastery and
            cutting-edge technology. Our founding team brings decades of experience from
            some of the world’s largest and most sophisticated banks — including <strong>Deutsche Bank</strong>, <strong>J.P. Morgan</strong>, and <strong>Bank of America</strong>.
            We’ve sat inside global trading desks, compliance war rooms, and digital transformation teams — we know banking inside-out.
            <br /><br />
            We are proud to be technology partners with Google Cloud, Microsoft Azure, and AWS,
            ensuring every solution we deliver is secure, scalable, and cloud-ready from day one.
            <br /><br />
            Join us on the journey to modernize your bank — and create seamless, intelligent,
            and future-proof experiences for your customers.
          </p>

          <a href="#contact">
              <button className="bg-white text-black px-6 py-2 text-sm font-medium rounded-full hover:bg-gray-200 transition flex items-center gap-2 shadow-md">
            Contact <span className="text-xl font-light">↗</span>
          </button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
