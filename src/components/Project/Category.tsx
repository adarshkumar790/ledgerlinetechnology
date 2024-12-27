"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiShare2, FiInfo } from "react-icons/fi";

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
    <div className="bg-black min-h-screen text-white">
      
      <div className="flex justify-center items-center mt-6 space-x-6 overflow-x-auto scrollbar-hide px-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)} 
            className={`flex items-center justify-center text-xl whitespace-nowrap ${
              selectedCategory === category
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4 max-w-3xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-lg group"
          >
            
            <Image
              src={project.imgSrc}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover w-full h-80"
            />

            
            <div
              className={`absolute inset-0 ${project.bgClass} opacity-0 group-hover:opacity-60 transition-opacity`}
            />

            
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

            
            <div className="absolute inset-x-0 bottom-0 p-2 bg-opacity-90 bg-blue-700">
              <h3 className="text-center text-lg font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
