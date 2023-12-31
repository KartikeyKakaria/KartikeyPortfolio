"use client"

import React from "react";
import Tilt from "react-parallax-tilt";

const Card = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <Tilt
      className="tilt"
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.2}
      gyroscope={true}
    >
        <div style={{
            boxShadow: "3px 3px 10px black",
          }} className="p-10 border-stone-900 border-2 rounded-lg bg-gradient-to-br from-blue-400 to-blue-900 flex flex-col justify-center items-center">
            {children}
        </div>
    </Tilt>
  );
};

export default Card;
