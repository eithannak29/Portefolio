import React from "react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollReveal = require("scrollreveal").default;
      const sr = ScrollReveal();

      const Contact = document.querySelectorAll("#Contact");

      sr.reveal(Contact, {
        duration: 1000,
        distance: "30px",
        easing: "ease-out",
        origin: "bottom",
        scale: 1,
        mobile: true,
        delay: 200,
      });

    }
  }, []);
    return (
      <div className="">
        <section id="Contact" className="py-20">
        <h2 className={`text-5xl text-center text-blue-400 font-medium font-montserrat`}>
          Contact
        </h2>
        <div className="grid py-10 justify-center">
          <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-lg shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50">
            <a
              href="mailto:eithannakache@gmail.com"
              className={`text-xl text-gray-500 font-medium font-montserrat block hover:text-blue-400`}
            >
              eithannakache@gmail.com
            </a>
          </div>
        </div>
      </section>
      </div>
    );
}
