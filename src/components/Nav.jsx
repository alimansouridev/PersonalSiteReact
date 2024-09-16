import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import logo from "../assets/logo.png";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="">
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
          href="https://www.linkedin.com/in/ali-mansouri-540609314"
          target="_blank"
          rel="noopener norefererrer"
          aria-label="Github">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ali-mansouri-540609314"
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
