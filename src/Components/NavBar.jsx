import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

function NavBar() {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const navLinkStyle=" relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-400 after:transition-all after:duration-300 hover:after:w-full"

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Prashil Prakash</span>
      <ul
        className={`${menu ? "block" : "hidden"}     mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black-500/30 px-2 rounded-xl md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex md:gap-6`}
      >
        <a href="#About">
          <li className={navLinkStyle}>
            About
          </li>
        </a>
        <a href="#Projects">
          <li className={navLinkStyle}>
            Projects
          </li>
        </a>
        
        <a href="#footer">
          <li className={navLinkStyle}>
            Contacts
          </li>
        </a>
        
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
}

export default NavBar;
