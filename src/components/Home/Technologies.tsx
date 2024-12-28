import Image from 'next/image';

const Technologies: React.FC = () => {
  return (
    <>
    <div className="bg-black text-white py-12">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold">Our Technologies</h2>
    <div className="w-16 h-1 bg-gray-500 mx-auto mt-2"></div>
  </div>

  {/* First Section */}
  <div className="flex flex-col md:flex-row justify-center items-center md:items-start max-w-5xl mx-auto border border-gray-500">
  <div className="bg-[#383838] h-full w-full md:w-1/2 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-500">
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
    </ul>
    <h3 className="text-4xl font-bold mb-4 text-center">BLOCKCHAIN</h3>
    <ul>
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
    </ul>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-8 w-full md:w-1/2">
    <TechnologyCard src="/sol.png" alt="Solidity Logo" title="Solidity" />
    <TechnologyCard src="/sol6.png" alt="Ethereum Logo" title="ERC-20" />
    <TechnologyCard src="/sol2.png" alt="Binance Logo" title="Binance" />
    <TechnologyCard src="/sol3.png" alt="WAGMI Logo" title="WAGMI" />
    <TechnologyCard src="/sol4.png" alt="Web3.js Logo" title="Web3 js" />
    <TechnologyCard src="/sol5.png" alt="Subgraph Logo" title="Subgraph" />
    <TechnologyCard src="/sol6.png" alt="Ethers.js Logo" title="Ether js" />
  </div>
</div>


  {/* Repeat similar adjustments for other sections */}
  <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-4 max-w-5xl mx-auto border border-gray-500">
  {/* Frontend Technologies */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-8 w-full md:w-1/2 md:order-1">
    <FrontendCard src="/f1.png" alt="Next Logo" title="Next Js" />
    <FrontendCard src="/f2.png" alt="React Logo" title="React Js" />
    <FrontendCard src="/typescript.png" alt="Typescript Logo" title="TypeScript" />
    <FrontendCard src="/programing.png" alt="Angular Logo" title="Angular" />
    <FrontendCard src="/structure.png" alt="React Native Logo" title="React Native" />
  </div>

  {/* Frontend Title and Description */}
  <div className="bg-[#383838] w-full md:w-1/2 p-8 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-500 md:order-2">
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
      <li className="text-[#383838]">✓ Robust Performance</li>
    </ul>
    <h3 className="text-4xl font-bold mb-4 text-center">FRONTEND</h3>
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
      <li className="text-[#383838]">✓ Robust Performance</li>
    </ul>
  </div>
</div>



<div className="flex flex-col md:flex-row justify-center mt-4 items-center md:items-start max-w-5xl mx-auto border border-gray-500">
  {/* Backend Title and Description */}
  <div className="bg-[#383838] w-full md:w-1/2 p-8 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-gray-500 md:order-1">
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
    </ul>
    <h3 className="text-4xl font-bold mb-4 text-center">BACKEND</h3>
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Smart Contract Execution</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
    </ul>
  </div>

  {/* Backend Technologies */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-8 w-full md:w-1/2 md:order-2">
    <BackendCard src="/node.svg" alt="Node Logo" title="Node Js" />
    <BackendCard src="/express1.png" alt="Express Logo" title="Express Js" />
  </div>
</div>

<div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-4 max-w-5xl mx-auto border border-gray-500">
  {/* Database Technologies */}
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-8 w-full md:w-1/2 md:order-1">
    <DatabaseCard src="/mongodb.png" alt="MongoDB Logo" title="MongoDB" />
    <DatabaseCard src="/d2.png" alt="MySQL Logo" title="MySQL" />
    <DatabaseCard src="/d3.png" alt="PostgreSQL Logo" title="PostgreSQL" />
  </div>

  {/* Database Title and Description */}
  <div className="bg-[#383838] w-full md:w-1/2 p-8 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-gray-500 md:order-2">
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ Decentralized Ledger</li>
      <li className="text-[#383838]">✓ Secure Data Storage</li>
      <li className="text-[#383838]">✓ Data Integrity</li>
    </ul>
    <h3 className="text-4xl font-bold mb-4 text-center">DATABASE</h3>
    <ul className="mt-4 text-gray-400 space-y-2 text-center">
      <li className="text-[#383838]">✓ High Availability</li>
      <li className="text-[#383838]">✓ Secure Transactions</li>
      <li className="text-[#383838]">✓ Robust Performance</li>
    </ul>
  </div>
</div>

</div>

</>
  );
};

type TechnologyCardProps = {
  src: string;
  alt: string;
  title: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ src, alt, title }) => (
  <div className="flex items-center  ">
    <Image src={src} alt={alt} width={150} height={145}  />
  
  </div>
);

const FrontendCard: React.FC<TechnologyCardProps> = ({ src, alt, title }) => (
  <div className="flex items-center gap-3 p-2  ">
    <Image src={src} alt={alt} width={100} height={95}  />
    
  </div>
);

const BackendCard: React.FC<TechnologyCardProps> = ({ src, alt, title }) => (
  <div className="flex items-center gap-8 w-37 p-5 border border-gray-500    rounded-xl">
    <Image src={src} alt={alt} width={140} height={100}  />
    
  </div>
);

const DatabaseCard: React.FC<TechnologyCardProps> = ({ src, alt, title }) => (
  <div className="flex items-center gap-3 p-2  text-white border border-white rounded-xl">
    <Image src={src} alt={alt} width={923} height={382}  />
    
  </div>
);




export default Technologies;
