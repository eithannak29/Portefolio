import React, { useEffect, useRef } from "react";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  icons: string[];
}

const Project = React.forwardRef<HTMLDivElement, ProjectProps>(
  ({ name, description, link, icons }: ProjectProps) => {
    return (
      <div
        id="projectItem"
        className="bg-white bg-opacity-50 rounded-md p-5 shadow-lg shadow-blue-500/50 transform transition-all duration-300 hover:scale-105  hover:shadow-indigo-500/40 hover:shadow-xl project-item"
      >
        <div className="flex items-center">
          <h3 className={`text-2xl text-blue-400 font-medium font-montserrat`}>
            {name}
          </h3>
          {icons && icons.length > 0 && (
            <div className="flex">
              {icons.map((icon, index) => (
                <img
                  key={index}
                  className="object-scale-down h-8 w-16"
                  src={icon}
                  alt={`Icon ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        <p className="py-5 text-gray-500">{description}</p>
        <a
          href={link}
          className={`bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full`}
        >
          View
        </a>
      </div>
    );
  }
);

export default function Projects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;
      const sr = ScrollReveal();

      const elementsToAnimate = document.querySelectorAll("#projectItem");

      sr.reveal(elementsToAnimate, {
        duration: 1500,
        distance: "30px",
        easing: "ease-out",
        origin: "left",
        scale: 1,
        mobile: true,
      });
    }
  }, []);

  return (
    <div className="">
      <section id="Projects" className="py-5">
        <h2
          className={`text-5xl text-blue-400 font-medium font-montserrat text-center`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {[
            {
              name: "PING",
              description:
                "Implementation of an IDE for Spider students using Electron and React",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              ],
            },
            {
              name: "Chess Engine | AI",
              description:
                "Implementation of a chess engine and an AI to play against it in C++",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              ],
            },
            {
              name: "Spider",
              description:
                "Implementation of a web server in C++, using the Boost library compliant with the HTTP/1.1 protocol",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              ],
            },
            {
              name: "e/place",
              description:
                "Implementation of a client-side web application in JavaScript in order to draw on a canvas with other users in real time using websockets",
              link: "https://epitafr-my.sharepoint.com/personal/gabriel_huet-de-froberville_epita_fr/_layouts/15/stream.aspx?id=%2Fpersonal%2Fgabriel%5Fhuet%2Dde%2Dfroberville%5Fepita%5Ffr%2FDocuments%2FEpita%2FAssistants%2FEPLACE%2FEPLACE%20Timelapse%2Emp4&ga=1",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              ],
            },
            {
              name: "Tiger Compiler",
              description:
                "Implementation of a compiler for the Tiger language in C++",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
              ],
            },
            {
              name: "JWS",
              description:
                "Implementation of a quarkus web server in Java, using the JPA and Hibernate libraries to communicate with a PostgreSQL database",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
              ],
            },
            {
              name: "Shell 42sh",
              description:
                "Programming of a POSIX compliant command interpreter in C",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
              ],
            },
            {
              name: "Portfolio",
              description:
                "This portfolio website was built using Next.js and Tailwind CSS and is hosted on Vercel",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
              ],
            },
            {
              name: "MyMalloc",
              description:
                "Implementation of the malloc, free and realloc functions in C to manage the memory of a program",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              ],
            },
            {
              name: "EvalExpr",
              description:
                "Implementation of a calculator in C with the shunting-yard algorithm and a stack data structure",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              ],
            },
            {
              name: "OCR",
              description:
                "Optical character recognition project to extract sudoku grids from images and solve them in C",
              link: "",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
              ],
            },
            {
              name: "Dimension",
              description:
                "Video game project in which we had to create a 3D game in Unity with C# and Blender",
              link: "https://eithannakache.wixsite.com/dimensions",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
              ],
            },
          ].map((project, index) => (
            <Project
              key={index}
              name={project.name}
              description={project.description}
              link={project.link}
              icons={project.icons}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
