"use client";
import Achievement from '@/components/Home/Achievment';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Services from '@/components/Home/Service';
import TeamMembers from '@/components/Home/TeamMember';
import Technologies from '@/components/Home/Technologies';
import CompanyPartners from '@/components/Home/client';
import TestimonialSlider from '@/components/Home/clienttestimonial';
import React from 'react';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-[70vh] bg-black bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ledgerlinelogo.png')",
        }}
      >
        <main className="flex items-center justify-center h-full">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0">
              {/* Additional responsive content can go here */}
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
