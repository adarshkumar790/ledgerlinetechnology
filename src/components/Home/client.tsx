import Image from "next/image";
import React from "react";

const CompanyPartners: React.FC = () => {
  return (
    <div className="bg-black text-white py-8">
      <h2 className="text-center text-4xl text-white font-bold mb-3">
        Company partner
      </h2>
      <div className="w-20 h-1 bg-gray-500 mx-auto mb-8"></div>
      <div className="bg-[#D9D9D9] px-6 py-4 rounded-md mx-auto max-w-5xl flex flex-col items-center space-y-4">
        
        <div className="flex items-center justify-between space-x-4 w-full">
          <Image
            src="/co1.png"
            alt="CodeExceptional"
            width={150}
            height={130}
            className="rounded-xl"
          />
          <Image
            src="/co2.png"
            alt="CodeExceptional"
            width={150}
            height={130}
            className="rounded-xl"
          />
          <Image
            src="/co3.png"
            alt="CodeExceptional"
            width={150}
            height={130}
            className="rounded-xl"
          />
          <Image
            src="/co4.png"
            alt="CodeExceptional"
            width={150}
            height={130}
            className="rounded-xl"
          />
          <Image
            src="/co5.png"
            alt="CodeExceptional"
            width={100}
            height={70}
            className="rounded-xl"
          />
        </div>
        
        <div className="flex justify-center space-x-3 mt-6 mb-2">
          <div className="w-6 h-2 bg-[#717171] rounded"></div>
          <div className="w-2 h-2 bg-[#717171] rounded-full"></div>
          <div className="w-2 h-2 bg-[#717171] rounded-full"></div>
          <div className="w-2 h-2 bg-[#717171] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPartners;
