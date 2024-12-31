import Image from "next/image";
import { FC } from "react";

const ScopeWork: FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative">
      {/* White Rectangle for Scope Of Work (Mobile Only) */}
      <div className="absolute md:top-52 top-32 bg-white w-full md:h-28 h-12 "></div>

      {/* White Rectangle for Our Solution (Mobile Only) */}
      <div className="absolute top-[31rem] bg-white w-full md:h-28 h-12 md:hidden"></div>

      {/* White Rectangle for The Platform (Mobile Only) */}
      <div className="absolute top-[55rem] bg-white w-full md:h-28 h-12 md:hidden"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center md:mt-0 md:mt-24 mt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          {/* Scope Of Work Box */}
          <div className="bg-[#393D42] hover:border-b-blue-800 md:-mt-40 border border-white border-b-8 p-8 w-64 h-80 shadow-lg flex flex-col items-center overflow-hidden relative">
            <div className="text-white text-4xl mb-4 p-5 rounded-full bg-white">
              <Image src="/job1.png" alt="Briefcase" width={40} height={40} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Scope Of Work</h3>
            <p className="text-gray-300 text-sm mt-1">
              The scope of work is a critical component of any software development project, as it outlines the objectives, deliverables, and timelines for the project.
            </p>
          </div>

          {/* Our Solution Box */}
          <div className="bg-[#393D42] hover:border-b-blue-800 md:-mt-20 border border-white border-b-8 p-8 w-64 h-80 shadow-lg flex flex-col items-center overflow-hidden relative">
            <div className="text-white text-4xl mb-4 p-5 rounded-full bg-white">
              <Image src="/job2.png" alt="Briefcase" width={40} height={40} />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Our Solution</h3>
            <p className="text-gray-300 text-sm mt-1">
              Our solutions are built on a foundation of cutting-edge technology, expert development practices, and a deep understanding of our clients' business needs.
            </p>
          </div>

          {/* The Platform Box */}
          <div className="bg-[#393D42] hover:border-b-blue-800 border border-white border-b-8 p-8 w-64 h-80  shadow-lg flex flex-col items-center overflow-hidden relative">
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
