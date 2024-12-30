"use client";

import Image from "next/image";
import React from "react";

const AboutLedgerline: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white -mt-20 md:-mt-20 ">
      <div className="container mx-auto p-8 max-w-5xl">
        <h1 className="text-center md:mt-24 mt-20 ">
          <span className="text-[#FFFFFF] md:text-4xl text-2xl flex flex-start font-semibold  md:font-bold">About Ledgerline:</span>{" "}
          <span className="text-bold md:text-3xl text-xl flex flex-start">Innovation beyond boundaries</span>
        </h1>

        <div className="mt-12 flex flex-col-reverse md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Text Box */}
          <div className="bg-white text-black p-1 md:p-6 shadow-lg -mr-40 -mt-80  max-w-sm md:w-full w-[70%]  mt-12 md:mt-12 md:relative md:-mr-20 md:z-10 z-10">
            <div className="flex items-center space-x-0 ">
              <div className="hidden md:block w-1 h-8 bg-gray-500 rounded"></div>
              <h2 className="text-m md:text-2xl font-bold flex items-center">
                Empowering the Future with Blockchain Innovation
              </h2>
            </div>

            <p className="text-[#000000] md:mt-4 mt-0">
              At Ledgerline, we redefine innovation by leveraging blockchain technology to create
              seamless, secure, and transparent solutions for the digital age. Our mission is to
              empower businesses and individuals with decentralized systems.
            </p>
            <div className="flex items-center justify-end space-x-2 md:mt-2 mt-0">
              <Image src="/phone.png" alt="Call" width={20} height={20} />
              <p className="text-black">Call For Help!</p>
              <div className="flex items-center space-x-1">
                <Image src="/callright.png" alt="Call Right" width={15} height={10} />
                <Image src="/callright.png" alt="Call Right" width={15} height={10} />
              </div>
            </div>
          </div>

          {/* Image Box */}
          <div className="flex-1 relative w-full md:w-1/2 -ml-12 ">
            <div
              className="bg-cover bg-center w-[70%]   md:w-full h-[340px] md:h-[400px] md:relative"
              style={{
                backgroundImage: "url('/about1.png')",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLedgerline;
