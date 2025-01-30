import Image from 'next/image';

export default function Cpm() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-4  max-w-5xl p-8">
      
        <div className="md:col-span-2 space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <img
                src="/abo.png"
                alt="Team collaboration"
                width={150}
                height={130}
                className="object-cover  w-[140px] md:w-full h-[120px] md:h-[200px] mb-4 "
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="/abo2.png"
                alt="Handshake"
                width={250}
                height={300}
                className="object-cover w-full md:h-[300px] h-[200px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden md:mt-[-100px] mt-[-80px]">
              <Image
                src="/abo3.png"
                alt="Technology graphic"
                width={250}
                height={300}
                className="object-cover w-full md:h-[340px] h-[200px] "
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="/abo4.png"
                alt="Team meeting"
                width={150}
                height={130}
                className="object-cover w-full md:h-[240px] h-[120px] "
              />
            </div>
          </div>
        </div>

        
        <div className="md:col-span-3 bg-black md:p-6 p-3">
          <div className="space-y-8">
            
            <div className="flex justify-center mb-8">
              <img
                src="/abu1.png"
                alt="Values, Purpose, Mission"
                className="h-full object-cover w-240 h-240 md:w-180 md:h-150"
              />
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}
