import Head from "next/head";
import { useState, useEffect } from "react";
import Projects from "./projects";
import Skills from "./skills";
import NavBar from "./navbar";
import Contact from "./contact";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const elementsToShow = document.querySelectorAll(".hidden");
      elementsToShow.forEach((element) => element.classList.remove("hidden"));
    });
    return () => clearTimeout(timer);
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
        className="px-10 md:px-20 lg:px-40"
        style={{
          backgroundImage:
            `url('/background/cool-background_blue.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <div className="animate-fade-in-down  hidden">
            <NavBar/>
          </div>

          <div className="animate-fade-in-down  hidden">
            <Projects/>
          </div>

          <div className="animate-fade-in-down  hidden">
            <Skills/>
          </div>

          <div className="animate-fade-in-down  hidden">
            <Contact/>
          </div>
        </div>
      </main>
    </div>
  );
}
