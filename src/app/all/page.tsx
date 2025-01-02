import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      {/* Profile Card */}
      <div className="relative bg-white shadow-lg rounded-md overflow-hidden w-80">
        {/* Top Image Section */}
        <div className="relative">
          <Image
            src="/profile-image.jpg" // Replace with your image URL
            alt="Alex Smith"
            width={320}
            height={240}
            className="object-cover"
          />
        </div>

        {/* Slanted Section */}
        <div className="relative bg-white -mt-8 z-10">
          <div className="bg-white p-6 rounded-b-md shadow-lg transform -skew-y-12">
            <h3 className="text-xl font-bold text-center">Alex Smith</h3>
            <hr className="my-2 border-gray-300" />
            <p className="text-gray-600 text-sm text-center">
              I am John Alex Smith, a detail-oriented web developer committed to
              coding clean, efficient, and visually appealing websites.
            </p>
          </div>
        </div>

        {/* Footer Social Links */}
        <div className="flex justify-center items-center space-x-4 bg-gray-100 py-24">
          <a
            href="https://linkedin.com/in/alexsmith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <i className="fab fa-linkedin"></i> {/* Add LinkedIn Icon */}
          </a>
          <a
            href="https://twitter.com/alexsmith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition"
          >
            <i className="fab fa-twitter"></i> {/* Add Twitter Icon */}
          </a>
          <a
            href="https://facebook.com/alexsmith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <i className="fab fa-facebook"></i> {/* Add Facebook Icon */}
          </a>
        </div>
      </div>
    </div>
  );
}
