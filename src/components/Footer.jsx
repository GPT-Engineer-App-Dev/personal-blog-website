import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <div className="mb-4">
          <a href="#" className="text-blue-400 hover:underline">Twitter</a>
          <a href="#" className="text-blue-400 hover:underline ml-4">LinkedIn</a>
        </div>
        <p>&copy; 2023 My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;