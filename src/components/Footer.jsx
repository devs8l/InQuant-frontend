import React from "react";

const Footer = () => {
  return (
    <footer
  className="text-white py-16 px-6 md:px-12 lg:px-24 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/bg-footer.gif')" }} 
>
  <div className="max-w-7xl mx-auto space-y-12">
    {/* Top Section */}
    <div className="flex flex-col justify-between gap-12">
      {/* Large Heading */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-6xl font-alliance font-normal leading-tight">
          Reimagining Banking <br /> with Intelligence.
        </h2>
      </div>

      {/* Links */}
      <div className="flex gap-16 text-sm">
        <div>
          <h4 className="uppercase font-semibold text-gray-300 mb-3">
            Important Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="uppercase font-semibold text-gray-300 mb-3">Other</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/privacy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white">
                Terms and Condition
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="text-center text-xs text-gray-500">
      COPYRIGHT ©2025 | INQUANTIC TECHNOLOGIES PRIVATE LIMITED. ALL RIGHTS RESERVED
    </div>
  </div>
</footer>
  );
};

export default Footer;
