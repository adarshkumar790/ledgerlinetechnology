"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutLedgerline: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white -mt-20">
      <div className="container mx-auto p-8 max-w-5xl">
        <h1 className="text-center mt-24">
          <span className="text-[#FFFFFF] md:text-4xl text-2xl  flex flex-start font-semibold font-bold">About Ledgerline:</span>{" "}
          <span className="text-bold md:text-3xl text-xl flex flex-start">Innovation beyond boundaries</span>
        </h1>

        <div className="mt-12 flex flex-row items-start space-x-8">
          {/* Text Box */}
          <div className="bg-white text-black md:p-6 p-1 shadow-lg mt-12 md:mt-12 md:-mr-20 -ml-6 z-10 max-w-sm w-[70%] md:w-full">
            <div className="flex items-center space-x-0">
              <div className="hidden w-1 h-8 bg-gray-500 rounded"></div>
              <h2 className="md:text-2xl text-m flex items-center">
                Empowering the Future with Blockchain Innovation
              </h2>
            </div>

            <p className="text-[#000000] md:mt-12  text-sm md:text-m ">
              At Ledgerline, we redefine innovation by leveraging blockchain technology to create
              seamless, secure, and transparent solutions for the digital age. Our mission is to
              empower businesses and individuals with decentralized systems.
            </p>
            <div className="flex items-center justify-end space-x-2 md:mt-2 mt-0">
              <Image src="/phone.png" alt="Call" width={20} height={20} />
              <Link href="/contact" className="text-black">Call For Help!</Link>
              <div className="flex items-center space-x-1 md:space-x-0">
                <Image src="/callright.png" alt="Call Right" width={15} height={10} />
                <Image src="/callright.png" alt="Call Right" width={15} height={10} />
              </div>
            </div>
          </div>

          {/* Image Box */}
          <div className="flex-1 relative w-[80%] md:w-1/2">
            <div
              className="bg-cover bg-center w-[230%] md:-ml-0 -ml-24 mr-20 md:w-full h-[350px] md:h-[400px]"
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
