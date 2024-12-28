"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home", key: "home" },
    { href: "/about", label: "About us", key: "about" },
    { href: "/service", label: "Services", key: "services" },
    { href: "/project", label: "Projects", key: "projects" },
    { href: "/blog", label: "Blog", key: "blog" },
    { href: "/career", label: "Careers", key: "careers" },
    { href: "/contact", label: "Contact us", key: "contact" },
  ];

  return (
    <header className="flex items-center justify-between p-5 bg-black">
      {/* Logo Section */}
      <div className="flex items-center font-bold">
        <Image
          src="/logoledger.png"
          alt="Ledger Line Logo"
          width={60}
          height={50}
        />
        <span className="text-white font-bold ml-2">
          LEDGERLINE <br /> TECHNOLOGY
        </span>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
  <button
    onClick={handleToggleMenu}
    className="text-white focus:outline-none text-3xl"
  >
    {isOpen ? (
      <Image
        src="/close.png"
        alt="Close menu"
        width={40}
        height={30}
      />
    ) : (
      <Image
        src="/menu.png" 
        alt="Open menu"
        width={40} 
        height={30}
      />
    )}
  </button>
</div>


      {/* Navigation Links */}
      <nav
  className={`${
    isOpen ? "flex bg-black" : "hidden"
  } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-sm uppercase absolute md:static md:bg-transparent w-full md:w-auto top-20 left-0 md:top-auto md:left-auto px-5 md:px-0 py-5 md:py-0 z-10`}
>
  {navLinks.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      className={`text-white text-center md:text-left ${
        pathname === href ? "border-b-2 border-blue-500" : "font-semibold"
      }`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  ))}
</nav>

    </header>
  );
};

export default Navbar;
