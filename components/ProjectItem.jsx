import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({title,backgroundImg,projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-blue-300 to-purple-300 '>
                <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/' />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                    <h3 className='text-2xl text-gray-800 tracking-wider text-center pb-5'>{title}</h3>
                    <Link href={projectUrl}>
                        <p className=' pb-4 pt-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                    </Link>
                </div>
            </div>
  )
}

export default ProjectItem



            