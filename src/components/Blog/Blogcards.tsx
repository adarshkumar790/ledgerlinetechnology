import React from "react";
import Image from "next/image";

const BlogCards: React.FC = () => {
  return (
    <div id='app' className="bg-black text-white min-h-screen flex justify-center items-center py-10">
      <div className="grid lg:grid-cols-2 md:gap-4 gap-16 max-w-5xl mx-auto px-4 relative">

        {/* Text Section */}
        <div className="flex flex-col justify-center mt-12 rounded-xl lg:mt-48 lg:-mr-2 lg:ml-16 bg-white md:p-6 p-4 pb-16  shadow-lg relative md:z-10 z-10 w-full h-auto lg:w-5/7 lg:h-72">
          <h2 className="font-bold text-black mb-2 mt-2 text-lg lg:text-xl">
            App Development
          </h2>          
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
          1.Tailored mobile applications for both Android and iOS. <br/>
          2.Cross-platform solutions offering exceptional functionality. <br/>
          3.Scalable apps built to enhance user engagement and improve business efficiency. <br/>
          4.Intuitive and user-friendly UI/UX design for seamless navigation. <br/>
          5.Integration with cutting-edge technologies like AI, AR/VR, and blockchain. <br/>
          {/* 6.Secure and reliable applications with robust data protection. <br/> */}
 
          </p>
          {/* <button className="flex items-center bg-[#0411FF] text-white px-4 py-2 self-start lg:self-end hover:bg-blue-700">
            Read More
            <span className="ml-2">
              <Image src="/blogarrow.png" alt="arrow" width={20} height={20} />
            </span>
          </button> */}
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center lg:mr-28 lg:-ml-20">
          <Image
            src="/appde.png"
            alt="Team Meeting"
            width={700}
            height={500}
            className="object-cover w-full lg:w-[700px] h-auto"
          />

          <div className="absolute top-1/2 md:mt-44 -mt-48 transform -translate-y-1/2 z-10 right-17 md:w-[180px] w-[190px] h-[160px] lg:top-60 lg:ml-8 right-20 lg:right-16">
            <Image
              src="/appde2.png"
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

export default BlogCards;
