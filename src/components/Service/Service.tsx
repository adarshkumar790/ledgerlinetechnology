import Image from "next/image";
import { FC } from "react";

const servicesData = [
  {
    "id": 1,
    "icon": "/it.png",
    "title": "IT Management",
    "description": "We offer comprehensive IT management services, including cloud computing, cybersecurity, network infrastructure, software deployment, and technical support to ensure optimal business operations. Our expertise encompasses disaster recovery planning, data center management, IT asset tracking, system upgrades, and 24/7 helpdesk services. By adopting a proactive approach, we help businesses maintain a secure and scalable IT environment aligned with their strategic goals."
  },
  {
    "id": 2,
    "icon": "/apps.png",
    "title": "App Development",
    "description": "We develop custom mobile and web applications with user-centric designs, scalable architectures, and seamless integrations with cloud services and third-party APIs. Our expertise spans iOS, Android, and cross-platform solutions using frameworks like React Native and Flutter. From wireframing and prototyping to deployment and maintenance, we ensure a streamlined development process tailored to your business requirements, delivering innovative and future-proof applications."
  },
  {
    "id": 3,
    "icon": "/web.png",
    "title": "Web Development",
    "description": "Our team specializes in creating responsive, high-performance websites with modern UI/UX, SEO optimization, e-commerce integration, and robust backend solutions to enhance digital presence and user engagement. We leverage the latest technologies such as Next.js, Tailwind CSS, and headless CMS architectures to deliver lightning-fast, secure, and scalable web solutions. Our services also include custom web portals, CMS development, and performance optimization for superior user experiences."
  },
  
  {
    "id": 4,
    "icon": "/coin4.png",
    "title": "Blockchain Solutions",
    "description": "Custom Blockchain Development: Tailored blockchain networks for businesses. Smart Contract Development: Secure and automated process workflows. Decentralized Finance (DeFi) Platforms: Build platforms for decentralized financial ecosystems. Tokenomics and Token Management: Design and manage blockchain tokens."
  },
  {
    "id": 5,
    "icon": "/coin3.png",
    "title": "DeFi Development",
    "description": "DeFi development involves creating transparent, secure applications like DEXs, lending platforms, stablecoins, prediction markets, and others, accessible to anyone with internet access."
  },
  {
    "id": 6,
    "icon": "/coin2.png",
    "title": "Launchpad",
    "description": "In blockchain and cryptocurrency, a launchpad is a platform used by projects to introduce new tokens, aiming to raise funds and provide various supportive features like marketing aid, liquidity pools, and community engagement tools."
  },
  {
    "id": 7,
    "icon": "/coin5.png",
    "title": "Smart Contract Development",
    "description": "Smart contracts play a significant role in utilizing blockchain technology for businesses. To ensure efficient smart contracts, our team of Solidity developers create detailed specifications and write codes."
  },
  {
    "id": 8,
    "icon": "/coin6.png",
    "title": "NFT Marketplace Development",
    "description": "An NFT marketplace is a dedicated platform for the creation and exchange of Non-Fungible Tokens (NFTs), distinct from traditional cryptocurrency exchanges."
  },
  {
    "id": 9,
    "icon": "/coin7.png",
    "title": "Exchange App Development",
    "description": "Our services have primarily benefited Exchange Development. We cater to diverse needs of various applications that operate on different chains in accordance with current trends."
  },
  {
    "id": 10,
    "icon": "/coin7.png",
    "title": "Custom Blockchain Development",
    "description": "Our mastery in blockchain development ensures client satisfaction, and our company thrives by offering customized solutions across diverse industries."
  },
  {
    "id": 11,
    "icon": "/coin8.png",
    "title": "Token Development",
    "description": "Token development encompasses designing token economics, crafting smart contracts, launching on blockchain networks, and establishing supporting infrastructure. Tokens can be generated on various blockchains such as Ethereum, Binance Smart Chain, and more."
  },
  {
    "id": 12,
    "icon": "/coin9.png",
    "title": "Crypto Wallet",
    "description": "Crypto wallets work by storing a private key that is used to sign and verify transactions on a blockchain network. The private key is a long string of alphanumeric characters, and is used to access and transfer the digital assets stored in the wallet."
  },
  
];

const Serproject: FC = () => {
  return (
    <div id="all" className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h2 className="text-white text-4xl font-bold mb-4">Services</h2>
      <p className="text-white text-lg mb-12">
        <span className="bg-gray-600 text-white px-2 py-1 rounded">We</span> Offer All Types Of IT Solution Services
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7 rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200"
          >
            <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">{service.id}.</h6>
            <div className="bg-blue-900 rounded-full w-12 h-12 flex items-center text-white justify-center mb-4">
              <Image src={service.icon} alt={`Icon ${service.id}`} width={30} height={30} />
            </div>
            <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Serproject;
