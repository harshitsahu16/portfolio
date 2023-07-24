import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/buzzai.jpg';
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
          <h2 className='py-2'> BUZZ AI </h2>
          <h3> Next Js | Typescript | Tailwind | Shadcn UI | Clerk | Crisp </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>

          🚀 Introducing BUZZ AI: Revolutionizing Creativity with the Power of AI Bots! 🤖🎨🎬🎵💻

I am thrilled to share with you my latest project, BUZZ AI, a groundbreaking integration of multiple AI bots that promises to redefine the boundaries of creativity and problem-solving. Leveraging cutting-edge technologies such as Next.js, Tailwind CSS, and UI component Shadcn UI, BUZZ AI is a one-of-a-kind platform that utilizes the potential of AI to generate mesmerizing content in various forms.

The foundation of BUZZ AI lies in its five powerful AI bots:

1️⃣ *Conversation Bot:* Say goodbye to mundane conversations! With the Conversation Bot, users can interact with AI-generated responses that are both engaging and contextually relevant. This feature opens up exciting possibilities for chat simulations, virtual assistants, and much more.

2️⃣ *Image Generator Bot:* Unleash your artistic vision with the Image Generator Bot! By inputting simple prompts, users can have AI create stunning visual artworks, custom illustrations, and even realistic images, saving hours of manual labor.

3️⃣ *Video Generator Bot:* Lights, camera, AI action! The Video Generator Bot empowers users to create captivating video content effortlessly. From short clips to fully-fledged animations, this bot transforms your ideas into eye-catching videos with a few keystrokes.

4️⃣ *Music Generator Bot:* Let the AI be your symphony conductor! The Music Generator Bot composes original melodies, harmonies, and rhythms based on user prompts. It's a treasure trove for musicians, content creators, and anyone who craves unique soundscapes.

5️⃣ *Code Generator Bot:* Simplify coding complexities with the Code Generator Bot. From snippets to entire functions, this AI companion generates efficient and error-free code, reducing development time and boosting productivity.

But that's not all! To ensure privacy and security, BUZZ AI integrates Clerk authentication, guaranteeing a smooth and protected user experience.

Moreover, I've also integrated the Crisp Talk Bot feature, allowing users to seek support and guidance while exploring BUZZ AI's limitless potential.

BUZZ AI represents a significant leap forward in AI-powered creativity, thanks to the integration of OpenAI API for conversation, image, and code generation, as well as Replicate API for video and music creation.
          </p>
          <a
            href='https://buzz-ai.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/harshitsahu16/Buzz-AI'
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
                <RiRadioButtonFill className='pr-1' /> Next Js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCss
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Shadcn UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Clerk Auth
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Crisp Bot
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
