import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { PERMANENT_REDIRECT_STATUS } from "next/dist/shared/lib/constants";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  icons: string[];
}

const Project = (
  ({ name, description, link, icons }: ProjectProps) => {
    return (
      <div id="projectItem" className="bg-white bg-opacity-50 rounded-md p-5 shadow-md shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40 hover:shadow-2xl project-item">
        <div className="flex items-center">
          <h4 className="text-xl text-blue-400 font-medium font-montserrat">
            {name}
          </h4>
          {icons && icons.length > 0 && (
            <div className="flex">
              {icons.map((icon, index) => (
                <img key={index} className="object-scale-down h-8 w-16" src={icon} alt={`Icon ${index + 1}`} />
              ))}
            </div>
          )}
        </div>
        <p className="py-5 text-gray-500">{description}</p>
        {link === "" ? (
          <span className="text-gray-500 italic">School Project - No link</span>
        ) : (
          <a href={link} className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full">
            View
          </a>
        )}
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
              name: "POKE GAN",
              description: "Implementation of a Generative Adversarial Network to generate new Pokemon sprites",
              link: "https://www.kaggle.com/code/eithannakache/gan-pokemon",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
              ],
            },
            {
              name: "HACKATON - Mistral AI Model Dilution (Top 3)",
              description:
                "Developed a platform to convert large pre-trained models into efficient, task-specific smaller models. Used prompt engineering for dataset creation and direct optimization techniques for finetuning.",
              link: "https://github.com/chuklee/HACKATHON_MISTRAL",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
              ],
            },
          {
            name: "Cinema4Two",
            description:
              "A platform to find the perfect movie to watch with a friend or partner based on your mutual preferences.",
            link: "https://github.com/eithannak29/Cinema4Two",
            icons: [
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
              "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
            ],
          },
          {
            name: "CNN Boat Classifaction",
            description:
              "Implemented data augmentation and developed scratch and fine-tuned EfficientNetB0 models.",
            link: "https://www.kaggle.com/code/camzia/les-jacks-spatial-navires-24-fait-main",
            icons: [
                   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
            ],
          },
            {
              name: "Chat Bot Content Moderation",
              description:
                "Implementation of a content moderation system for a chat using different machine learning models on Jigsaw dataset",
              link: "https://github.com/eithannak29/ToxicityBot",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
                ],
            },
            {
              name: "French Army Hackathon | 6milarity Challenge",
              description:
                "Winner of computer vision challenge organize by the French Army. Implementation of a model to detect similar images in a dataset",
              link: "https://github.com/chuklee/Hackatons-IADataHack",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
              ],
            },
            {
              name: "KNN4Diabetes",
              description:
                "Implementation of a K-Nearest Neighbors algorithm to predict diabetes in patients",
              link: "https://www.kaggle.com/code/eithannakache/knn4diabetes",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
              ],
            },
            {
              name: "GDSC EPITA | Minecraft Biomes Classification",
              description:
                "Implementation of a machine learning model to classify Minecraft biomes using TensorFlow and Keras",
              link: "https://www.kaggle.com/code/eithannakache/gdsc-minecraft-biome-classification",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
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
              link: "https://github.com/eithannak29/Portefolio",
              icons: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
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
