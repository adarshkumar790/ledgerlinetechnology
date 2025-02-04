"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FcSettings } from 'react-icons/fc';
import { IoSettings } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

interface Card {
  icon: string;
  number: string;
  category: string;
  title: string;
  description: string;
  details: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState("Exchange");
  // const [selectedService, setSelectedService] = useState("Exchange");
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  
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
      icon: '/centralised.png', 
      number: '0.1', 
      category: 'EXCHANGE', 
      title: 'Centralized Exchanges', 
      description: "We have built a secure and user-friendly centralized cryptocurrency exchange with fast transactions and high liquidity.",
      details: "Centralized exchanges (CEX) serve as digital trading platforms that enable cryptocurrency transactions through a centralized authority. These platforms provide users with high liquidity, ensuring that buy and sell orders are executed efficiently and without significant delays. Additionally, they offer rapid transaction speeds and advanced trading features, such as margin trading, futures contracts, and automated trading bots, making them an attractive option for both beginners and experienced traders. However, centralized exchanges require users to entrust their assets and personal data to a third-party organization, which introduces potential security risks, including hacking attempts, data breaches, and regulatory interventions."
    },
    { 
      icon: '/decentralised.png', 
      number: '0.2', 
      category: 'EXCHANGE', 
      title: 'Decentralized Exchanges', 
      description: 'We have built a secure and transparent decentralized cryptocurrency exchange.', 
      details: "Decentralized exchanges (DEX) operate without intermediaries, enhancing security and transparency. Unlike CEXs, DEXs enable peer-to-peer trading directly through smart contracts, allowing users to maintain complete control over their funds. They provide enhanced privacy and reduced risks of hacking but may face liquidity and speed challenges. Our DEX solutions are designed for optimized performance, cross-chain compatibility, and innovative trading tools."
    },
    { 
      icon: '/CE3.png', 
      number: '0.3', 
      category: 'EXCHANGE', 
      title: 'Hybrid Exchange', 
      description: 'We have built a hybrid exchange, offering security and liquidity with fast, decentralized trading.', 
      details: "Hybrid exchanges combine the best of centralized and decentralized exchanges, offering high liquidity, fast order execution, and enhanced security. They allow users to maintain control over their private keys while benefiting from the speed and efficiency of centralized order matching. Our hybrid exchange solutions provide robust security protocols, seamless user experience, and regulatory compliance to ensure efficient and secure digital asset trading."
    },
    { 
      icon: '/wallets.png', 
      number: '0.4', 
      category: 'WALLET', 
      title: 'WALLET SOLUTIONS', 
      description: 'We provide secure, customizable blockchain wallets for safe storage and seamless digital asset transactions.',
      details: "Our wallet solutions offer top-tier security, multi-currency support, and user-friendly interfaces for seamless crypto transactions. We provide both custodial and non-custodial wallets, giving users the choice between convenience and full control over their private keys. Additional features include two-factor authentication (2FA), biometric security, and integration with DeFi and NFT platforms."
    },
    { 
      icon: '/nft1.png', 
      number: '0.5', 
      category: 'NFT', 
      title: 'NFT Marketplace Development', 
      description: 'We create secure, scalable NFT marketplaces for buying, selling, and auctioning digital assets.',
      details: "Our NFT marketplace solutions enable seamless trading of digital assets, ensuring a smooth user experience. Features include royalty automation, auction mechanisms, multi-chain compatibility, and enhanced security measures to protect creators and collectors. We integrate smart contract functionality to ensure authenticity and transparency."
    },
    { 
      icon: '/nft2.png', 
      number: '0.6', 
      category: 'NFT', 
      title: 'NFT Minting Solutions', 
      description: 'We offer customizable services to tokenize digital art, music, and other assets as NFTs.',
      details: "Our NFT minting services allow creators to easily tokenize their digital assets on the blockchain. We provide customizable smart contract templates, batch minting capabilities, metadata management, and support for multiple blockchains. The process ensures transparency, security, and ownership verification."
    },
    { 
      icon: '/defi.png', 
      number: '0.9', 
      category: 'DEFI', 
      title: 'DeFi Platform Development', 
      description: 'We build decentralized platforms for lending, borrowing, and yield farming.',
      details: "Our DeFi solutions include lending and borrowing protocols, automated yield farming strategies, liquidity mining, and staking mechanisms. We focus on security audits, scalability, and cross-chain interoperability to create reliable financial ecosystems that empower users with decentralized financial services."
    },
    { 
      icon: '/web31.png', 
      number: '0.13', 
      category: 'WEB3', 
      title: 'WEB3 Development', 
      description: 'We create decentralized applications (dApps) on blockchain for enhanced user control.',
      details: "Our Web3 solutions focus on decentralized applications (dApps), self-sovereign identity, and smart contract development. We leverage Ethereum, Solana, and other blockchain networks to create secure, scalable, and user-centric Web3 ecosystems with seamless integration across multiple platforms."
    },
    { 
      icon: '/coin1.png', 
      number: '0.14', 
      category: 'COIN DEVELOPMENT', 
      title: 'Coin Creations', 
      description: 'We design and develop custom blockchain coins tailored to your specific business needs.',
      details: "Our coin creation services include custom blockchain development, tokenomics design, governance mechanisms, and smart contract integration. We ensure security, scalability, and compliance to provide a sustainable digital currency ecosystem tailored to your business model."
    },
    { 
      icon: '/coin2.png', 
      number: '0.15', 
      category: 'COIN DEVELOPMENT', 
      title: 'Tokenomics & Coin Structuring', 
      description: 'We offer expertise in designing tokenomics and coin structures for a sustainable and scalable ecosystem.',
      details: "Our tokenomics and coin structuring services focus on designing optimal supply models, staking mechanisms, governance frameworks, and reward structures. We provide strategic consulting on economic incentives to ensure long-term sustainability and adoption of your digital asset."
    }
  ];


  const filteredCards = selectedService
    ? cards.filter((card) => card.category === selectedService)
    : cards;

  return (
    <section className="bg-black text-white py-10">
  {/* Header Section */}
  <div className="text-center mb-10 border border-blue-500 p-2 bg-white -mt-12">
    <h2 className="text-3xl font-bold md:font-bold md:text-xs flex items-center justify-center gap-2 relative">
      {/* Left gear icon */}
      <span className="relative text-black hidden md:block">
        <Image src="/setting1.png" alt="Gear" width={70} height={65} />
      </span>

      {/* Center text */}
      <span className="flex items-center gap-2">
      <span className="text-gray-700 font:bold text:base md:text-4xl">Our</span>
      <span className="text-[#000000] md:text-4xl">Service</span>
       </span>

      {/* Right gear icon */}
      <span className="relative text-black hidden md:block">
        <Image src="/setting2.png" alt="Gear" width={70} height={65} />
      </span>
    </h2>
  </div>

  {/* Categories Section */}
  <div className="flex flex-wrap md:justify-center gap-2 mb-10">
  {services.map((service, index) => (
    <div
      key={index}
      className={`relative w-full md:w-40 bg-gray-600 hover:bg-white transition rounded-lg overflow-hidden cursor-pointer ${
        selectedService === service.label ? 'bg-white' : ''
      } h-[68px] w-[300px] md:h-[130px] font-black mr-[20px] ml-[24px] md:ml-[0px] md:mr-[0px]`}
      onClick={() => setSelectedService(service.label)}
    >
      {/* Desktop Design */}
      <div
        className={`hidden md:flex flex-col h-full ${
          selectedService === service.label ? 'border-4 border-blue-900' : ''
        }`}
      >
        <div className="flex-1 bg-white flex items-center justify-center">
       <Image
       src={service.icon}
       alt={service.label}
       width={20}
        height={20}
       className="w-2 h-2 sm:w-4 sm:h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
       />
      </div>



        <div className="flex-1 bg-[#717171] flex items-center justify-center">
          <p className="text-sm font-bold text-white">{service.label}</p>
        </div>
      </div>

      {/* Mobile Design */}
      <div
        className={`flex md:hidden items-center justify-center h-full rounded-lg transition ${
          selectedService === service.label ? 'bg-white' : 'bg-[#A2A2A2]'
        }`}
      >
        {/* Icon */}
        <div className="flex-shrink mr-2">
          <Image
            src={service.icon}
            alt={service.label}
            width={50}
            height={50}
            className={`transition ${
              selectedService === service.label ? 'filter-none' : 'filter invert'
            }`}
          />
        </div>

        {/* Label */}
        <div>
          <p
            className={`text-2xl font-black text-center transition ${
              selectedService === service.label ? 'text-black' : 'text-white'
            }`}
          >
            {service.label}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
  {/* Cards Product Section */}
  <div className="flex justify-center md:gap-4 flex-wrap md:w-[90%] md:ml-[5%]">
  {filteredCards.map((card, index) => (
    <div
      key={index}
      className="relative group hover:shadow-[#0411FF] hover:shadow-lg rounded-3xl p-1 flex flex-col items-center justify-center w-[75%] sm:w-[calc(50%-2rem)] lg:w-[340px]  md-w-[340px] h-80 mb-4 transition"
    >
      <div className="flex-1 bg-[#717171] w-full flex items-center justify-center text-white rounded-t-3xl">
        <Image src={card.icon} alt={card.title} width={80} height={65} />
      </div>

      <div className="flex-1 bg-[#FFFFFF] w-full p-4 rounded-b-3xl flex flex-col items-start justify-center">
        <span className="absolute top-1 right-1 bg-[#CACACA] text-black text-xl font-bold px-4 py-2 rounded-bl-3xl">
          {card.number}
        </span>

        <h3 className="text-xl font-bold  text-[#717171] group-hover:text-[#0411FF] text-left w-full">
          {card.title}
        </h3>
        <p className="md-text-xs text-[#000000]  text-left w-full font-light">
          {card.description}
        </p>
        <button onClick={() => setSelectedCard(card)} className="mt-1 px-4 py-1 text-[#000000] rounded-lg hover:bg-slate-800 transition self-end flex items-center gap-2">
          Learn More
          <Image src="/servicearrow.png" alt="Arrow" width={20} height={20} />
        </button>
      </div>
    </div>
  ))}
</div>

{selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-600 p-6 rounded-lg w-80 md:w-96 h-auto relative">
            <button onClick={() => setSelectedCard(null)} className="absolute top-2 right-2 text-xl"><IoClose /></button>
            <h2 className=" text-white font-bold">{selectedCard.title}</h2>
            <p className='text-m text-black '>{selectedCard.details}</p>
          </div>
        </div>
      )}


</section>

  );
};

export default Services;
