import Image from 'next/image';
import React, { useState } from 'react';

// Sample JSON Data for Team Members
const teamData = [
  {
    id: 1,
    name: 'Dipak Patel',
    title: 'CEO',
    description: 'Leading the strategic vision, Dipak drives the company towards innovation and excellence, ensuring long-term growth and success.',
    image: '/mayanks.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
    },
  },
  {
    id: 2,
    name: 'Rishabh Yadav',
    title: 'COO',
    description: 'Overseeing daily operations and ensuring exceptional project delivery, Rishabh ensures seamless execution and customer satisfaction.',
    image: '/rishabhs.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
      linkdnlink: ''
    },
  },
  {
    id: 3,
    name: 'Mayank Kumar',
    title: 'Sr Blockchain Developer',
    description: 'A Senior Developer, excels in blockchain technology, crafting secure and scalable decentralized solutions.',
    image: '/mayanks.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
    },
  },
  {
    id: 4,
    name: 'Adarsh Kumar',
    title: 'Blockchain developer',
    description: 'A Blockchain Developer with a growing expertise in building decentralized applications.',
    image: '/adarsh.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
      linkdnlink: 'https://www.linkedin.com/in/adarsh-kumar-se/',
      twitterlink:'https://x.com/adarshK69180036',
      facebooklink:''
    },
  },
  {
    id: 5,
    name: 'Sneha Chouhan',
    title: 'UIUX designer',
    description: 'UI/UX Designer focused on creating intuitive, user-friendly, and visually engaging digital experiences through research, prototyping, and collaboration.',
    image: '/mayanks.png',
    social: {
      linkedin: '/ln.png',
      linkdinlink:'https://www.linkedin.com/in/sc2401/',
      twitter: '/tw.png',
      facebook: '/fa.png',
      facebooklink:'https://www.facebook.com/profile.php?id=100074773910081'
    },
  },
  {
    id: 6,
    name: 'Mital Gohil',
    title: 'Accountant',
    description: 'Detail-oriented Accountant with expertise in managing financial records, ensuring accuracy, and supporting business decisions through financial analysis.',
    image: '/mital.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
    },
  },
  {
    id: 7,
    name: 'Dhara Gohil',
    title: 'Accountant',
    description: 'Detail-oriented Accountant with expertise in managing financial records, ensuring accuracy, and supporting business decisions through financial analysis.',
    image: '/dhara.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
      
    },
  },
  {
    id: 6,
    name: 'Shailyarajsinh Mahida',
    title: 'Fullstack Developer',
    description: 'Full-Stack Developer skilled in React, Node.js, and MongoDB, building scalable and efficient web applications.',
    image: '/shailya.png',
    social: {
      linkedin: '/ln.png',
      twitter: '/tw.png',
      facebook: '/fa.png',
    },
  },
 
];

const TeamMembers: React.FC = () => {
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const visibleTeamMembers = teamData.slice(visibleStartIndex, visibleStartIndex + 2);

  const handleNext = () => {
    if (visibleStartIndex + 2 < teamData.length) {
      setVisibleStartIndex(visibleStartIndex + 2);
    }
  };

  const handlePrevious = () => {
    if (visibleStartIndex - 2 >= 0) {
      setVisibleStartIndex(visibleStartIndex - 2);
    }
  };

  return (
    <div className="min-h-screen bg-black text-black py-12 px-6 flex flex-col items-center">
      <div className="text-center md:text-4xl text-3xl font-bold mb-8 bg-white text-black pt-6 border border-white w-2/3 h-40 relative hidden lg:block">
        Our Best Team Members
        <span className="block w-16 h-1 bg-black mx-auto mt-2" />
        <p className="text-sm text-white mt-5">
          Meet our expert team members who excel at delivering impactful designs and efficient websites.
        </p>

        
        <button
          onClick={handlePrevious}
          className="absolute top-80 left-4 transform -translate-y-1/2 text-white text-3xl z-10 bg-black p-2 rounded-full hover:bg-gray-600"
          disabled={visibleStartIndex === 0}
        >
          <Image src="/left.png" alt="Left Arrow" width={30} height={30} />
        </button>

        {/* Team Member Cards */}
        <div className="absolute -bottom-110 left-[15%] flex space-x-8">
          {visibleTeamMembers.map((member) => (
            <div key={member.id} className="bg-[#83868A] text-black overflow-hidden w-72 shadow-lg">
              <Image src={member.image} alt={member.name}  width={160} height={160} className='ml-16'
                // className={`${member.id === 4 ? 'w-40 ml-16 mt-1' : member.id === 1 ? 'w-80 ml-8' : member.id === 1 ? 'w-30 ml-20' : member.id === 3 ? 'w-40 ml-20' : member.id === 2 ? 'w-96' : member.id === 7 ? 'w-40 ml-12' : member.id === 5 ? 'w-60 ml-8' : 'w-60'} h-40 object-cover`} 
              />
              <div className="relative -mt-4 z-10">
                <div className="h-16 bg-white transform skew-y-[-12deg]" />
              </div>
              <div className="p-4 bg-white -mt-8 h-48">
                <h3 className="text-sm font-bold mt-6 ml-2 mt-8">{member.name} ({member.title})</h3>
                <p className="text-sm text-gray-700 mt-0">{member.description}</p>
              </div>
              <div className="flex flex-center space-x-3 text-white bg-[#83868A] mt-4 mb-2 ml-20">
                <a href={member.social.linkdnlink} className="hover:text-blue-500">
                  <Image src={member.social.linkedin} alt="LinkedIn" width={25} height={20} />
                </a>
                <a href={member.social.twitterlink} className="hover:text-blue-400">
                  <Image src={member.social.twitter} alt="Twitter" width={25} height={20} />
                </a>
                <a href={member.social.facebooklink} className="hover:text-blue-700">
                  <Image src={member.social.facebook} alt="Facebook" width={25} height={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute top-80 right-4 transform -translate-y-1/2 text-white text-3xl z-10 bg-black p-2 rounded-full hover:bg-gray-600"
          disabled={visibleStartIndex + 2 >= teamData.length}
        >
          <Image src="/right.png" alt="Next" width={30} height={30} />
        </button>
      </div>

      {/* Mobile View */}
      <div className="min-h-screen bg-black py-12 px-2 flex flex-col items-center lg:hidden">
        <div className="relative text-center text-2xl font-bold text-black mb-8 bg-white w-full max-w-md sm:max-w-none mx-auto p-6 border border-white">
          <h2>Our Team Members</h2>
          <div className="w-16 h-1 bg-black mx-auto" />
        </div>
        
        <div className="relative w-full flex flex-col items-center">
          <div className="relative -mt-12 w-full flex space-x-1 overflow-hidden">
            {visibleTeamMembers.map((member) => (
              <div key={member.id} className="bg-[#83868A] text-black overflow-hidden w-40 shadow-lg rounded-lg">
                <Image src={member.image} alt={member.name}  width={130} height={130} className='ml-4'
                //  className={`${member.id === 4 ? 'w-40 ml-4 mt-1'  : member.id === 2 ? 'w-34 -ml-6' : member.id === 7 ? 'w-36 ml-6' : member.id === 5 ? 'w-44 -mb-4' : 'w-44'} h-40 object-cover`}
                
                 />
                <div className="relative -mt-4 z-10">
                  <div className="h-12 bg-white transform skew-y-[-12deg]" />
                </div>
                <div className="p-4 bg-white -mt-5 h-48">
                  <h3 className="text-sm font-bold mt-5">{member.name}</h3>
                  <p className="text-xs text-gray-700 mt-1 mb-12">{member.description}</p>
                </div>
                <div className="flex justify-center space-x-3 bg-[#83868A] py-2">
                  <a href={member.social.linkdnlink} className="hover:text-blue-500">
                    <Image src={member.social.linkedin} alt="LinkedIn" width={20} height={20} />
                  </a>
                  <a href={member.social.twitterlink} className="hover:text-blue-400">
                    <Image src={member.social.twitter} alt="Twitter" width={20} height={20} />
                  </a>
                  <a href={member.social.facebooklink} className="hover:text-blue-700">
                    <Image src={member.social.facebook} alt="Facebook" width={20} height={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-between w-full mt-2 px-4">
          <button
            onClick={handlePrevious}
            className="text-white text-lg bg-black px-4 py-2 rounded-full hover:bg-gray-600"
            disabled={visibleStartIndex === 0}
          >
            <Image src="/left.png" alt="Next" width={30} height={30} />
          </button>
          <button
            onClick={handleNext}
            className="text-white text-lg bg-black px-4 py-2 rounded-full hover:bg-gray-600"
            disabled={visibleStartIndex + 2 >= teamData.length}
          >
            <Image src="/right.png" alt="Next" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
