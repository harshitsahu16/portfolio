import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import MovixImg from '../public/assets/projects/movix.jpg';
import cryptoImg from '../public/assets/projects/paisaa.jpg'
import netflixImg from '../public/assets/projects/youtube.jpg'
import twitchImg from '../public/assets/projects/gym.jpg'
import ProjectItem from './ProjectItem';
import weatherImg from '../public/assets/projects/weathers.jpg'
import TwitterImg from '../public/assets/projects/twitter-clone.jpg';
import BuzzAi from '../public/assets/projects/buzzai.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem 
            title='Movix'
            backgroundImg={MovixImg}
            projectUrl='/property'
            />
            <ProjectItem 
            title='Crypto Hunter'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            />
            <ProjectItem 
            title='Youtube Clone'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            />
            <ProjectItem 
            title='Gym Website'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            />
            <ProjectItem 
            title='Weather'
            backgroundImg={weatherImg}
            projectUrl='/weather'
            />
            <ProjectItem 
            title='Twitter Clone'
            backgroundImg={TwitterImg}
            projectUrl='/twitter'
            />
            <ProjectItem 
            title='Buzz Ai Bot'
            backgroundImg={BuzzAi}
            projectUrl='/buzzai'
            />
            
        </div>

        </div>
      
    </div>
  )
}

export default Projects
