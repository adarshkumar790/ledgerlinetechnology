import Image from "next/image";
import { FC } from "react";

const Serproject: FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-12 ">
      
      <h2 className="text-white text-4xl font-bold mb-4">Services</h2>
      <p className="text-white text-lg mb-12">
        <span className="bg-gray-600 text-white px-2 py-1 rounded">We</span> Offer All Types Of IT Solution Services
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ">
        {/* Card 1 */}
        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">1.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin4.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Blockchain Solutions</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          Custom Blockchain Development: Tailored blockchain networks for businesses.
          Smart Contract Development: Secure and automated process workflows.
          Decentralized Finance (DeFi) Platforms: Build platforms for decentralized financial ecosystems.
          Tokenomics and Token Management: Design and manage blockchain tokens.
          Blockchain Security: Advanced security solutions for enhanced operational efficiency.
          </p>
        </div>
        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">2.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin3.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Defi Development</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          DeFi development involves creating transparent, secure applications like DEXs, lending platforms, stablecoins, prediction markets, and others, accessible to anyone with internet access.          </p>
        </div>

        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">3.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin2.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">LAUNCHPAD</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          In blockchain and cryptocurrency, a launchpad is a platform used by projects to introduce new tokens, aiming to raise funds and provide various supportive features like marketing aid, liquidity pools, and community engagement tools          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">4.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin5.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Smart Contract Development</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          Smart contracts play a significant role in utilizing blockchain technology for businesses. To ensure efficient smart contracts, our team of Solidity developers create detailed specifications and write codes.        </p>
         </div>
        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">5.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin6.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">NFT Marketplace Development</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          An NFT marketplace is a dedicated platform for the creation and exchange of Non-Fungible Tokens (NFTs), distinct from traditional cryptocurrency exchanges.        </p>
         </div>
        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">6.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin7.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Exchange App Developement</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          Our services have primarily benefited Exchange Development. We cater to diverse needs of various applications that operate on different chains in accordance with current trends.        </p>
         </div>
        {/* Card 3 */}
        <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">7.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin7.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Custom Blockchain Developement</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          Our mastery in blockchain development ensures client satisfaction, and our company thrives by offering customized solutions across diverse industries. </p>          </div>
         
         <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">8.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin8.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Token Development</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          Token development encompasses designing token economics, crafting smart contracts, launching on blockchain networks, and establishing supporting infrastructure. Tokens can be generated on various blockchains such as Ethereum, Binance Smart Chain, and more.  </p>
         </div>
         <div className="bg-[#19191A] hover:bg-white md:w-full w-[85%] md:ml-0 ml-7  rounded-2xl p-8 shadow-lg flex flex-col items-center border border-gray-200">
        <h6 className="mb-4 px-3 py-1 bg-[#393D42] text-white">9.</h6>
          <div className="bg-[[#19191A]] rounded-full w-12 h-12 flex items-center justify-center mb-4">
            <Image src="/coin9.png" alt="Icon 1" width={30} height={30} />
          </div>
          <h3 className="text-sm text-[#AFADAD] hover:text-[#000000] font-semibold mb-2">Crypto Wallet</h3>
          <p className="text-[#AFADAD] text-sm hover:text-[#000000] text-center">
          Crypto wallets work by storing a private key that is used to sign and verify transactions on a blockchain network. The private key is a long string of alphanumeric characters, and is used to access and transfer the digital assets stored in the wallet. </p>        
           </div>
           
      </div>
    </div>
  );
};

export default Serproject;
