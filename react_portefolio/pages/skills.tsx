import React from "react";
import { useEffect } from "react";
import Image from "next/image";

interface StickerProps {
  link: string;
}

function CreateSticker({ link }: StickerProps) {
  return (
    <li className="py-3">
      <img
        className="object-scale-down h-14 w-24 transform transition-all duration-300 hover:scale-105 hover:shadow-l"
        src={link}
        alt=""
      />
    </li>
  );
}

export default function Skills() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;
      const sr = ScrollReveal();

      const Languages = document.querySelectorAll("#Languages");
      const Tools = document.querySelectorAll("#Tools");

      sr.reveal(Languages, {
        duration: 1000,
        distance: "30px",
        easing: "ease-out",
        origin: "right",
        scale: 1,
        mobile: true,
      });

      sr.reveal(Tools, {
        duration: 1000,
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
    <section className="py-10">
      <h2
        id="Skills"
        className={`text-5xl text-center text-blue-400 font-medium font-montserrat`}
      >
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 mt-10">
        <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md shadow-blue-500/50 " id="Languages">
          <h3 className={`text-xl text-blue-400 font-medium font-montserrat border-b-4`}>
            Languages
          </h3>
          <ul className="py-5 flex flex-wrap justify-center">
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          </ul>
        </div>
        <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md shadow-blue-500/50 " id="Tools">
        <h3 className={`text-xl text-blue-400 font-medium font-montserrat border-b-4`}>
            Tools
          </h3>

          <ul className="py-5 flex flex-wrap justify-center">
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
            <CreateSticker link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
}
