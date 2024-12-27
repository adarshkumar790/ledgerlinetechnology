
import Image from 'next/image';

export default function Ourwork() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-6">
        
        <div className="mb-8 text-left">
          <p className="text-2xl font-bold  mb-2">Our Work <span className='text-gray-600 font-bold'>___</span></p>
          <p className="text-2xl font-bold">
            Commitment to Quality & Innovation
          </p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          <div className="space-y-6">
            <p className="text-gray-300">
              We are dedicated to delivering high-quality solutions to our <br /> clients. Our work is focused on
              developing cutting-edge software <br /> and web applications that help businesses and organizations meet <br />
              their goals and stay competitive in today’s market.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-xl mr-3">💡</span>
                <p>
                  Developing a healthcare startup’s mobile app enabling patients to manage medical records and
                  communicate with healthcare providers.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-xl mr-3">🔒</span>
                <p>
                  Creating a secure and transparent online marketplace using blockchain for trading digital assets.
                </p>
              </li>
            </ul>
          </div>

        
          <div className="flex flex-row items-center">
            <div className="w-full flex justify-center -mt-20">
              <Image
                src="/our1.png"
                alt="Blockchain Concept"
                width={150}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="w-full flex justify-center -mt-48">
              <Image
                src="/our2.png"
                alt="Blockchain Visual"
                width={150}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="w-full flex justify-center -mt-20">
              <Image
                src="/our3.png"
                alt="Customer Support"
                width={150}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
