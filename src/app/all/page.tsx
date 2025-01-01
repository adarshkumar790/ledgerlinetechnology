"use client";
import React, { useState } from "react";

const NavigationBar: React.FC = () => {
  const [selected, setSelected] = useState(0); // State to track selected option

  const options = [
    "All",
    "Crypto Wallet",
    "Exchange",
    "NFTs",
    "Dapp",
    "DeFi",
  ];

  return (
    <div className="bg-black text-white py-4  relative">
      {/* Line connecting the circles */}
      <div className="absolute top-[33%] left-0 z-10 right-0 w-[60%] ml-64 h-[2px] bg-gray-400 transform -translate-y-1/2"></div>

      <div className="relative flex items-center justify-center space-x-20">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelected(index)}
          >
            {/* Circle */}
            <div
              className={`w-6 h-6 border-2 rounded-full flex items-center justify-center relative ${
                selected === index
                  ? "border-white bg-white"
                  : "border-gray-400 bg-black"
              }`}
            >
              {/* Dot in the center */}
              <div
                className={`w-2 h-2 rounded-full ${
                  selected === index ? "bg-black" : "bg-gray-400"
                }`}
              ></div>
            </div>
            {/* Label */}
            <span
              className={`mt-2 text-sm ${
                selected === index ? "text-white font-bold" : "text-gray-400"
              }`}
            >
              {option}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
