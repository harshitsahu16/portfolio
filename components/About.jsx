import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a dedicated and enthusiastic individual with a deep passion for exploring web technologies. With a strong foundation in HTML, CSS, and JavaScript, I love working on web development projects that allow me to bring ideas to life. Proficient in JavaScript frameworks such as React.js , I leverage these tools to build dynamic and interactive user interfaces. Additionally, I have expertise in utilizing Tailwind CSS, enabling me to create visually stunning designs and streamline the development process. With a strong focus on front-end development, coupled with my knowledge of backend technologies such as Node.js and Express, I possess a comprehensive skill set to create robust and efficient web applications. Continuously expanding my knowledge and staying up-to-date with the latest industry trends, I am passionate about pushing the boundaries of web development and delivering exceptional results."
          </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
