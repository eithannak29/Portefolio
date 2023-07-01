import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import eithan from "../public/eithan.png";
import { useState } from "react";
import coolBackground from '../public/cool-background.svg';


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

      <main className="bg-fixed px-10 md:px-20 lg:px-40" style={{ backgroundImage: `url('/cool-background.svg')`,backgroundRepeat: 'no-repeat' ,backgroundSize: 'cover'  }}>
        <section id="About_Me" className="min-h-screen">
          <nav className="flex items-center justify-between p-4 text-white">
            <div className="flex items-center"></div>
            <div className="flex items-center">
              <a className="text-lg px-4 hover:text-blue-400" href="#Home">
                Home
              </a>
              <a className="text-lg px-4 hover:text-blue-400" href="#Projects">
                Projects
              </a>
              <a className="text-lg px-4 hover:text-blue-400" href="#Skills">
                Skills
              </a>
              <a className="text-lg px-4 hover:text-blue-400" href="#Contact">
                Contact
              </a>
            </div>
          </nav>

          <div id="Home" className="text-center p-10">
            <h1 className="text-5xl text-blue-400 font-medium font-montserrat">
              Eithan Nakache
            </h1>

            <p className="text-md py-5 leading-8 text-gray-900">
              Hi, I am Eithan, a 22 years old engineering student in computer
              science at EPITA. I am passionate about new technologies and I am
              always looking for new challenges.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a
              className="transform transition-all duration-300 hover:scale-150 hover:shadow-xl"
              href="https://www.linkedin.com/in/eithan-nakache-49254a195/"
            >
              {" "}
              <AiFillLinkedin />{" "}
            </a>
            <a
              className="transform transition-all duration-300 hover:scale-150 hover:shadow-xl"
              href="https://github.com/eithannak29"
            >
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

        <section id="Projects" className="py-5">
          <h2 className="text-5xl text-center text-blue-400 font-medium font-montserrat">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center">
                <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                  Shell 42sh
                </h3>
                <img
                  className="object-scale-down h-8 w-16"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                />
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />        
              </div>

              <p className="py-5 text-gray-500">
                Programming of a POSIX compliant command interpreter in C
              </p>
              <a className="bg-gray-400 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>

            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Chess Engine | AI
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Implementation of a chess engine and an AI to play against it in
                C++
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>

            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                OCR
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Optical character recognition project to extract sudoku grids
                from images and solve them in C
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Dimensions
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Video game project in which we had to create a 3D game in Unity
              </p>
              <a
                className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                href="https://eithannakache.wixsite.com/dimensions"
              >
                View
              </a>
            </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              < div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Malloc
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Implementation of the malloc, free and realloc functions in C
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Spider
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Implementation of a web server in C++, using the Boost library
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Tiger Compiler
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Implementation of a compiler for the Tiger language in C++
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>
          
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
            <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                Portfolio
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
            </div>
              <p className="py-5 text-gray-500">
                This portfolio website was built using Next.js and Tailwind CSS
              </p>
              <a
                className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
                href="https://github.com/eithannak29/Portefolio"
              >
                View
              </a>
            </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                EvalExpr
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Implementation of a calculator in C with the shunting-yard algorithm and a stack data structure
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
              </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
              <div className="flex items-center">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
                JWS
              </h3>
              <img className="object-scale-down h-8 w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
              </div>
              <p className="py-5 text-gray-500">
                Implementation of a quarkus web server in Java
              </p>
              <a className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
                View
              </a>
            </div>
          </div>
        </section>

        <section className="py-10">
          <h2
            id="Skills"
            className="text-5xl text-center text-blue-400 font-medium font-montserrat"
          >
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 mt-10">
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md ">
              <h3 className="text-xl text-blue-400 font-medium font-montserrat border-b-4">
                Languages
              </h3>
              <ul className="py-5 flex flex-wrap justify-center">
                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  />
                </li>
                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  />
                </li>

                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  />
                </li>
                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
                  />
                </li>
                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  />
                </li>
                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  />
                </li>
                <li className="py-3">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg"
                  />
                </li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md ">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat border-b-4">
                Tools
              </h3>
              <ul className=" py-5 flex flex-wrap justify-center">
                <li className="py-2">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-24 w-48 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="Contact" className="py-20">
          <h2 className="text-5xl text-center text-blue-400 font-medium font-montserrat">
            Contact
          </h2>
          <div className="grid py-10 justify-center">
            <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
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
