"use client";

import Image from 'next/image';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_87911vl',  
          'template_6djdx4j',
          form.current,
          'rxRMEO4oVrVEj_O-b'
        )
        .then(
          () => {
            toast.success('Your data has been sent successfully!', {
              position: "top-center",
            });
          },
          (error) => {
            toast.error(`Failed to send data: ${error.text}`, {
              position: "top-center",
            });
          }
        );
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8 mb-12">
        <h3 className="text-[#FFFFFF] font-semibold text-4xl ">GET IN TOUCH</h3>
        <h3 className="text-[#FFFFFF] text-xl">Get in touch with us for any inquiries or support. We’re here to assist you promptly.</h3>
      </div>

      <div className="relative w-full min-h-screen flex items-center">
        
        <div className="absolute inset-0 bg-[#393D42] text-white p-8 flex flex-col justify-center mt-60">
          <div className="ml-6 md:mt-0 mt-40">
            <p className="mb-6 md:text-2xl text-sm">
              We’d be delighted to connect with you! <br /> Complete the form, and we’ll get back <br /> to you at the earliest opportunity.
            </p>
            <div className="space-y-4 ">
              <div className="flex items-center space-x-3">
                <Image src="/con1.png" alt="Call" width={20} height={20} />
                <span className='text-xl'>91 2657964445</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image src="/con2.png" alt="Email" width={20} height={20} />
                <span className='text-xl'>contact@ledgerline.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Image src="/con3.png" alt="Address" width={20} height={20} />
                <span className='text-xl'>901, Silver Samnway, Munjmauda, Akota, Vadodara 390020</span>
              </div>
            </div>
          </div>
        </div>

      
        <div className="relative z-10 bg-white md:-mt-0 -mt-96 md:top-0 top-8 p-6 w-[78%] md:w-[28%] max-w-md ml-auto md:mr-32 mr-9  shadow-lg rounded-2xl overflow-hidden">
          <h2 className="text-xl font-semibold text-[#000000] mb-4">Send us a message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-1">
            <div>
              <label className="block   text-[#000000]">First Name</label>
              <input
                type="text"
                name="first_name"
                className="w-full text-gray-800 mb-1 md:mb-2 border-0 border-b border-b-gray-700  focus:outline-none focus:ring-0 focus:border-b-blue-500"
                style={{ borderRadius: "0" }}
                required
              />
            </div>
            <div>
              <label className="block  text-[#000000]">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="w-full text-gray-800 mb-1 md:mb-2 border-0 border-b border-b-gray-700  focus:outline-none focus:ring-0 focus:border-b-blue-500"
                style={{ borderRadius: "0" }}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-[#000000]">Your Email</label>
              <input
                type="email"
                name="email"
                className="w-full text-gray-800 mb-1 md:mb-2 border-0 border-b border-b-gray-700  focus:outline-none focus:ring-0 focus:border-b-blue-500"
                style={{ borderRadius: "0" }}
                required
              />
            </div>
            <div>
              <label className="block  text-[#000000]">Your Message</label>
              <textarea
                name="message"
                className="w-full text-gray-800 mb-1 md:mb-2 border-0 border-b border-b-gray-700  focus:outline-none focus:ring-0 focus:border-b-blue-500"
                style={{ borderRadius: "0" }}
                rows={3}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
