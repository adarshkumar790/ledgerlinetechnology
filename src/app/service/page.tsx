import Navbar from '@/components/Navbar';
import Ourwork from '@/components/Service/Ourwork';
import ScopeWork from '@/components/Service/Workscope';
import Serproject from '@/components/Service/Service';
import Image from 'next/image';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full font-sans">
        {/* Header Section */}

        {/* Services Section */}
        <section className="bg-white text-black py-28 px-8">
          <div className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-start md:items-start gap-4">
            {/* Left Side */}
            <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left ml-6">
              <h2 className="text-sm uppercase tracking-widest font-light mb-2 text-[#000000]">
                We Provide Outsourced
              </h2>
              <h1 className="text-5xl font-bold mb-3 text-[#000000]">IT SERVICES</h1>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 text-center md:text-left mr-6">
              <p className="mb-6 text-[#000000]">
                We provide a range of IT services to help businesses leverage technology effectively. Our offerings include
                cloud computing for scalable and cost-efficient solutions, cybersecurity to protect systems and data, and
                software development for tailored applications.
              </p>
              <button className="bg-[#83868A] text-[#FFFFFF] font-bold py-1 px-2  hover:bg-black flex items-center gap-2">
                <span>Explore More</span> 
                <span><Image src="/rightservice.png" alt="Arrow" width={20} height={20} /></span>
              </button>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="relative w-full max-w-4xl -top-40 mx-auto">
          <Image
            src="/servicess.png"
            alt="Services Background"
            width={200}
            height={150}
            layout="responsive"
            className="object-cover"
          />
        </section>
      </div>
      <Ourwork/>
      <ScopeWork/>
      <Serproject/>
      <Footer/>
          </>
  );
}
