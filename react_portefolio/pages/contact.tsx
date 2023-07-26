import React from "react";

export default function Contact() {
    return (
      <div className="hidden">
        <section id="Contact" className="py-20">
        <h2 className={`text-5xl text-center text-blue-400 font-medium font-montserrat`}>
          Contact
        </h2>
        <div className="grid py-10 justify-center">
          <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl ">
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
