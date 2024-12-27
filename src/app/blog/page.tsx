import BlogCard from "@/components/Blog/Blogcard";
import BlogCard2 from "@/components/Blog/Blogcard2";
import BlogCards from "@/components/Blog/Blogcards";
import BlogCards2 from "@/components/Blog/Blogcards2";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const BlogSection: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Blog Title */}
        <h2 className="text-5xl font-bold tracking-tight text-[#000000]">
          Blog
        </h2>
        {/* Divider */}
        <div className="mt-2 border-t-2 border-gray-400 w-16 mx-auto" />
        {/* Blog Description */}
        <p className="mt-4 text-lg text-[#000000]">
          Stay ahead with expert insights, innovative ideas, and the latest
          trends. Our blog is your destination for inspiration, knowledge, and
          actionable tips to thrive in today’s fast-paced world.
        </p>
      </div>
    </div>
    <BlogCard/>
    <BlogCards/>
    <BlogCard2/>
    <BlogCards2/>
    <Footer/>
    </>
  );
};

export default BlogSection;
