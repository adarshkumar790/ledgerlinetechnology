"use client";
import React, { useState } from "react";
import Image from "next/image";

// Categories and Projects Data
const categories = ["All", "Crypto Wallet", "Exchange", "NFTs", "Dapp", "DeFi"];

const projects = [
  {
    title: "Wyscale",
    imgSrc: "/ca1.png",
    category: "Crypto Wallet",
    bgClass: "bg-blue-600",
  },
  {
    title: "Wyscale Swapping",
    imgSrc: "/ca2.png",
    category: "Dapp",
    bgClass: "bg-blue-600",
  },
  {
    title: "Rabbit Box",
    imgSrc: "/ca3.png",
    category: "NFTs",
    bgClass: "bg-blue-600",
  },
];

// Main Component
const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Default to "All" category

  // Filter projects based on selected category
  const filteredProjects =
    categories[selectedCategory] === "All"
      ? projects
      : projects.filter(
          (project) => project.category === categories[selectedCategory]
        );

  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      {/* Navigation Bar for Categories */}
      <div className="relative py-6 md:ml-4">
        {/* Line connecting the circles */}
        <div className="absolute md:top-[25%] z-10 md:left-0 md:right-0 md:w-[66%] md:ml-56 md:h-[2px] md:bg-[#83868A] md:transform md:-translate-y-1/2 hidden md:block"></div>

        {/* Responsive vertical line adjustment */}
        <div className="absolute md:hidden left-36 top-0 bottom-0 w-[2px] bg-[#83868A]"></div>

        {/* Vertical layout for mobile, horizontal for desktop */}
        <div className="flex md:flex-row flex-col ml-32 md:ml-2 md:-mt-4 items-start md:items-center justify-start md:justify-center space-y-6 md:space-y-0 md:space-x-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer space-x-4 md:space-x-0 md:flex-col"
              onClick={() => setSelectedCategory(index)}
            >
              {/* Circle */}
              <div
                className={`md:w-6 md:h-6 w-8 h-8 border-2 rounded-full flex items-center justify-center relative ${
                  selectedCategory === index
                    ? "border-[#FFFFFF] bg-black"
                    : "border-[#83868A] bg-black"
                }`}
              >
                {/* Dot in the center */}
                <div
                  className={`w-2 h-2 rounded-full ${
                    selectedCategory === index ? "bg-[#FFFFFF]" : "bg-[#83868A]"
                  }`}
                ></div>
              </div>
              {/* Label */}
              <span
                className={`text-center ${
                  selectedCategory === index
                    ? "text-[#FFFFFF] font-bold"
                    : "text-[#83868A]"
                }`}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 w-[85%] md:max-w-3xl mx-auto flex-grow">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-lg group"
          >
            {/* Project Image */}
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover w-full h-80"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 ${project.bgClass} opacity-0 group-hover:opacity-60 transition-opacity`}
            />

            {/* Hover Actions */}
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center space-x-6">
                <button className="bg-white text-black text-sm p-2 rounded-full shadow-lg">
                  <Image src="/copy.png" alt="Share" width={20} height={20} />
                </button>
                <button className="bg-white text-black text-sm p-2 rounded-full shadow-lg">
                  <Image src="/max.png" alt="Details" width={20} height={20} />
                </button>
              </div>
            </div>

            {/* Project Title */}
            <div className="absolute inset-x-0 bottom-0 p-2 bg-opacity-90 bg-blue-700">
              <h3 className="text-center text-lg font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="h-16 md:h-64" />
    </div>
  );
};

export default Category;
