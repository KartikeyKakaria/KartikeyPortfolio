"use client";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        delay: 0.01,
        duration: 1,
      }}
      id="about"
      className="bg-[#27292a] w-screen p-16 flex flex-col gap-7"
    >
      <h2 className="font-TNR sm:text-5xl text-4xl font-bold">
        ABOUT <span className="text-yellow-500">ME</span>
      </h2>
      <div className="flex sm:flex-row flex-col gap-10 justify-around">
        <div className="info flex flex-wrap flex-col gap-5">
          <h2 className="text-2xl font-semibold">Personal Info</h2>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="flex flex-col justify-start gap-3">
              <div>
                <span className="text-gray-600">First Name:</span>Kartikey
              </div>
             
              <div>
                <span className="text-gray-600">Discord:</span>devkk.tsx
              </div>
              <div>
                <span className="text-gray-600">Instagram:</span>kartikeykakaria
              </div>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <div>
                <span className="text-gray-600">Last Name:</span>Kakaria
              </div>
              <div>
                <span className="text-gray-600">Nationality:</span>Indian{" "}
                <span className="sm:inline hidden">🇮🇳</span>
              </div>
              <div>
                <span className="text-gray-600">Address:</span>Amritsar
              </div>
              <div>
                <span className="text-gray-600">Languages:</span>English, Hindi
              </div>
            </div>
          </div>
        </div>
        {/* <div className="line sm:w-32 w-20 h-[1px] bg-[#FFDE68]" /> */}
        <div className="flex flex-col sm:max-w-[50%] gap-5">
          <h3 className="text-3xl font-bold">
            HEY! THIS IS <span className="text-yellow-500">KARTIKEY</span>
          </h3>
          <p className="sm:text-lg lg:text-xl ">
            I'm a young software/web developer from India. I have a sufficient
            amount of knowledge about{" "}
            <span className="text-yellow-300">
              Problem solving, Web Frontend & Backend
            </span>
            . I Still hope to learn a lot more and a gain a bunch of experience
            in the coming years.{" "}
            <span className="sm:block hidden">
              In short I'm a{" "}
              <span className="text-yellow-300">
                trustworthy, reliable and creative person{" "}
              </span>
              on whom you can rely for your work :).
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
