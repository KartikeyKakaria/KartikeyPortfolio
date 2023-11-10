"use client";
import React from "react";
import Image from "next/image";
import { links } from "@/constants";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header className="flex gap-3 flex-row justify-around px-5 py-7 items-center">
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
          <p className="font-semibold text-md hover:brightness-90 hover:scale-105 duration-500">
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
        <Image
          src={"/github.svg"}
          alt="github"
          height={60}
          width={60}
          className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"
        ></Image>
        <Image
          src={"/instagram.svg"}
          alt="github"
          height={60}
          width={60}
          className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"
        ></Image>
        <Image
          src={"/discord.svg"}
          alt="github"
          height={50}
          width={40}
          className="hover:brightness-90 duration-300 cursor-pointer hover:scale-105"
        ></Image>
      </motion.div>
    </header>
  );
};

export default Navbar;
