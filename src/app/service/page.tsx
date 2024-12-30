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
      <section className="bg-white text-black md:py-8 md:px-8 py-24 px-8">
        <div className="max-w-5xl mx-auto mb-20 md:mt-12  flex flex-col md:flex-row items-start md:items-start gap-4">
          {/* Left Side */}
          <div className="md:w-1/2 md:mb-6 mb-2  md:mb-0 text-center text-left ml-6">
            <h2 className="text-sm uppercase tracking-widest font-light md:mb-2 mb-0 text-[#000000]">
              We Provide Outsourced
            </h2>
            <h1 className="md:text-4xl text-4xl md:font-bold font-extrabold md:mb-3   text-[#000000]">IT SERVICES</h1>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 text-center md:text-left mr-6">
  <p className="md:mb-6 mb-2 text-[#000000]">
    We provide a range of IT services to help businesses leverage technology effectively. Our offerings include
    cloud computing for scalable and cost-efficient solutions, cybersecurity to protect systems and data, and
    software development for tailored applications.
  </p>
  <div className="flex justify-center md:justify-start">
    <button className="bg-[#83868A] text-[#FFFFFF] font-bold py-1 px-2 hover:bg-black flex items-center gap-2">
      <span>Explore More</span>
      <span>
        <Image src="/rightservice.png" alt="Arrow" width={20} height={20} />
      </span>
    </button>
  </div>
</div>

        </div>

        {/* Image Section with Reduced Size */}
        
        <div className="flex justify-center md:-mb-60 -mb-40">
  <Image
    src="/servicess.png"
    alt="Services Background"
    width={1000} // Increased width
    height={800} // Increased height
    className="object-cover"
  />
</div>
      </section>
      <Ourwork />
      <ScopeWork />
      <Serproject />
      <Footer />
    </>
  );
}
