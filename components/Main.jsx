import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center '>
        <div>
            <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#5651e5]'>Harshit</span>
            </h1>
            <h1 className='py-2 text-gray-700'>
               A Full-Stack Web Developer 
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a passionate B.Tech student pursuing Computer Science with a specialization in Artificial Intelligence and Machine Learning at Pranveer Singh Institute of Technology, Kanpur. Alongside my studies, I am actively honing my skills as a full-stack web developer, focusing on creating impactful and user-friendly web experiences.</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/harshit-sahu-413691227/'
              target='_blank'
              rel='noreferrer'
            >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                </a>
                <a
              href='https://github.com/harshitsahu16'
              target='_blank'
              rel='noreferrer'
            >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                </a>
                <a target='_blank' href='mailto:harshitsahu160@gmail.com'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                </a>
                <a target='_blank' href="https://drive.google.com/file/d/12l0h2NW7T2sSCivri-t7ZC7n48gg5gfl/view?usp=share_link">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
