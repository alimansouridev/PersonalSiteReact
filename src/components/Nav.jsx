import React from "react";

// logos
import logo from "../assets/logoAM.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center size-12">
        <a>
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ali-mansouri-540609314"
          target="_blank"
          rel="noopener norefererrer"
          aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/alimansouridev"
          target="_blank"
          rel="noopener norefererrer"
          aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="mailto:alimansouri.dev@gmail.com"
          target="_blank"
          rel="noopener norefererrer"
          aria-label="LinkedIn">
          <IoMailOutline />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
