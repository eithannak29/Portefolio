import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import { DiJava } from "react-icons/di";
import Image from 'next/image'
import eithan from "../public/eithan.png"
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Eithan Nakache Portefolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href='eithan.ico' />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'></h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() =>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              {/* <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5' href="#">Resume</a></li> */}
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Eithan Nakache</h2>
            <p className='text-md py-5 leading-8 text-gray-600'>
              Hi, I'm Eithan, a 21 years old engineering student in computer science at EPITA.
              I'm passionate about new technologies and I'm always looking for new challenges.
              </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-500'>
          <a href='https://www.linkedin.com/in/eithan-nakache-49254a195/'> <AiFillLinkedin/> </a>
          <a href="https://github.com/eithannak29"> <AiFillGithub/> </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={eithan} layout='fill' objectFit='cover' />
          </div>
        </section>

        <section className='py-20'>
          <h2 className='text-5xl text-center text-teal-600 font-medium'>Skills</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10'>
            <div className='bg-white rounded-md p-5 shadow-md dark:bg-gray-800'>
              <h3 className='text-2xl text-teal-600 font-medium'>Languages</h3>
              <ul className='py-5'>
                <li className='py-5'>C</li>
                <li className='py-5'>C#</li>
                <li className='py-5'>OCaml</li>
                <li className='py-5'>CSS</li>
                <li className='py-5'>HTML</li>
                <li className='py-5'>Java</li>
                <li className='py-5'>Python</li>
              </ul>
            </div>
            <div className='bg-white rounded-md p-5 shadow-md dark:bg-gray-800'>
              <h3 className='text-2xl text-teal-600 font-medium'>Framework</h3>
              <ul className='py-5'>
                <li className='py-2'>MongoDB</li>
                <li className='py-2'>MySQL</li>
                <li className='py-2'>Git</li>
                <li className='py-2'>Linux</li>
                <li className='py-2'>Macos</li>
                <li className='py-2'>Windows</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <h2 className='text-5xl text-center text-teal-600 font-medium'>Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
            <div className='bg-white rounded-md p-5 shadow-md dark:bg-gray-800'>
              <h3 className='text-2xl text-teal-600 font-medium'>Project 1</h3>
              <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="#">View</a>
            </div>
            <div className='bg-white rounded-md p-5 shadow-md dark:bg-gray-800'>
              <h3 className='text-2xl text-teal-600 font-medium'>Project 2</h3>
              <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="#">View</a>
            </div>
            <div className='bg-white rounded-md p-5 shadow-md dark:bg-gray-800'>
              <h3 className='text-2xl text-teal-600 font-medium'>Project 3</h3>
              <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="#">View</a>
            </div>
          </div>
        </section>

        {/* <section className='py-20'>
          <h2 className='text-5xl text-center text-teal-600 font-medium'>Contact</h2>
          <div className='flex justify-center mt-10'>
            <form className='w-1/2'>
              <div className='flex flex-col mb-6'>
                <label className='mb-2 font-medium text-gray-700 text-lg'>Name</label>
                <input className='border rounded-md px-4 py-2 outline-none' type="text" />
              </div>
              <div className='flex flex-col mb-6'>
                <label className='mb-2 font-medium text-gray-700 text-lg'>Email</label>
                <input className='border rounded-md px-4 py-2 outline-none' type="email" />
              </div>
              <div className='flex flex-col mb-6'>
                <label className='mb-2 font-medium text-gray-700 text-lg'>Message</label>
                <textarea className='border rounded-md px-4 py-2 outline-none' name="" id="" cols="30" rows="4"></textarea>
              </div>
              <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' type="submit">Send</button>
            </form>
          </div>
        </section> */}
      </main>
    </div>
  )
}
