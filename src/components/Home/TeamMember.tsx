// components/TeamMembers.tsx
import Image from 'next/image';
import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const TeamMembers: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-black py-12 px-6 flex flex-col items-center mb-4">
      
      <div className="text-center text-4xl font-bold mb-8 bg-white text-black pt-6 border border-white w-2/3 h-40 relative">
        Our Best Team Member
        <span className="block w-16 h-1 bg-black mx-auto mt-2" />
        <p className="text-sm text-white mt-5">
          Meet John Doe and Alex Smith, our expert team members who excel at delivering impactful designs and efficient websites.
        </p>

        
        <button className="absolute top-80 left-4 transform -translate-y-1/2 text-white text-3xl z-10 bg-black p-2 rounded-full hover:bg-gray-600">
          <Image src="/left.png" alt="Left Arrow" width={30} height={30} />
        </button>

        
        <div className="absolute -bottom-110 left-[28%] transform -translate-x-1/2">
          
          <div className="bg-[#83868A] text-black overflow-hidden w-72 shadow-lg">
            <img
              src="/tm1.png"
              alt="John Doe"
              className="w-50 h-40 ml-20 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm text-gray-700 mt-2">
                I am John Doe, a creative UI/UX designer who transforms complex ideas
                into intuitive and impactful designs.
              </p>
            </div>
            <div className="flex flex-center space-x-3 text-white bg-[#83868A] mt-4 mb-2 ml-20">
              <a href="#" className="hover:text-blue-500">
                <Image src="/ln.png" alt="LinkedIn" width={25} height={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Image src="/fa.png" alt="Twitter" width={25} height={20} />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Image src="/tw.png" alt="Facebook" width={25} height={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-110 right-[28%] transform translate-x-1/2">
          
          <div className="bg-[#83868A] text-black overflow-hidden w-72 shadow-lg">
            <img
              src="/tm2.png"
              alt="John Doe"
              className="w-50 h-40 ml-20 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm text-gray-700 mt-2">
                I am John Doe, a creative UI/UX designer who transforms complex ideas
                into intuitive and impactful designs.
              </p>
            </div>
            <div className="flex flex-center space-x-3 text-white bg-[#83868A] mt-4 mb-2 ml-20">
              <a href="#" className="hover:text-blue-500">
                <Image src="/ln.png" alt="LinkedIn" width={25} height={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Image src="/fa.png" alt="Twitter" width={25} height={20} />
              </a>
              <a href="#" className="hover:text-blue-700">
                <Image src="/tw.png" alt="Facebook" width={25} height={20} />
              </a>
            </div>
          </div>
        </div>

        
        <button className="absolute top-80 right-4 transform -translate-y-1/2 text-white text-3xl z-10 bg-black p-2 rounded-full hover:bg-gray-600">
          <Image src="/right.png" alt="Next" width={30} height={30} />
        </button>
      </div>

    
      <div className="flex justify-center gap-6 mt-24">
        
      </div>
    </div>
  );
};

export default TeamMembers;
