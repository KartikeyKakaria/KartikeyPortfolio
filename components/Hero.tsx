"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <main className="flex flex-row justify-around items-top p-10 z-0">
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.01,
          duration: 1,
          type: "spring",
          bounce: 0.3,
        }}
        className="about text-left mt-10"
      >
        <h1 className="text-2xl">
          I'M{" "}
          <span className="text-[#FFDE68] font-TNR text-5xl ml-4 font-semibold">
            Kartikey Kakaria
          </span>
        </h1>
        <p
          className="text-2xl mt-4"
          style={{
            maxHeight: 150,
          }}
        >
          Web Developer & Python Developer
        </p>
        <button className="border-[#FFDE68] hover:bg-[#FFDE68] hover:text-black duration-500 border-2 mt-12 py-2 px-3 text-[#FFDE68] text-md rounded-md">
          Contact Me
        </button>
      </motion.div>
      <motion.div
        initial={{
          x: 300,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.01,
          duration: 1,
          type: "spring",
          bounce: 0.3,
        }}
        className="image flex-row justify-center items-center hidden sm:flex"
      >
        <Image
          src={"/logo.jpg"}
          alt={"logo"}
          width={450}
          height={450}
          className="z-0"
        ></Image>
        <motion.div initial={{
          x:-20,
        }} className="links flex flex-col gap-2 z-10 items-center">
          <div className="line bg-[#FFDE68] h-48 w-[1px] z-30" />
          <Image width={40} height={40} alt="github" src={'./github.svg'} className="grayscale hover:brightness-125 hover:scale-105 duration-300 cursor-pointer"></Image>
          <Image width={55} height={55} alt='instagram' src={'./instagram.svg'} className="grayscale hover:brightness-125 hover:scale-105 duration-300 cursor-pointer"></Image>
          <Image width={30} height={30} alt={'discord'} src={'./discord.svg'} className="grayscale hover:brightness-125 hover:scale-105 duration-300 cursor-pointer"></Image>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
