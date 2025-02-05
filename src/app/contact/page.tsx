import ContactForm from '@/components/Contact/Contactform';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Desktop Background Video */}
      <div className="relative hidden md:block md:w-full h-[300px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ledgerline.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-black/40"></div>
        
        {/* Blurred Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full blur-[150px] top-10 left-10"></div>
          <div className="absolute w-[200px] h-[200px] bg-purple-400 opacity-30 rounded-full blur-[120px] bottom-10 right-10"></div>
        </div>
      </div>

      {/* Mobile Background Image */}
      <div className="relative  md:block w-full h-[200px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-[100%] object-cover"
        >
          <source src="/ledgerline.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-black/40"></div>
        
        {/* Blurred Light Effects */}
        <div className="absolute inset-0">
          <div className="absolute w-[150px] h-[150px] bg-blue-400 opacity-30 rounded-full blur-[75px]  left-5"></div>
          <div className="absolute w-[100px] h-[100px] bg-purple-400 opacity-30 rounded-full blur-[60px] bottom-5 right-5"></div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 sm:px-2 mb-1">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
