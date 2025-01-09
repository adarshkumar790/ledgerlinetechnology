import Image from "next/image";
import React, { useState } from "react";

const CompanyPartners: React.FC = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(0);

  // Array of logos
  const logos = [
    { src: "/partner1.png", alt: "CodeExceptional 1", width: 120, height: 100 },
    { src: "/partner2.png", alt: "CodeExceptional 2", width: 120, height: 100 },
    { src: "/partner3.png", alt: "CodeExceptional 3", width: 120, height: 100 },
    // { src: "/co4.png", alt: "CodeExceptional 4", width: 120, height: 100 },
    // { src: "/co5.png", alt: "CodeExceptional 5", width: 120, height: 100 },
  ];

  // Items per page for mobile view
  const itemsPerPage = 2; // Two logos per page for mobile
  const totalPages = Math.ceil(logos.length / itemsPerPage);

  // Handler for moving to the next page
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  // Handler for moving to the previous page
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Determine the logos to display on the current page
  const startIndex = currentPage * itemsPerPage;
  const visibleLogos = logos.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center md:text-4xl text-3xl text-white font-bold mb-3">
        Company Partners
      </h2>
      <div className="w-20 h-1 bg-gray-500 mx-auto mb-8"></div>
      <div className="bg-[#D9D9D9] px-6 py-4 rounded-md mx-auto max-w-5xl">
        {/* Desktop Design */}
        <div className="hidden lg:flex items-center justify-between space-x-4">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={130}
              className="rounded-xl md:mt-12"
            />
          ))}
        </div>

        {/* Mobile/Responsive Design */}
        <div className="lg:hidden flex flex-col items-center space-y-4">
          {/* Left Navigation Arrow */}
          <button onClick={prevPage} className="flex-shrink-0 mb-4">
            <div className="w-8 h-8 bg-[#717171] rounded-full flex items-center justify-center">
              <span className="text-white">&lt;</span>
            </div>
          </button>

          {/* Logos (Paginated, 2 logos per page) */}
          <div className="flex justify-center space-x-4">
            {visibleLogos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full h-[100px] sm:h-[120px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={100}
                  className="rounded-xl object-contain"
                />
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button onClick={nextPage} className="flex-shrink-0 mt-4">
            <div className="w-8 h-8 bg-[#717171] rounded-full flex items-center justify-center">
              <span className="text-white">&gt;</span>
            </div>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-6 mb-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 ${
                index === currentPage ? "bg-white" : "bg-[#717171]"
              } rounded-full`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPartners;
