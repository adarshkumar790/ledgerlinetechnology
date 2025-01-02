"use client";
import React from "react";
import Image from "next/image";

const ProfileCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-48">
          <Image
            src="/tm1.png" // Replace with your image path
            alt="Alex Smith"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>

        {/* Skewed White Border */}
        <div className="relative -mt-4 z-10">
          <div className="h-16 bg-white transform skew-y-[-8deg]"></div>
        </div>

        {/* Content Section */}
        <div className="bg-white p-2 text-center">
          {/* Name */}
          <h2 className="text-xl font-bold text-gray-800">Alex Smith</h2>
          <div className="w-12 h-1 bg-gray-800 mx-auto my-2"></div>

          {/* Description */}
          <p className="text-sm text-gray-600">
            I am John Alex Smith, a detail-oriented web developer committed to
            coding clean, efficient, and visually appealing websites.
          </p>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-100 py-4 flex justify-center items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
