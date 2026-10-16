import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div
      id="footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center
      max-md:flex-col max-md:items-start max-md:gap-5 max-md:px-6 max-md:py-8"
    >
      <div className="max-md:w-full">
        <h1 className="text-2xl md:text-6xl font-bold max-md:mb-1">contacts</h1>
        <h3 className="text-2xl md:text-2xl font-normal max-md:text-lg ">
          Feel free to reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl max-md:w-full max-md:space-y-3">
        <li className="flex gap-2 items-center max-md:break-all"><MdOutlineEmail size={20} className="shrink-0"/><a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=prashilprakash288@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="min-w-0 break-all cursor-pointer hover:text-gray-300 hover:underline transition-colors"
  >
    prashilprakash288@gmail.com
  </a></li>
        <li className="flex gap-1 items-center"><FaGithub size={20} className="shrink-0"/><a
            href="https://github.com/Prashil-prakash"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 break-all cursor-pointer hover:text-gray-300 hover:underline transition-colors"
          >
            github.com/Prashil-prakash
          </a></li>
        
      </ul>
    </div>
  );
}

export default Footer;
