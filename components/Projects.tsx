import React from "react";
import { projects } from "@/constants";
const Projects = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-10 gap-5">
      <h3 className="text-[#ccad3b] text-lg">Projects</h3>

      <h2 className="font-bold text-4xl flex flex-col gap-5 max-w-sm text-center">
        MY PAST WORKS AND PROJECTS{" "}
        <div className="line w-auto h-[1px] bg-gradient-to-r from-blue-500 to-yellow-500 " />
      </h2>
      <div className="flex flex-row p-5 gap-10 max-w-7xl mt-8 flex-wrap ">
        {projects.map(({name, img, description, github, link}, index) => {
          const first = index === 0;
          const last = index == 2;
          return (
            <div key={index} className="relative flex flex-col min-w-full lg:min-w-min w-[30%] h-[20%]">
              {first ? (
                <div
                  className={`absolute bg-gradient-to-r from-orange-600 to-orange-500 z-0 lg:top-[-10px] lg:left-[-10px] top-[-15px] left-[-15px] box-border h-[75%] w-[75%]`}
                ></div>
              ) : last ? (
                <div
                  className={`absolute bg-gradient-to-l from-orange-600 to-orange-500 z-0 lg:bottom-[-10px] lg:right-[-10px] bottom-[-15px] right-[-15px] box-border h-[75%] w-[75%]`}
                ></div>
              ) : (
                ""
              )}
              <div className="z-10 bg-gradient-to-bl from-[#19191a] to-[#262628] flex flex-col h-auto w-auto p-10 justify-center items-center gap-4">
                <h2 className="text-white font-semibold text-3xl">
                  {name}
                </h2>
                <p className="desc text-gray-300 text-sm">
                  {description}
                </p>
                <img src={`./projects/${img}.png`} alt="" />
                <div className="buttons flex flex-row justify-between gap-5">
                  <button className="rounded-md py-2 px-4 bg-[#100B00] duration-300 hover:brightness-90">
                    <a href={github}>Github{" "}</a>
                  </button>
                  <button className="rounded-md py-2 px-4 bg-[#00A6A6] text-black duration-300 hover:brightness-90">
                    <a href={link}>Link</a>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
