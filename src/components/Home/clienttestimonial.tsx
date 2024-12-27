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
    name: "Rishav Yadav",
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
      <h2 className="text-center text-4xl text-white font-bold">
        Client Testimonials
      </h2>
      <div className="w-20 h-1 bg-gray-500 mx-auto"></div>
      <div className="flex justify-center items-center space-x-6 max-w-5xl mx-auto relative mt-20">
      
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center mr-10 shadow-md z-10"
        >
          <FaArrowLeft />
        </button>

        
        <div
          className="bg-[#FFFFFF] text-black p-10 shadow-lg max-w-3xl h-80 relative flex flex-col items-center justify-center"
        >
          <div className="absolute top-[-30px] left-[-40px] z-5 w-[220px] h-[220px] flex flex-col items-center">
            
            <div className="bg-[#717171] rounded-xl p-6 flex flex-col items-center w-[200px] h-[220px] text-left shadow-lg">
              <div
                className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FFFFFF] shadow-[0_4px_10px_rgba(255,255,255,1)] mb-4"
              >
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md text-white font-bold text-center">
                {currentTestimonial.name}
              </h3>
              <p className="text-white text-sm text-center mt-1">
                {currentTestimonial.role || "Role Not Provided"}
              </p>
            </div>
          </div>

          
          <p className="text-lg font-light italic  text-left pl-40">
  <span className="text-3xl font-serif">"</span>
  <span className="text-[#000000] ml-4">{currentTestimonial.text}</span>
  <span className="text-3xl font-serif">"</span>
</p>


        
          <div className="flex justify-center space-x-2 mt-4 absolute bottom-4 w-full">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-[#83868A]" : "bg-[#83868A]"
                }`}
              ></div>
            ))}
          </div>
        </div>

    
        <button
          onClick={handleNext}
          className="w-10 h-10 text-black bg-white rounded-full flex items-center justify-center shadow-md z-10 ml-40"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
