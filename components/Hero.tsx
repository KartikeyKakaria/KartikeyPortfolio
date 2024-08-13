"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";
const Hero = () => {
  return (
    <main id="main" className="flex bg-hero shadow-lg min-h-[82vh] relative lg:flex-row flex-col justify-around items-top p-10 z-0 gap-10 ">
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
        className="about text-left mt-10 flex flex-col justify-around"
      >
        <div className="flex flex-col justify-end">
          <h1 className="text-4xl font-bold">
            I'M{" "}
            <span className="text-[#FFDE68] font-TNR text-5xl ml-4 font-extrabold">
              Kartikey Kakaria
            </span>
          </h1>
          <p
            className="text-2xl mt-10"
            style={{
              maxHeight: 150,
            }}
          >
            Yeah, I'm A{" "}
            <span className="text-blue-500 font-semibold">
              <ReactTyped strings={["Frontend Developer", "Backend Developer", "Freelancer"]} typeSpeed={100} backSpeed={100} startDelay={1000} loop/>
            </span>
          </p>
          <button className="border-[#FFDE68] hover:bg-[#FFDE68] hover:text-black duration-500 border-2 mt-12 py-2 px-3 text-[#FFDE68] text-md rounded-md ">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
        <div className="absolute bottom-[10px] left-[10px] lg:relative  z-40 down-icon rounded-full bg-gray-600 mt-auto w-14 h-14 text-3xl flex justify-center items-center hover:brightness-90 duration-300 cursor-pointer animate-bounce">
          <a href="#about">&darr;</a>
        </div>
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
        className="image flex-row justify-center items-center flex"
      >
        <div style={{
          borderRadius:"20px"
        }} className="relative">
          <div className="bottom-[-30px] right-[-20px] bg-yellow-400 h-[75%] w-[75%]"></div>
        <Image
          style={{
            borderRadius:"20px"
          }}
          src={"/logo.jpg"}
          alt={"logo"}
          width={450}
          height={450}
          className="z-10"
        ></Image>
        </div>
        <motion.div
          initial={{
            x: -20,
          }}
          className="links flex flex-col gap-2 z-20 items-center"
        >
          <div className="line bg-[#FFDE68] h-48 w-[1px]" />
          <Image
            width={40}
            height={40}
            alt="github"
            src={"./github.svg"}
            className="grayscale hover:brightness-125 hover:scale-105 duration-300 cursor-pointer"
            onClick={()=>{
              window.location.href="https://github.com/KartikeyKakaria"
            }}
          ></Image>
          <Image
            width={55}
            height={55}
            alt="instagram"
            src={"./instagram.svg"}
            className="grayscale hover:brightness-125 hover:scale-105 duration-300 cursor-pointer"
            onClick={()=>{
              window.location.href="https://instagram.com/kartikeykakaria"
            }}
          ></Image>
          <Image
            width={30}
            height={30}
            alt={"discord"}
            src={"./discord.svg"}
            className="grayscale hover:brightness-125 hover:scale-105 duration-300 cursor-pointer"
            onClick={()=>{
              window.location.href="https://discord.com/app"
            }}
          ></Image>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Hero;
