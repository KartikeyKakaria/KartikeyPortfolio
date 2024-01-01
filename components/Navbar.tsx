"use client";
import React from "react";
import Image from "next/image";
import { links } from "@/constants";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header style={{
      boxShadow:"10px 10px 10px black"
    }} className="bg-[#303335] flex z-50 gap-3 flex-row sticky w-full justify-around px-5 py-7 items-center">
      <div className="logo">
        <Image alt="logo" height={80} width={80} src={"/logo.jpg"} />
      </div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="links flex flex-row gap-5 font-open_sans sm:text-xl text-md"
      >
        {links.map((link) => (
          <p key={link.link} className="font-semibold text-md hover:brightness-90 hover:scale-105 duration-500">
            <a href={link.link}>{link.title}</a>
          </p>
        ))}
      </motion.div>
      <motion.div
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="socials gap-7 hidden sm:flex flex-row"
      >
        <a target="_blank" href="https://github.com/KartikeyKakaria"  className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105">
        <Image
          src={"/github.svg"}
          alt="github"
          height={40}
          width={40}
          className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"
        />
        </a>
       <a target="_blank" href="https://instagram.com/devkk.tsx" className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"> <Image
          src={"/instagram.svg"}
          alt="github"
          height={70}
          width={70}
          className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"
        ></Image>
        </a>
        <a target="_blank" href="https://discord.com/app">
        <Image
          src={"/discord.svg"}
          alt="github"
          height={50}
          width={40}
          className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"
        ></Image>
        </a>
      </motion.div>
    </header>
  );
};

export default Navbar;
