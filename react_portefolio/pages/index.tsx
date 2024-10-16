import Head from "next/head";
import { useState, useEffect } from "react";
import Projects from "./projects";
import Skills from "./skills";
import NavBar from "./navbar";
import Contact from "./contact";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;
      const sr = ScrollReveal();

      const elementsToAnimate = document.querySelectorAll('.navbar');

      sr.reveal(elementsToAnimate, {
        duration: 1000,
        distance: '30px',
        easing: 'ease-out',
        origin: 'bottom',
        scale: 1,
        mobile: true,
      });
    }
  }, []);
  return (
    <div>
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

      <main 
        className="px-10 md:px-20 gradient"
        // style={{
        //   backgroundImage:
        //     `url('/background/v960-ning-32.jpg')`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundAttachment: "fixed",
        // }}
      >
        <div>
          <div className="navbar">
            <NavBar/>
          </div>

          <div className="projects">
            <Projects/>
          </div>

          {/* <div className="">
            <Skills/>
          </div> */}

          <div className="">
            <Contact/>
          </div>
        </div>
      </main>
    </div>
  );
}
