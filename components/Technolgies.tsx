import React from "react";
import Techs from "./techCarousel";

const Technolgies = () => {
  return (
    <div className="flex flex-col bg-tech bg-cover bg-opacity-10 p-10 justify-center items-center gap-4 bg-[#27292a] w-full">
      <h3 className="text-[#ccad3b] text-lg">Technologies</h3>

      <h2 className="font-bold text-4xl flex flex-col gap-5 max-w-sm text-center">
        TECH I AM FAMILIAR WITH{" "}
        <div className="line w-auto h-[1px] bg-gradient-to-r from-blue-500 to-yellow-500 " />
      </h2>
      <div className="mt-10 flex-row flex gap-10 max-w-full flex-wrap justify-between items-between">
        <Techs />
      </div>
    </div>
  );
};

export default Technolgies;
