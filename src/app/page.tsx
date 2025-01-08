"use client";
import Achievement from '@/components/Home/Achievment';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Home/Service';
import TeamMembers from '@/components/Home/TeamMember';
import Technologies from '@/components/Home/Technologies';
import CompanyPartners from '@/components/Home/client';
import TestimonialSlider from '@/components/Home/clienttestimonial';
import React, { useEffect, useRef } from 'react';

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);  // Explicitly type the videoRef

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;  // Adjust the speed here (e.g., 0.5 for slower speed)
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black bg-cover bg-center bg-no-repeat h-[218px] md:h-[40vh] lg:h-[100vh] relative">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ledgerline.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>

        <main className="flex items-center justify-center h-full">
          <div className="relative w-full h-full overflow-hidden">
            {/* Apply the animation class here */}
            <div className="absolute text-gray-400 text-7xl inset-0 ml-40 font-bold mt-24 animate-slideInFromBehind">
              LEDGERLINE TECHNOLOGY
            </div>
          </div>
        </main>
      </div>

      <Services />
      <Achievement />
      <Technologies />
      <CompanyPartners />
      <TestimonialSlider />
      <TeamMembers />
      <Footer />
    </>
  );
};

export default Home;
