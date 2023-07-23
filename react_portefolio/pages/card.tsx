import React from 'react';

export default function CreateCard({ name, description, link, icons }) {
    return (
      <div className="bg-white bg-opacity-50 rounded-md p-5 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center">
          <h3 className="text-2xl text-blue-400 font-medium font-montserrat">
            {name}
          </h3>
          {icons && icons.length > 0 && (
            <div className="flex">
              {icons.map((icon, index) => (
                <img
                  key={index}
                  className="object-scale-down h-8 w-16"
                  src={icon}
                />
              ))}
            </div>
          )}
        </div>
        <p className="py-5 text-gray-500">{description}</p>
        <a
          href={link}
          className="bg-gray-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full"
        >
          View
        </a>
      </div>
    );
  }
  