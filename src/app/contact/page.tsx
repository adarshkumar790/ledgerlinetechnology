import ContactForm from '@/components/Contact/Contactform';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <>
      <Navbar />
      
      <div 
        className="relative hidden md:block md:w-full h-[300px] bg-cover bg-center" 
        style={{ backgroundImage: 'url("/contact.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-black/40"></div>
        <div className="absolute inset-0">
          <div 
            className="absolute w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full blur-[150px] top-10 left-10"
          ></div>
          <div 
            className="absolute w-[200px] h-[200px] bg-purple-400 opacity-30 rounded-full blur-[120px] bottom-10 right-10"
          ></div>
        </div>
      </div>

      
      <div 
        className="relative block md:hidden w-full h-[140px] bg-cover bg-center" 
        style={{ backgroundImage: 'url("/ledgerimage.png")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-black/40"></div>
        <div className="absolute inset-0">
          <div 
            className="absolute w-[150px] h-[150px] bg-blue-400 opacity-30 rounded-full blur-[75px] top-5 left-5"
          ></div>
          <div 
            className="absolute w-[100px] h-[100px] bg-purple-400 opacity-30 rounded-full blur-[60px] bottom-5 right-5"
          ></div>
        </div>
      </div>

      <div className="px-4 sm:px-2 mb-1">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
