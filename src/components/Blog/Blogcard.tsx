import React from "react";
import Image from "next/image";

const BlogCard: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/blockchainsolution.png"
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-full h-auto"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:bottom-[-20%] lg:left-1/2 lg:transform lg:-translate-x-1/2 w-48 h-20 mt-24 md:mb-16 sm:w-40 sm:h-32 md:w-36 md:h-28 lg:w-140 lg:h-120 z-10">
            <Image
              src="/blog5.png"
              alt="Handshake"
              width={260}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center bg-white md:p-2 pt-20 pl-2 pr-2 pb-8 shadow-lg relative lg:-left-28 lg:-mb-12 lg:z-10 mt-8 lg:w-5/7 text-black h-auto sm:mt-12 lg:mt-48">
          <h2 className="font-bold mb-1 text-lg sm:text-xl">
          Blockchain Solutions
          </h2>
          <p className="text-gray-700 mb-1 text-sm sm:text-bas"> 1. Custom Blockchain Solutions: Develop personalized blockchain networks for businesses. <br/> 2. Smart Contract Creation: Enable secure and automated workflow processes. <br/> 3. Decentralized Finance (DeFi) Solutions: Create platforms for decentralized financial ecosystems. <br/> 4. Tokenomics & Token Administration: Develop and manage blockchain-based tokens. <br/> 5. Blockchain Security Solutions: Implement advanced security measures to boost operational effectiveness. </p>
          <button className="flex items-center bg-[#0411FF] text-white px-2 py-1 mt-auto self-end md:self-start hover:bg-blue-700">
            Read More
            <span className="ml-2">
              <Image src="/blogarrow.png" alt="arrow" width={20} height={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
