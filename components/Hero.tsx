import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="flex flex-row justify-around items-top p-10">
      <div className="about text-left mt-10">
        <h1 className="text-2xl">
          I'M{" "}
          <span className="text-[#FFDE68] font-TNR text-5xl ml-4 font-semibold">
            Kartikey Kakaria
          </span>
        </h1>
        <p className="text-2xl mt-4" style={{
            maxHeight:150
        }}>
          Web Developer & Python
          Developer
        </p>
        <button className="border-[#FFDE68] border-2 mt-12 py-2 px-3 text-[#FFDE68] text-md rounded-md">Contact Me</button>
      </div>
      <div className="image">
        <Image src={"/logo.jpg"} alt={"logo"} width={460} height={460} className="z-0"></Image>
      </div>
    </main>
  );
};

export default Hero;
