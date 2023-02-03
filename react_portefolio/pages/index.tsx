import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import eithan from "../public/eithan.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "" : "dark"}>
      <Head>
        <title>Eithan Nakache</title>
        <meta name="Eithan Nakache Portfolio " content="" />
        <link rel="icon" href="eithan.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css?"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section id="About_Me" className="min-h-screen">
          <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <div className="flex items-center"></div>
            <div className="flex items-center">
              <a className="text-lg px-4 hover:text-blue-400" href="#Home">
                Home
              </a>
              <a className="text-lg px-4 hover:text-blue-400" href="#Projects">
                Projects
              </a>
              <a className="text-lg px-4 hover:text-blue-400" href="#Contact">
                Contact
              </a>
            </div>
          </nav>

          <div id="Home" className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-400 font-medium font-montserrat">
              Eithan Nakache
            </h2>
            <p className="text-md py-5 leading-8 text-gray-600">
              Hi, I am Eithan, a 21 years old engineering student in computer
              science at EPITA. I am passionate about new technologies and I am
              always looking for new challenges.
            </p>
          </div>
          <div  className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a className="transform transition-all duration-300 hover:scale-150 hover:shadow-xl" href="https://www.linkedin.com/in/eithan-nakache-49254a195/">
              {" "}
              <AiFillLinkedin />{" "}
            </a>
            <a className="transform transition-all duration-300 hover:scale-150 hover:shadow-xl" href="https://github.com/eithannak29">
              {" "}
              <AiFillGithub />{" "}
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-400 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              alt="Picture of the author"
              src={eithan}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section id="Projects" className="py-20">
          <h2 className="text-5xl text-center text-blue-400 font-medium font-montserrat">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-white rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Shell 42sh
              </h3>
              <p className="py-5 text-gray-500">
                Programming of a POSIX compliant command interpreter in C
              </p>
              <a
                 className="bg-gray-900 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                href="https://github.com/eithannak29/ocr"
              >
                View
              </a>
            </div>

            <div className="bg-white rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Portfolio
              </h3>
              <p className="py-5 text-gray-500">
                This portfolio website was built using Next.js and Tailwind CSS
              </p>
              <a
                 className="bg-gray-900 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                href="https://github.com/eithannak29/Portefolio"
              >
                View
              </a>
            </div>

           

            <div className="bg-white rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Dimensions
              </h3>
              <p className="py-5 text-gray-500">
                Video game project in which we had to create a 3D game in Unity
              </p>
              <a
                className="bg-gray-900 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                href="https://eithannakache.wixsite.com/dimensions"
              >
                View
              </a>
            </div>

            <div className="bg-white rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                OCR
              </h3>
              <p className="py-5 text-gray-500">
                Optical character recognition project to extract sudoku grids
                from images and solve them in C
              </p>
              <a
                 className="bg-gray-900 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                href=""
              >
                View
              </a>
            </div>
          </div>
        </section>

        <section id="Contact" className="py-20">
          <h2 className="text-5xl text-center text-blue-400 font-medium font-montserrat">
            Contact
          </h2>
          <div className="grid py-10 justify-center">
            <div className="bg-white rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800">
              <a
                href="mailto:eithannakache@gmail.com"
                className="text-xl text-gray-500 font-medium font-montserrat block hover:text-blue-400"
              >
                eithannakache@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
