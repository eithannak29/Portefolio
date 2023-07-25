import Head from "next/head";
import { useState } from "react";
import Projects from "./projects";
import Skills from "./skills";
import NavBar from "./navbar";
import Contact from "./contact";


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

      <main
        className="px-10 md:px-20 lg:px-40"
        style={{
          backgroundImage: `url('/cool-background.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
               
        }}
      >
        <NavBar />
        <Projects />
        <Skills /> 
        <Contact />
      </main>
    </div>
  );
}
