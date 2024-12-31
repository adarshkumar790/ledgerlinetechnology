import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Category from "@/components/Project/Category";
import Image from "next/image";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black min-h-screen flex items-center justify-center">
      {/* Centered Container */}
      <div className="grid grid-cols-2 max-w-4xl gap-2 mx-auto ml-4 mr-4">
        {/* Left Column */}
        <div className="grid grid-rows-3 gap-1">
          {/* Image 1 */}
          <div className="relative">
            <img
              src="/p3.png"
              alt="NFT"
              className="rounded-lg object-cover w-full h-40"
            />
          </div>

          {/* Image 3 */}
          <div className="relative">
            <img
              src="/p1.png"
              alt="Cloud Security"
              className="rounded-lg object-cover w-full h-40"
            />
          </div>

          {/* Image 4 */}
          <div className="relative">
            <img
              src="/p2.png"
              alt="Tech Innovation"
              className="rounded-lg object-cover w-full h-40"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          {/* Image 2 */}
          <img
            src="/p4.png"
            alt="Business Team"
            className="rounded-lg object-cover w-full"
            style={{height: "calc(3 * 10rem)" }} // Matches the exact height of the left column
          />
        </div>
      </div>      
    </div>
    {/* <div className="flex">
    <Image src="/projectimage.png" alt="Category 1" width={100} height={80} />
  </div> */}
  <Category/>
  <Footer/>
  </>
  );
};

export default Home;
