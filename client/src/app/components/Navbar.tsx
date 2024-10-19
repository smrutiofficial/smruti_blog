import React from 'react';
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
          <a href="/about" className="text-white hover:text-gray-300">
            About
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
      </ul>
      <Image
        src={ProfilePic}
        alt="User Profile"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
    </div>
  </nav>
  )
}

export default Navbar