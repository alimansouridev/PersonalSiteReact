import React from "react";
import Image from "../assets/AliBike.webp";
import resume from "../assets/resumefolder/resume.pdf";
import { motion } from "framer-motion";

// framer motion
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childrenVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center lg:p-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src={Image}
              alt="pfp"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2
              variants={childrenVariants}
              className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Ali Mansouri
            </motion.h2>
            <motion.span
              variants={childrenVariants}
              className=" text-stone-400 bg-clip-text text-3xl tracking-tight ">
              Full Stack Developper
            </motion.span>
            <motion.p
              variants={childrenVariants}
              className=" my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              Hi! I’m Ali, I’m a teamplayer, I’m reliable, I’m responsible and
              approachable.
            </motion.p>
            <motion.a
              variants={childrenVariants}
              href={resume}
              target="_blank"
              rel="noopener norefererrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10  hover:bg-black hover:text-white">
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
