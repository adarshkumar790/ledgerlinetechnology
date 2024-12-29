"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FcSettings } from 'react-icons/fc';
import { IoSettings } from 'react-icons/io5';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  
  const services = [
    { icon: '/ex.png', label: 'EXCHANGE' },
    { icon: '/walletss.png', label: 'WALLET' },
    { icon: '/nft.png', label: 'NFT' },
    { icon: '/defis.png', label: 'DEFI' },
    { icon: '/w3.png', label: 'WEB3' },
    { icon: '/td.png', label: 'COIN DEVELOPMENT' },
  ];


  const cards = [
    { 
      icon: '/EC2.png', 
      number: '0.1', 
      category: 'EXCHANGE', 
      title: 'Crypto Exchange', 
      description: 'A platform for exchanging cryptocurrencies with low fees and high liquidity.', 
    },
    { 
      icon: '/CE1.png', 
      number: '0.2', 
      category: 'EXCHANGE', 
      title: 'Crypto Ed', 
      description: 'A platform for exchanging cryptocurrencies with low fees and high liquidity.', 
    },
    { 
      icon: '/EC2.png', 
      number: '0.3', 
      category: 'EXCHANGE', 
      title: 'Hybrid Exchange', 
      description: 'A platform for exchanging cryptocurrencies with low fees and high liquidity.', 
    },
    { 
      icon: '/CE3.png', 
      number: '0.4', 
      category: 'EXCHANGE', 
      title: 'Margin Trading Exchange', 
      description: 'A platform for exchanging cryptocurrencies with low fees and high liquidity.', 
    },
    { 
      icon: '/CE4.png', 
      number: '0.5', 
      category: 'EXCHANGE', 
      title: 'Decentralized Exchange', 
      description: 'A secure and easy-to-use wallet for managing your crypto assets. blockchain.',
    },
    { 
      icon: '/CE5.png', 
      number: '0.6', 
      category: 'EXCHANGE', 
      title: 'Security Exchange', 
      description: 'A marketplace for creating, buying, and selling NFTs with a user-friendly interface.',
    },
  ];

  const filteredCards = selectedService
    ? cards.filter((card) => card.category === selectedService)
    : cards;

  return (
    <section className="bg-black text-white py-10">
      <div className="text-center mb-10 border border-blue-500 p-2 bg-white -mt-12">
  <h2 className="text-3xl md:font-bold font-bold  md:text-xs flex items-center justify-center gap-2 relative ">
    
    <span className="relative  text-black">
      <Image src="/setting1.png" alt="Gear" width={70} height={65} />
    </span>

    
    <span className="flex items-center gap-2  ">
  <Image src="/Our.png" alt="Gear" width={220} height={200} />
</span>



    {/* Right gear icon */}
    <span className="relative  text-black">
      <Image src="/setting2.png" alt="Gear" width={70} height={65} />
    </span>
  </h2>
</div>


<div className="flex flex-wrap md:justify-center gap-4 mb-10">
  {services.map((service, index) => (
    <div
      key={index}
      className={`relative w-full md:w-40 h-36 bg-gray-600 hover:bg-gray-600 transition rounded-lg overflow-hidden cursor-pointer ${
        selectedService === service.label ? 'bg-gray-600 shadow-2xl border-4 border-blue-900' : ''
      }`}
      onClick={() => setSelectedService(service.label)}
    >
      {/* Desktop Design (Unchanged) */}
      <div className="hidden md:flex flex-col h-full">
        <div className="flex-1 bg-white flex items-center justify-center">
          <Image src={service.icon} alt={service.label} width={40} height={40} />
        </div>
        <div className="flex-1 bg-[#717171] flex items-center justify-center">
          <p className="text-sm font-bold text-white">{service.label}</p>
        </div>
      </div>

      {/* Mobile Design (One Box Per Row, Full Width) */}
      <div className="flex md:hidden md:h-4 items-center h-[20vh] bg-gray-600 px-32 py-12 mx-1 rounded-lg">
  {/* Icon */}
  <div className="flex-shrink-0">
    <Image
      src={service.icon}
      alt={service.label}
      width={30}
      height={30}
      className="filter invert"
      />
       </div>

       {/* Label */}
       <div className="ml-2">
       <p className="text-sm font-bold text-white">{service.label}</p>
       </div>
       </div>

      {/* Hover Icon */}
      {selectedService === service.label && (
        <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 p-2 rounded-full shadow-lg">
          <Image src="/hover.png" alt="Checkmark" width={40} height={30} />
        </div>
      )}
    </div>
  ))}
</div>



      {/* Cards product */}
      <div className="flex justify-center gap-4 flex-wrap">
  {filteredCards.map((card, index) => (
    <div
      key={index}
      className="relative group hover:shadow-[#0411FF] hover:shadow-lg rounded-3xl p-1 flex flex-col items-center justify-center w-full md:w-[calc(33.333%-1rem)] max-w-[360px] h-80 mb-4 transition"
    >
     <div className="flex-1 bg-[#717171] w-full flex items-center justify-center text-white rounded-t-3xl">
  <Image
    src={card.icon}
    alt={card.title}
    width={80}
    height={65}
    
  />
</div>


      <div className="flex-1 bg-[#FFFFFF] w-full p-4 rounded-b-3xl flex flex-col items-start justify-center">
        <span className="absolute top-1 right-1 bg-[#CDCCCC] text-black text-xl font-bold px-4 py-2 rounded-bl-3xl">
          {card.number}
        </span>

        <h3 className="text-xl  font-bold mt-4 text-[#717171] group-hover:text-[#0411FF] text-left w-full">
          {card.title}
        </h3>
        <p className="md-text-xs text-[#000000] mt-2 text-left w-full font-light">
          {card.description}
        </p>
        <button className="mt-2 px-6 py-2 text-[#000000] rounded-lg hover:bg-slate-800 transition self-end flex items-center gap-2">
        Learn More
           <Image src="/servicearrow.png" alt="Arrow" width={20} height={20} />
         </button>

      </div>
    </div>
  ))}
</div>



    </section>
  );
};

export default Services;
