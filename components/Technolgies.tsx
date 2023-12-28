import React from "react";
import { technologies } from "@/constants";
import TechBall from "./partials/TechBall";
import Image from "next/image";

const Technolgies = () => {
  return (
    <div className="flex flex-col p-10 justify-center items-center gap-4 bg-[#27292a] w-full">
      <h3 className="text-[#ccad3b] text-lg">Technologies</h3>

      <h2 className="font-bold text-4xl flex flex-col gap-5 max-w-sm text-center">
        TECH I AM FAMILIAR WITH{" "}
        <div className="line w-auto h-[1px] bg-gradient-to-r from-blue-500 to-yellow-500 " />
      </h2>
      <div className="mt-10 flex-row flex gap-10 max-w-full flex-wrap justify-between items-between">
        {technologies.map(({ name, img }) => (
          <TechBall>
            <Image
              alt={name}
              src={`./technologies/${img}.svg`}
              height={name == "Mongo" ? 30 : name == "Tailwind" ? 60 : 50}
              width={name == "Mongo" ? 30 : name == "Tailwind" ? 60 : 50}
            ></Image>
            {name}
          </TechBall>
        ))}
        <div className="ml-auto font-bold text-2xl flex justify-end items-center text-yellow-500">and More to Be Added ...</div>
      </div>
    </div>
  );
};

export default Technolgies;
