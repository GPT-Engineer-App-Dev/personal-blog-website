import React from "react";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row items-center">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-48 h-48 rounded-full mb-4 md:mb-0 md:mr-4" />
        <div>
          <p className="mb-4">
            Hello! I'm the author of this blog. I write about various topics that interest me, including technology, travel, and personal development.
          </p>
          <p>
            This blog is a space where I share my thoughts, experiences, and knowledge with the world. I hope you find the content here informative and engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;