import React from "react";

const features = [
  {
    title: "Core Banking Modernization",
    description:
      "Modernize your legacy systems with a modular, microservices architecture. Automate the loan lifecycle, streamline KYC, and unify customer data through Customer 360. Enable secure, real-time payments using ISO 20022 standards, all while improving agility, compliance, and operational efficiency across your core banking infrastructure.",
  },
  {
    title: "Risk & Treasury Intelligence",
    description:
      "Equip your bank with predictive risk controls and treasury insights. Leverage AI-driven risk modeling, simulate market stress scenarios, and maintain liquidity with real-time forecasting. Our compliance-ready dashboards help you meet global regulatory standards, making your bank more resilient, agile, and audit-ready.",
  },
  {
    title: "AI-Powered Financial Tools",
    description:
      "Drive intelligent decision-making through powerful AI models. Predict credit defaults with precision, understand customer behavior using analytics, and provide automated financial advice tailored to each profile. Turn raw data into personalized experiences, increasing customer engagement, reducing risk, and unlocking new revenue streams.",
  },
  {
    title: "Secure & Scalable Architecture",
    description:
      "Build a secure, cloud-native foundation for digital banking. Our architecture ensures high availability, disaster recovery, and seamless cloud migration. Interoperate easily with fintechs and external systems through secure APIs. Designed for scalability, compliance, and speed — so you can innovate without worrying about infrastructure.",
  },
];

const BankingFeatureSection = () => {
  return (
    <section className="bg-black text-white py-20 px-8 md:px-16 lg:px-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 xl:gap-20 w-full items-start relative">
        
        {/* Left Column (Text Content and Title) */}
        <div className="flex flex-col lg:flex-row lg:w-3/5 gap-16 xl:gap-24">
          
          {/* Title Area */}
          <div className="lg:w-1/4 flex items-center">
            <p className="font-alliance text-sm uppercase text-gray-400 tracking-wider">
              The InQuant Space
            </p>
          </div>
          
          {/* Features List */}
          <div className="lg:w-3/4 space-y-12 md:space-y-16">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-2xl font-alliance font-normal mb-3 tracking-wide leading-snug">{feature.title}</h3>
                <p className="text-sm font-alliance uppercase text-gray-300 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="lg:w-2/5 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          {/* The image in the provided image appears to be slightly cropped and focused on the center/right area of the chip, giving it a stylized look. */}
          <div className="relative w-full max-w-[400px] aspect-[10/9] lg:aspect-[3/4] overflow-hidden rounded-3xl">
            <img
              src="/images/chip.jpg"
              alt="Gold Circuit Chip"
              className="absolute inset-0 object-cover w-full h-full object-center lg:object-right-bottom rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankingFeatureSection;