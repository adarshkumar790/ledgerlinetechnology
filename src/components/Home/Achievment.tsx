// Import React and necessary modules
import Image from "next/image";
import React from "react";


const Achievement = () => {
  return (
    <div className="bg-black py-10 px-5 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-200 mb-2">Achievement</h2>
      <div className="w-24 h-1 bg-slate-400 mx-auto mb-5 rounded"></div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-8">
        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <Image
              src="/pl.png"
              alt="Experience Icon"
              width={40}
              height={40} 
              className="inline-block align-middle"
            />
            <div className="text-5xl font-bold text-white leading-none align-middle">
              30+
            </div>
          </div>
          <p className="uppercase font-[36px] text-white">Projects Completed</p>
        </div>

        
        <div className="hidden sm:block w-1 h-16 bg-slate-400 rounded"></div>

        
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-8 mb-4">
            <Image
              src="/EP.png"
              alt="Experience Icon"
              width={40}
              height={40}
              className="inline-block align-middle"
            />
            <span className="text-5xl font-bold text-white  leading-none align-middle">
              2+
            </span>
          </div>
          <p className="uppercase font-[36px] text-white">Year of Experience</p>
        </div>

        
        <div className="hidden sm:block w-1 h-16 bg-slate-400 rounded"></div>

      
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/CP.png"
              alt="Client Icon"
              width={40}
              height={40}
              className="inline-block align-middle"
            />
            <div className="text-5xl font-bold text-white ml-1 p-1 leading-none align-middle">
              90%
            </div>
          </div>
          <p className="uppercase font-[36px] text-white">Client retention</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
