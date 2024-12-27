import Image from 'next/image';

const Technologies: React.FC = () => {
  return (
    <>
    <div className="bg-black text-white py-12">
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold">Our Technologies</h2>
    <div className="w-16 h-1 bg-gray-500 mx-auto mt-2"></div>
  </div>
  <div className="flex flex-col md:flex-row justify-center  items-center md:items-start max-w-5xl mx-auto border border-gray-500">
  
    
    <div className="bg-[#383838] h-full w-1/2 p-20 flex flex-col justify-center items-center border-r border-gray-500">
    <p className="text-center text-lg text-gray-400">
        
    </p>
    <ul className="mt-4 text-[#383838] space-y-2">
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        
        </ul>
    <div className="flex flex-col justify-center items-center flex-grow">
        <h3 className="text-4xl font-bold mb-4 text-center">BLOCKCHAIN</h3>

    </div>
    <ul className="mt-4 text-[#383838] space-y-2">
        
        <li className='bg-[#383838]'>✓ Smart Contract Execution</li>
        <li className='bg-[#383838]'>✓ Secure Transactions</li>
    </ul>
</div>

    
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 p-8">
      <TechnologyCard src="/sol.png" alt="Solidity Logo" title="Solidity" />
      <TechnologyCard src="/sol6.png" alt="Ethereum Logo" title="ERC-20" />
      <TechnologyCard src="/sol2.png" alt="Binance Logo" title="Binance" />
      <TechnologyCard src="/sol3.png" alt="WAGMI Logo" title="WAGMI" />
      <TechnologyCard src="/sol4.png" alt="Web3.js Logo" title="Web3 js" />
      <TechnologyCard src="/sol5.png" alt="Subgraph Logo" title="Subgraph" />
      <TechnologyCard src="/sol6.png" alt="Ethers.js Logo" title="Ether js" />
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-center  items-center md:items-start mt-4 max-w-5xl mx-auto border border-gray-500">
    
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 p-8">
      <FrontendCard src="/f1.png" alt="Next Logo" title="Next Js" />
      <FrontendCard src="/f2.png" alt="React Logo" title="React Js" />
      <FrontendCard src="/typescript.png" alt="Typescript Logo" title="TypeScript" />
      <FrontendCard src="/programing.png" alt="Angular Logo" title="Angular" />
      <FrontendCard src="/structure.png" alt="React Native Logo" title="React Native" />
      
    </div>
    <div className="bg-[#383838] flex-1 p-20 flex flex-col justify-center  items-center border-r border-gray-500">
    <ul className="mt-4 text-[#383838] space-y-2">
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        
        </ul>
      <h3 className="text-4xl font-bold mb-4">FRONTEND</h3>
      <p className="text-center text-lg text-gray-400">
      
    </p>
    <ul className="mt-4 text-[#383838] space-y-2">
      <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
      <li className='bg-[#383838]'>✓ Smart Contract Execution</li>
      <li className='bg-[#383838]'>✓ Secure Transactions</li>
      <li className='bg-[#383838]'>✓ Secure Transactions</li>
    </ul>
    </div>

    
    
  </div>
  <div className="flex flex-col md:flex-row justify-center mt-4  items-center md:items-start max-w-5xl mx-auto border border-gray-500">
    
    <div className="bg-[#383838] flex-1 p-20 flex flex-col justify-center  items-center border-r border-gray-500">
    <ul className="mt-4 text-[#383838] space-y-2">
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className=''></li>
        </ul>
      <h3 className="text-4xl font-bold mb-4">BACKEND</h3>
      <p className="text-center text-lg text-gray-400">
      
    </p>
    <ul className="mt-4 text-gray-400 space-y-2">
      <li className='text-[#383838]'>✓ Decentralized Ledger</li>
      <li className='text-[#383838]'>✓ Smart Contract Execution</li>
      <li className='text-[#383838]'>✓ Secure Transactions</li>
    </ul>
    </div>

    
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 p-8"> 
      <BackendCard src="/node.svg" alt="Node Logo" title="Node Js" />
      <BackendCard src="/express1.png" alt="Express Logo" title="Express Js" />
      
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-center  items-center md:items-start mt-4 max-w-5xl mx-auto border border-gray-500">
    {/* Left Section */}
    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-3 p-8">
      <DatabaseCard src="/mongodb.png" alt="Next Logo" title="Next Js" />
      <DatabaseCard src="/d2.png" alt="React Logo" title="React Js" />
      <DatabaseCard src="/d3.png" alt="Typescript Logo" title="TypeScript" />
      
      
    </div>
    <div className="bg-[#383838] flex-1 p-20 flex flex-col justify-center  items-center border-r border-gray-500">
      
    <ul className="mt-4 text-[#383838] space-y-2">
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
        </ul><h3 className="text-4xl font-bold mb-4">DATABASE</h3>
      <p className="text-center text-lg text-gray-400">
      
    </p>
    <ul className="mt-4 text-[#383838] space-y-2">
      <li className='bg-[#383838]'>✓ Decentralized Ledger</li>
      <li className='bg-[#383838]'>✓ Smart Contract Execution</li>
      <li className='bg-[#383838]'>✓ Secure Transactions</li>
      <li className='bg-[#383838]'>✓ Secure Transactions</li>
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
