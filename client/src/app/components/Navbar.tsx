import React from "react";
import Image from "next/image";
import ProfilePic from "../image/profile-pic.png";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          Kernel Hub
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>

          <li>
            <a href="/services" className="text-white hover:text-gray-300">
              Resources
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Community
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">
              Feedback
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
        </ul>
        <div className="flex flex-row gap-4">
          <button className=" border-2 font-medium rounded-md px-4 border-[#6a6ff6] bg-transparent text-white hover:bg-[#6a6ff6] hover:text-white transition duration-300">
            Logout
          </button>
          <div className="h-9 w-9 overflow-hidden flex justify-center items-center ">
          <Image
            src={ProfilePic}
            alt="User Profile"
            className="rounded-full object-cover"
            layout="fixed"
          />
          </div>
    
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
