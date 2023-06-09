import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/movix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={propertyImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> Movix </h2>
          <h3>React JS / SCSS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>

My project is an IMDB clone that has been built using the IMDB API and ReactJS. The aim of the project was to create a responsive and user-friendly platform that would allow users to search for and discover information about their favorite movies and TV shows.

Using ReactJS, I was able to create a dynamic user interface that allows users to easily search for titles using a variety of filters, including genre, year, and keyword. The results are then displayed in a visually appealing and intuitive way, with detailed information about each title including cast, crew, ratings, and more.

One of the key features of my IMDB clone is the ability for users to create and save their own watchlists, allowing them to keep track of titles they're interested in or want to watch later. Users can also leave ratings and reviews for movies and TV shows, providing valuable feedback for other users and helping to improve the overall experience.

Overall, my IMDB clone provides a comprehensive and engaging way for users to explore the world of movies and TV shows, all while leveraging the power of the IMDB API and the flexibility of ReactJS to deliver an exceptional user experience.
          </p>
          <a
            href='https://github.com/harshitsahu16/Movix-movies-rating-'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://movix-2.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
