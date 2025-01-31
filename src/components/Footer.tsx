import Image from "next/image";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { ImInstagram } from "react-icons/im";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#393D42] text-gray-300 py-8 w-full">
      <p className="absolute -top-3 sm:-top-5 left-1/2  transform -translate-x-1/2 text-white font-bold text-medium sm:text-4xl md:text-4xl text-center whitespace-nowrap">
        INNOVATION BEYOND BOUNDARIES
      </p>

      <div className="max-w-[900px] mx-auto px-4 md:flex md:justify-between md:items-start mt-20">
        <div>
          <div className="flex items-center font-bold ">
            <Image
              src="/ledgerlogo.png"
              alt="Ledger Line Logo"
              width={110}
              height={80}
            />
            <span className="text-white font-bold text-xl md:-ml-4">
              LEDGERLINE <br /> TECHNOLOGIES
            </span>
          </div>
          <div className="flex space-x-4 mt-4 ml-8">
            <a href="https://www.instagram.com/ledgerlinetech/" className="text-gray-400 hover:text-white">
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
            <a href="https://x.com/Ledgerlinetech" className="text-gray-400 hover:text-white">
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

        <div className="mt-8 md:mt-0 md:flex md:space-x-14 pl-9 sm:pl-0">
          <div>
            <h3 className="text-white font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="/about" className="text-white">About us</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="/service" className="text-white">Services</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="/project" className="text-white">Projects</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="/blog" className="text-white hover:text-white">Blog</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="#" className="text-white">Careers</a>
              </li>
              <li className="flex items-center">
                <span className="text-white mr-2">{'>'}</span>
                <a href="/contact" className="text-white">Contact us</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-2 sm:mb-2 mt-4 md:mt-0 ">Services</h3>
            <ul className="space-y-2 mt-4 sm:mt-4">
              <li><a href="#" className="text-white">Blockchain Solutions</a></li>
              <li><a href="#" className="text-white">IT Management System</a></li>
              <li><a href="#" className="text-white">Web Development</a></li>
              <li><a href="#" className="text-white">App Development</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-0 space-x-0  md:space-x-0 pl-9 sm:pl-0">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-4">
            {/* Address */}
            <li className="flex items-start space-x-2">
              <Image
                src="/lo.png" 
                alt="Address Icon"
                width={24}
                height={24}
              />
              <span className="text-white">
               901, Samanway Silver, <br /> Mujmahuda, Akota, <br /> Vadodara 390020, Gujarat, India
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
              <span className="text-white">+91 2657964445</span>
            </li>

            {/* Email */}
            <li className="flex items-center space-x-4">
              <Image
                src="/em.png" 
                alt="Email Icon"
                width={24}
                height={24}
              />
              <span className="text-white">contact@ledgerlinetech.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



