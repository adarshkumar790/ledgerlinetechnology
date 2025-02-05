import React from "react";
import Image from "next/image";

const BlogCard2: React.FC = () => {
  return (
    <div id="web" className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/block3.png"
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-full h-auto"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-y-0 lg:top-auto lg:bottom-[-20%] lg:left-1/2 lg:transform lg:-translate-x-1/2 w-48 h-20 mt-28 md:-mb-4 sm:w-40 sm:h-32 md:w-44 md:h-48 lg:w-140 lg:h-120 z-10">
            <Image
              src="/web2.png"
              alt="Handshake"
              width={260}
              height={200}
              className="object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center bg-white rounded-xl md:p-6 pt-20 pl-2 pr-2 pb-8 shadow-lg relative lg:-left-28 lg:-mb-12 lg:z-10 mt-8 lg:w-5/7 text-black h-auto sm:mt-12 lg:mt-48">
          <h2 className="font-bold mb-4 text-lg sm:text-xl">
          Web Development
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base"> 1.Fast and responsive websites for optimal performance. <br/> 2.E-commerce platforms with seamless, advanced integrations.
           <br/> 3.SEO-focused solutions designed for increased visibility and business growth. </p>
          {/* <button className="flex items-center bg-[#0411FF] text-white px-4 py-2 mt-auto self-end md:self-start hover:bg-blue-700">
            Read More
            <span className="ml-2">
              <Image src="/blogarrow.png" alt="arrow" width={20} height={20} />
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
