"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Dipak Patel",
    role: "UI/UX Designer",
    image: "/cl1.jpeg",
    text: "Exceptional UI design that blends creativity with functionality, enhancing user experiences seamlessly! A perfect balance of aesthetics and usability—UI design that truly stands out.",
  },
  {
    name: "Rishabh Yadav",
    role: "",
    image: "/cl2.jpeg",
    text: "The team provided exceptional design solutions that elevated our product's usability. Their attention to detail and creativity is unmatched!",
  },
  {
    name: "Mayank Sir",
    role: "Senior Blockchain Developer",
    image: "/cl3.jpeg",
    text: "Amazing experience! The designs were not only visually stunning but also user-friendly and functional.",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-black text-white py-12 px-6">
      <h2 className="text-center md:text-4xl text-3xl text-white font-bold">
        Client Testimonials
      </h2>
      <div className="w-20 h-1 bg-gray-500 mx-auto"></div>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 max-w-5xl mx-auto relative mt-20">
        {/* Left Navigation Arrow */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md z-10 lg:mr-10"
        >
          <FaArrowLeft />
        </button>

        {/* Testimonial Content */}
        <div
          className="bg-white text-black p-10 shadow-lg max-w-full lg:max-w-3xl h-auto lg:h-80 relative flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6"
        >
          {/* User Information */}
          <div className="w-full lg:w-auto flex justify-center lg:block">
            <div className="bg-gray-700 rounded-xl p-6 shadow-lg w-[200px] h-[220px]">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 mx-auto">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md text-white font-bold text-center lg:text-left">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm text-white text-center lg:text-left mt-1">
                {currentTestimonial.role || "Role Not Provided"}
              </p>
            </div>
          </div>

          {/* Testimonial Text */}
          <p className="text-sm sm:text-lg font-light italic text-center lg:text-left">
            <span className="text-2xl sm:text-3xl font-serif">"</span>
            <span className="text-black ml-2">{currentTestimonial.text}</span>
            <span className="text-2xl sm:text-3xl font-serif">"</span>
          </p>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-4 absolute bottom-4 lg:bottom-[-40px] w-full">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={handleNext}
          className="w-10 h-10 text-black bg-white rounded-full flex items-center justify-center shadow-md z-10 lg:ml-40"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
