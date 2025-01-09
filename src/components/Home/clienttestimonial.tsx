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
    name: "Mayank Kumar",
    role: "Senior Blockchain Developer",
    image: "/mayank.png",
    text: "A Senior Developer, excels in blockchain technology, crafting secure and scalable decentralized solutions.",
  },
  // {
  //   name: "Shailaya Raj",
  //   role: "Fullstack Developer",
  //   image: "/",
  //   text: "Amazing experience! The designs were not only visually stunning but also user-friendly and functional.",
  // },
  {
    name: "Adarsh Kumar",
    role: "Blockchain Developer",
    image: "/adarsh.png",
    text: "A Blockchain Developer with a growing expertise in building decentralized applications and smart contracts.",
  },
  {
    name: "Sneha Chouhan",
    role: "UX Designer",
    image: "/sneha.png",
    text: "A UX designer focuses on creating intuitive and engaging user experiences by researching, designing, and testing digital interfaces.",
  },
  {
    name: "Mital Gohil",
    role: "Developer",
    image: "/mital.png",
    text: "A software developer designs, codes, tests, and maintains software applications to meet user needs and ensure functionality across various platforms.",
  },
  {
    name: "Dhara Gohil",
    role: "Accountant",
    image: "/dhara.png",
    text: "An accountant manages financial records, prepares reports, ensures compliance with regulations, and provides insights to support business decision-making.",
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
        Team Testimonials
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
            <div className="bg-gray-700 rounded-xl p-8 shadow-lg w-[200px]  h-[220px]">
            {/* <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4 mx-auto"> */}
  <img
    src={currentTestimonial.image}
    alt={currentTestimonial.name}
    className="w-full h-full md:-mt-8 object-cover"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensure the image is not distorted.
    }}
  />
{/* </div> */}

              <h3 className="text-md text-white font-bold text-center md:-mt-4 lg:text-left">
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
