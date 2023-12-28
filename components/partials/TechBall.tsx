import React from "react";

const TechBall = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-full flex justify-center gap-4 items-center flex-col bg-gradient-to-tr from-gray-800 to-gray-900 w-40 h-40 border-black border-2 cursor-pointer hover:brightness-95 duration-300 hover:scale-110">
      {children}
    </div>
  );
};

export default TechBall;
