import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import eithan from "../public/eithan.png";
import { useEffect, useState } from "react";

import SplitType from "split-type";

import { gsap } from "gsap";

import { Navbar } from "flowbite-react";

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
    <div className="py-4">
      <section id="About_Me">
        <div className="flex justify-end">
          <Navbar
            fluid
            rounded
            className="bg-gray-800 bg-opacity-50 rounded max-w-min"
          >
            <Navbar.Brand />
            <Navbar.Toggle/>

            <Navbar.Collapse>
              <Navbar.Link href="#Home" className="text-white ">
              <div className="hover:text-blue-400"> Home </div>
              </Navbar.Link>
              <Navbar.Link href="#Projects" className="text-white ">
                <div className="hover:text-blue-400"> Projects </div>
              </Navbar.Link>
              <Navbar.Link href="#Skills" className="text-white">
              <div className="hover:text-blue-400"> Skills </div>
              </Navbar.Link>
              <Navbar.Link href="#Contact" className="text-white">
              <div className="hover:text-blue-400"> Contact </div>
              </Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div id="Home" className="text-center p-10">
          <h1
            id="name"
            className="text-5xl text-blue-400 font-medium font-montserrat"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            Eithan Nakache
          </h1>

          <p className="text-md py-5 leading-8 font-montserrat font-medium text-blue-100" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
  Hi, I am Eithan, a 23-year-old engineering student in computer
  science at EPITA. I am passionate about new technologies and I am
  always looking for new challenges 🤗
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
