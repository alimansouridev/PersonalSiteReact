import React from "react";

function Nav() {
  return (
    <nav className="max-w-screen-xl flex-wrap items-center flex">
      <h2 className="text-3xl font-bold">Ali Mansouri Dev</h2>
      <div className="space-x-4 flex-1 flex justify-end ml-auto">
        <h1>About me</h1>
        <h1>Contact</h1>
        <h1>Projects</h1>
      </div>
    </nav>
  );
}

export default Nav;
