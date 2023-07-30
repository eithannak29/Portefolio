import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import eithan from "../public/eithan.png";
import { useEffect, useState } from "react";

import SplitType from "split-type";

import { gsap } from "gsap";

export default function NavBar() {
  useEffect(() => {
    let text = new SplitType("#name");
    let chars = document.querySelectorAll(".char");
    for (let i = 0; i < chars.length; i++) {
      chars[i].classList.add("translate-y-full");
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.75,
    });
  }, []);

  return (
    <div className="">
      <section id="About_Me" className="min-h-screen">
        
        <nav className="top-0 right-0">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div />
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:flex-row md:p-0 md:items-center md:justify-center text-center md:text-left md:space-x-8 bg-gray-800 bg-opacity-50 rounded-md ">
                <li>
                  <a
                    href="#Home"
                    className="text-lg text-white px-4 hover:text-blue-400"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="text-lg text-white px-4 hover:text-blue-400"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#Skills"
                    className="text-lg text-white px-4 hover:text-blue-400"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="text-lg px-4 text-white hover:text-blue-400"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="Home" className="text-center p-10">
          <h1
            id="name"
            className="text-5xl text-blue-400 font-medium font-montserrat"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            Eithan Nakache
          </h1>

          <p className="text-md py-5 leading-8 font-montserrat font-medium ">
            Hi, I am Eithan, a 22 years old engineering student in computer
            science at EPITA. I am passionate about new technologies and I am
            always looking for new challenges.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
          <a
            className="transform transition-all duration-300 hover:scale-125 hover:shadow-xl"
            href="https://www.linkedin.com/in/eithan-nakache-49254a195/"
          >
            {" "}
            <AiFillLinkedin />{" "}
          </a>
          <a
            className="transform transition-all duration-300 hover:scale-125 hover:shadow-xl"
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
    </div>
  );
}
