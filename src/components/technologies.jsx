import React from "react";

// Brand names
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFigma } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandGit } from "react-icons/tb";
import { TbBrandNpm } from "react-icons/tb";

export const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl"> Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4 ">
          <TbBrandTailwind className="text-7xl text-cyan-600" />
        </div>
        <div className="p-4 ">
          <TbBrandNodejs className="text-7xl text-green-500" />
        </div>
        <div className="p-4 ">
          <TbBrandPython className="text-7xl text-yellow-500" />
        </div>
        <div className="p-4 ">
          <TbBrandNpm className="text-7xl text-red-800" />
        </div>
        <div className="p-4 ">
          <TbBrandGit className="text-7xl text-white-300" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
