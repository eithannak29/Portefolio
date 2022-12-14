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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"/>

      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section id="About_Me" className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black hover:from-blue-200 hover:to-blue-600 text-white px-4 py-2 rounded-md ml-5"
                  href="#Skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black hover:from-blue-200 hover:to-blue-600 text-white px-4 py-2 rounded-md ml-5"
                  href="#Projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black hover:from-blue-200 hover:to-blue-600 text-white px-4 py-2 rounded-md ml-5"
                  href="#Contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-blue-400 font-medium font-montserrat">
              Eithan Nakache
            </h2>
            <p className="text-md py-5 leading-8 text-gray-600">
              Hi, I am Eithan, a 21 years old engineering student in computer
              science at EPITA. I am passionate about new technologies and I am
              always looking for new challenges.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a href="https://www.linkedin.com/in/eithan-nakache-49254a195/">
              {" "}
              <AiFillLinkedin />{" "}
            </a>
            <a href="https://github.com/eithannak29">
              {" "}
              <AiFillGithub />{" "}
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-blue-400 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image  alt="Picture of the author" src={eithan} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section className="py-20">
          <h2
            id="Skills"
            className="text-5xl text-center text-blue-400 font-medium font-montserrat"
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 mt-10">
            <div className="bg-white rounded-md p-5 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat border-b-4">Languages</h3>
              <ul className="py-5 flex flex-wrap justify-center">
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg"
                  />
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-md p-5 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat border-b-4">Tools</h3>
              <ul className=" py-5 flex flex-wrap justify-center">
                <li className="py-2">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                  />
                </li>
                <li className="py-5">
                  <img
                    className="object-scale-down h-32 w-64"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="Projects" className="py-20">
          <h2 className="text-5xl text-center text-blue-400 font-medium font-montserrat">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            <div className="bg-white rounded-md p-5 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">Portfolio</h3>
              <p className="py-5 mb-6 text-gray-500">
                This portfolio website was built using Next.js and Tailwind CSS.
              </p>
              <a
                className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black hover:from-blue-200 hover:to-blue-600 text-white  px-4 py-2 rounded-md"
                href="https://github.com/eithannak29/Portefolio"
              >
                View
              </a>
            </div>
            <div className="bg-white rounded-md p-5 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium  font-montserrat">OCR</h3>
              <p className="py-5 text-gray-500">
              S3 optical character recognition project to extract sudoku grids from images and solve them.              </p>
              <a
                className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black hover:from-blue-200 hover:to-blue-600 text-white  px-4 py-2 rounded-md"
                href="https://github.com/eithannak29/ocr"
              >
                View
              </a>
            </div>
            <div className="bg-white rounded-md p-5 shadow-md dark:bg-gray-800">
              <h3 className="text-2xl text-blue-400 font-medium font-montserrat">Dimensions</h3>
              <p className="py-5 mb-6 text-gray-500">
                S2 video game project in which we had to create a 3D game in Unity.
              </p>
              <a
                className="bg-gradient-to-r  from-gray-700 via-gray-900 to-black hover:from-blue-200 hover:to-blue-600  text-white px-4 py-2 rounded-md"
                href="#"
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
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 py-10 justify-center">
            <div className="bg-white rounded-md p-5 shadow-md dark:bg-gray-800 ">
              <h3 className="text-2xl text-gray-500 font-medium font-montserrat">eithannakache@gmail.com</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
