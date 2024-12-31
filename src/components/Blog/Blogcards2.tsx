import React from "react";
import Image from "next/image";

const BlogCards2: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 md:gap-4 gap-16 max-w-5xl mx-auto px-4 relative">

        {/* Text Section */}
        <div className="flex flex-col justify-center mt-12 lg:mt-48 lg:-mr-2 lg:ml-16 bg-white md:p-6 p-4 pb-14  shadow-lg relative md:z-10 z-10 w-full h-auto lg:w-5/7 lg:h-64">
          <h2 className="font-bold text-black mb-4 text-lg lg:text-xl">
            Choosing the Right Blockchain: A Guide to IDO Development
          </h2>
          <p className="text-[#000000] mb-6 text-sm">
            In the fast-paced world of cryptocurrency, Initial DEX Offerings (IDOs) have emerged as a popular fundraising method for blockchain projects….
          </p>
          <button className="flex items-center bg-[#0411FF] text-white px-4 py-2 self-start lg:self-end hover:bg-blue-700">
            Read More
            <span className="ml-2">
              <Image src="/blogarrow.png" alt="arrow" width={20} height={20} />
            </span>
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center lg:mr-28 lg:-ml-20">
          <Image
            src="/blog6.png"
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-full lg:w-[700px] h-auto"
          />

          <div className="absolute top-1/2 md:mt-40 -mt-48 transform -translate-y-1/2 z-10 right-4 md:w-[180px] w-[200px] h-[140px] lg:top-60 lg:ml-8 right-24 lg:right-16">
            <Image
              src="/blog7.png"
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
