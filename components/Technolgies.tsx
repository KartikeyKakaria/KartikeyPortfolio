"use client";
import React from "react";
import Techs from "./techCarousel";
import { motion } from "framer-motion";

const Technolgies = () => {
  return (
    <div className="flex flex-col bg-tech bg-cover bg-opacity-10 p-10 justify-center items-center gap-4 bg-[#27292a] w-full">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.01,
          duration: 0.75,
        }}
        className="text-[#ccad3b] text-lg"
      >
        Technologies
      </motion.h3>

      <motion.h2
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.01,
          duration: 0.75,
        }}
        className="font-bold text-4xl flex flex-col gap-5 max-w-sm text-center"
      >
        TECH I AM FAMILIAR WITH{" "}
        <div className="line w-auto h-[1px] bg-gradient-to-r from-blue-500 to-yellow-500 " />
      </motion.h2>
      <div className="mt-10 flex-row flex gap-10 max-w-full flex-wrap justify-between items-between">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          <Techs />
        </motion.div>
      </div>
    </div>
  );
};

export default Technolgies;
