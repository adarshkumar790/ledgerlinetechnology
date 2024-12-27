import ContactForm from '@/components/Contact/Contactform';
import Navbar from '@/components/Navbar';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="relative w-full h-[445px] bg-cover bg-center" style={{ backgroundImage: 'url("/contact.png")' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 to-black/40"></div>
      <div className="absolute inset-0">
        <div className="absolute w-[300px] h-[300px] bg-blue-400 opacity-30 rounded-full blur-[150px] top-10 left-10"></div>
        <div className="absolute w-[200px] h-[200px] bg-purple-400 opacity-30 rounded-full blur-[120px] bottom-10 right-10"></div>
      </div>
    </div>
    <ContactForm/>
    </>
  );
};

export default ContactUs;
