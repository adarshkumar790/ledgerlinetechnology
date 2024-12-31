"use client";
import React, { useState } from "react";
import Image from "next/image";

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

const Category: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen flex flex-col text-white">
      {/* Categories */}
      <div className="grid grid-cols-3 md:flex justify-center items-center md:space-x-6 overflow-x-auto scrollbar-hide px-4 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center justify-center text-xl whitespace-nowrap md:text-2xl font-bold ${
              selectedCategory === category
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
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

            {/* Hover Overlay */}
            <div
              className={`absolute inset-0 ${project.bgClass} opacity-0 group-hover:opacity-60 transition-opacity`}
            />

            {/* Hover Buttons */}
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

      {/* Footer Spacer */}
      <div className="h-16 md:h-24" />
    </div>
  );
};

export default Category;
