import React from "react";
import Card from "./partials/Card";
import { skills, qualities } from "@/constants";
const Skills = () => {
  return (
    <div className="flex flex-col p-10 justify-center items-center gap-4">
      <h3 className="text-[#ccad3b] text-lg">Services</h3>

      <h2 className="font-bold text-4xl flex flex-col gap-5 text-center">
        WHAT I AM GREAT AT{" "}
        <div className="line w-auto h-[1px] bg-gradient-to-r from-green-400 to-blue-500 " />
      </h2>

      <div className="skills flex flex-row p-8 gap-10 w-full justify-around flex-wrap">
        {skills.map(({ name, image, experience }) => (
          <Card >
            <img src={`./skills/${image}`} alt="" height={100} width={100} />
            <h2 className="text-2xl max-w-[150px] text-center">{name}</h2>
            <span className="text-gray-400 text-sm mt-auto">{experience}+ years</span>
          </Card>
        ))}
      </div>
      <div className="qualities flex flex-row p-10 justify-around w-full flex-wrap gap-5">
          {
            qualities.map(({name, number})=>(
              <div className="flex max-w-[100px] flex-col justify-center gap-3 items-center">
                <h3 className="text-orange-500 text-5xl">{number}+</h3>
                <p className="text-white text-sm">{name}</p>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Skills;
