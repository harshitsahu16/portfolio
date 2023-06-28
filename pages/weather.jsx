import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/weathers.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'> Weather App </h2>
          <h3>HTML / CSS / JavaScript </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          Introducing our Weather App, a feature-rich web application designed to provide you with instant weather updates for any city or country. Created using HTML, CSS, and JavaScript, our app seamlessly integrates with the Weather API to fetch real-time weather data and deliver accurate forecasts.

With a user-friendly interface and intuitive design, our Weather App makes it effortless to search for the weather in any location around the globe. Simply enter the name of the city or country you want to know the weather for, and the app will instantly retrieve and display the current weather conditions.
Visualize the weather conditions with stunning graphics and icons that represent various weather patterns. Whether it's a sunny day, rainy weather, or a snowstorm, our app visually represents the current weather in an engaging and easy-to-understand manner.
          </p>
          <a
            href='https://harshitsahu16.github.io/harshit-weather-app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/harshitsahu16/harshit-weather-app'
            target='_blank'
            rel='noreferrer'
          >
            
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Weather API
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

export default twitch;
