import React from "react";

// Brand names
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandGit } from "react-icons/tb";
import { TbBrandNpm } from "react-icons/tb";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 }, // Corrected spelling of 'initial'
  animate: {
    y: [10, -10],
    transition: {
      // Corrected spelling of 'transition'
      duration: duration,
      ease: "linear",
      repeat: Infinity, // Corrected spelling of 'Infinity'
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        intial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          intial="inital"
          animate="animate"
          variants={iconVariants(1)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          intial="inital"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4 ">
          <TbBrandTailwind className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div
          intial="inital"
          animate="animate"
          variants={iconVariants(1.5)}
          className="p-4 ">
          <TbBrandNodejs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          intial="inital"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4 ">
          <TbBrandPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          intial="inital"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4 ">
          <TbBrandNpm className="text-7xl text-red-800" />
        </motion.div>
        <motion.div
          intial="inital"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4 ">
          <TbBrandGit className="text-7xl text-white-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
