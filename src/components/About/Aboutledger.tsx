"use client"; 

import Image from "next/image";
import React from "react";

const AboutLedgerline: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-8 max-w-5xl"> 
        
        <h1 className=" text-center mt-12">
          <span className="text-[#FFFFFF] text-4xl font-bold">About Ledgerline:</span> <span className="text-bold text-3xl">Innovation beyond boundaries</span> 
        </h1>

      
        <div className="mt-12 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 relative">
          
          <div className="bg-white text-black p-6  shadow-lg max-w-sm mt-12 md:relative md:-mr-20 md:z-10">
          
          <div className="flex items-center space-x-1">
          <div className="hidden md:block w-1 h-8 bg-gray-500 rounded"></div>
         <h2 className="text-2xl font-bold flex items-center space-x-2 font-bold">
        Empowering the Future with Blockchain Innovation
        </h2>
         </div>


            <p className="text-[#000000]  mt-4">
              At Ledgerline, we redefine innovation by leveraging blockchain technology to create
              seamless, secure, and transparent solutions for the digital age. Our mission is to
              empower businesses and individuals with decentralized systems.
            </p>
            <div className="flex items-center justify-end space-x-2 mt-2">
  
  <Image src="/phone.png" alt="Call" width={20} height={20} />
  
  <p className="text-black">
    Call For Help!
  </p>
  
  <div className="flex items-center space-x-1">
    <Image src="/callright.png" alt="Call Right" width={15} height={10} />
    <Image src="/callright.png" alt="Call Right" width={15} height={10} />
  </div>
</div>

          </div>

        
          <div className="flex-1 relative md:w-1/2">
            <div
              className="bg-cover bg-center h-full w-full "
              style={{
                backgroundImage: "url('/about1.png')", 
                height: "400px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLedgerline;
