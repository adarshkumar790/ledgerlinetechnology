import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#393D42] text-gray-300 py-8 w-full">
      
      <p className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 text-white font-bold text-4xl uppercase">
  Innovation Beyond Boundaries
</p>

      
      <div className="max-w-[900px] mx-auto px-4 md:flex md:justify-between md:items-start mt-20">
        
        {/* Left Section - Logo and Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center font-bold space-x-4">
            <Image
              src="/ledgerlogo.png"
              alt="Ledger Line Logo"
              width={110}
              height={80}
            />
            <span className="text-white font-bold text-xl">
              LEDGERLINE <br /> TECHNOLOGY
            </span>
          </div>
          <div className="flex space-x-4 mt-4 ml-10 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/in.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/fac.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/twi.png"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Image
                src="/ln.png"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>

        {/* Middle Section - Links and Services */}
        <div className="mt-8 md:mt-0 md:flex md:space-x-16 justify-center md:justify-start">
          {/* Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="text-white">About us</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="text-white">Services</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="text-white">Projects</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="hover:text-white text-white">Blog</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="text-white">Careers</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="text-white">Contact us</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white">Blockchain</a></li>
              <li><a href="#" className="text-white">Metaverse</a></li>
              <li><a href="#" className="text-white">Solution</a></li>
              <li><a href="#" className="text-white">Consulting</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="mt-8 md:mt-0">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            {/* Address */}
            <li className="flex items-start space-x-4">
              <Image
                src="/lo.png" 
                alt="Address Icon"
                width={24}
                height={24}
              />
              <span className="text-white">
                901, Silver Sammway, <br /> Munjmauda, Akota, <br /> Vadodara 390020
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-center space-x-4">
              <Image
                src="/co.png" 
                alt="Phone Icon"
                width={24}
                height={24}
              />
              <span className="text-white">+91 12345 67890</span>
            </li>

            {/* Email */}
            <li className="flex items-center space-x-4">
              <Image
                src="/em.png" 
                alt="Email Icon"
                width={24}
                height={24}
              />
              <span className="text-white">contact@ledgerline.com</span>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
