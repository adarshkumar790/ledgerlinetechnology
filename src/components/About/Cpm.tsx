import Image from 'next/image';

export default function Cpm() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl p-8">
      
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden">
              <img
                src="/abo.png"
                alt="Team collaboration"
                width={150}
                height={130}
                className="object-cover w-full h-[200px] mb-4"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="/abo2.png"
                alt="Handshake"
                width={250}
                height={300}
                className="object-cover w-full h-[300px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden mt-[-100px]">
              <Image
                src="/abo3.png"
                alt="Technology graphic"
                width={250}
                height={300}
                className="object-cover w-full h-[340px]"
              />
            </div>
            <div className="overflow-hidden">
              <Image
                src="/abo4.png"
                alt="Team meeting"
                width={150}
                height={130}
                className="object-cover w-full h-[240px]"
              />
            </div>
          </div>
        </div>

        
        <div className="md:col-span-3 bg-black p-6">
          <div className="space-y-8">
            
            <div className="flex justify-center mb-8">
              <img
                src="/abu1.png"
                alt="Values, Purpose, Mission"
                className="h-full object-cover w-180 h-150"
              />
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
