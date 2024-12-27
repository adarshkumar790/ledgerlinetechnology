import React from "react";
import Image from "next/image";

const BlogCards2: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative">
      
        <div className="flex flex-col justify-center mt-48 -mr-2 ml-16 bg-white p-6  shadow-lg lg:relative lg:z-10 lg:w-5/7 h-64">
          <h2 className="font-bold text-black mb-4">
          Choosing the Right Blockchain: A Guide to IDO Development
          </h2>
          <p className="text-[#000000] mb-6 text-sm">
          n the fast-paced world of cryptocurrency, Initial DEX Offerings (IDOs) have emerged as a popular fundraising method for blockchain projects….
          </p>
          <button className="flex items-center bg-[#0411FF] text-white px-2 py-1 self-end hover:bg-blue-700">
            Read More
            <span className="ml-2">
              <Image src="/blogarrow.png" alt="arrow" width={20} height={20} />
            </span>
          </button>
        </div>

      
        <div className="relative mr-28 -ml-20">
          <Image
            src="/blog10.png" 
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-220 h-300"
          />
          
          <div className="absolute top-60 ml-8 right-16 w-160 h-140">
            <Image
              src="/blog11.png" 
              alt="Handshake"
              width={260}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCards2;
