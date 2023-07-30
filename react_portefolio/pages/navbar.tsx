import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import eithan from "../public/eithan.png";
import { useEffect, useState } from "react";


import SplitType from "split-type";

import { gsap } from "gsap";


export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
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
        <nav className="flex items-center justify-between p-4 text-white">
          <div className="flex items-center ml-auto bg-gray-800 bg-opacity-50 rounded-md ">
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
