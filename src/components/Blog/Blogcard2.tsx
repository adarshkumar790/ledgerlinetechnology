import React from "react";
import Image from "next/image";

const BlogCard2: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 ml-56 relative">
        
        <div className="relative">
          <Image
            src="/blog8.png" 
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-220 h-300"
          />
          
          <div className="absolute top-64 ml-12 left-6 w-140 h-120">
            <Image
              src="/blog9.png"
              alt="Handshake"
              width={260}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        
        <div className="flex flex-col justify-center bg-white p-6 shadow-lg lg:relative lg:-left-28 lg:-mb-12 lg:z-10 lg:w-5/7 mr-20 mt-48 h-60">
          <h2 className="font-bold text-black mb-4">
          Unlock Telegram’s Potential: A Guide to Mini Apps
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
          Exploring the World of Telegram Mini Apps: Enhancing User Experience and Interaction Introduction Telegram, a popular messaging app known for…
          </p>
          <button className="flex items-center  bg-[#0411FF] text-white px-2 py-1  self-end hover:bg-blue-700">
            Read More
            <span className="ml-2"><Image src="/blogarrow.png" alt="arrow" width={20} height={20} /> </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
