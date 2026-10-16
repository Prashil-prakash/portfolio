import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div
      id="footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">contacts</h1>
        <h3 className="text-2xl md:text-2xl font-normal ">
          Feel free to reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center"><MdOutlineEmail size={20}/>prashilprakash288@gmail.com</li>
        <li className="flex gap-1 items-center"><FaGithub/>github.com/Prashil-prakash</li>
        
      </ul>
    </div>
  );
}

export default Footer;
