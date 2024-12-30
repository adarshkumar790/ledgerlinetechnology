import Image from "next/image";
import { FC } from "react";

const ScopeWork: FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative">

    
      <div className="absolute top-52 bg-white w-full h-28 overflow-hidden"></div>
      
      
      <div className="max-w-6xl mx-auto flex flex-col items-center md:mt-0 mt-24 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          
          <div className="bg-[#393D42] hover:border-b-blue-800 border border-white border-b-8 -top-28 p-8 w-64 h-80 shadow-lg flex flex-col items-center overflow-hidden relative">
            <div className="w-full h-full absolute  left-0 bg-transparent"></div>
            <div className="text-white text-4xl mb-4 p-5 rounded-full bg-white">
              <Image src="/job1.png" alt="Briefcase" width={40} height={40} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Scope Of Work</h3>
            <p className="text-gray-300 text-sm mt-1">
              The scope of work is a critical component of any software development project, as it outlines the objectives, deliverables, and timelines for the project.
            </p>
          </div>

          
          <div className="bg-[#393D42] hover:border-b-blue-800 border border-white border-b-8 p-8 w-64 h-80 ml-4 -mt-16 shadow-lg flex flex-col items-center overflow-hidden relative">
            
            <div className="text-white text-4xl mb-4 p-5 rounded-full bg-white">
              <Image src="/job2.png" alt="Briefcase" width={40} height={40} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Our Solution</h3>
            <p className="text-gray-300 text-sm mt-1">
              Our solutions are built on a foundation of cutting-edge technology, expert development practices, and a deep understanding of our clients' business needs.
            </p>
          </div>

          
          <div className="bg-[#393D42] hover:border-b-blue-800 border border-white border-b-8 p-8 w-64 h-80 ml-6  shadow-lg flex flex-col items-center overflow-hidden relative">
            <div className="w-full h-full absolute top-0 left-0 bg-transparent"></div>
            <div className="text-white text-4xl mb-4 p-5 rounded-full bg-white">
              <Image src="/job3.png" alt="Briefcase" width={40} height={40} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">The Platform</h3>
            <p className="text-gray-300 text-sm mt-1">
              Our solutions are built on a foundation of cutting-edge technology, expert development practices, and a deep understanding of our clients' business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeWork;
