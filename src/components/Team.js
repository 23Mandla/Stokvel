"use client";

import React, { useState } from "react";
import ceo from "/public/business-man.png";
import Image from "next/image";

export default function Team() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered((prevStae) => !prevStae);
  };

  return (
    <div className="bg-[#4a513f] text-white p-10">
      <h1 className="text-center text-5xl mb-10">Our Team</h1>
      <div className="flex flex-row gap-10">
        <div
          className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div
            className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg  ${
              isHovered ? "right-0 opacity-100" : "right-full opacity-0"
            }`}
          >
            <h1>Mandla Mbolekwa</h1>
          </div>
          <Image alt="" src={ceo} width={150} height={150} />
          <div className="mt-5">
            <p className="text-4xl">CEO</p>
          </div>
        </div>
        <div
          className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div
            className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg  ${
              isHovered ? "right-0 opacity-100" : "right-full opacity-0"
            }`}
          >
            <h1>Mandla Mbolekwa</h1>
          </div>
          <Image alt="" src={ceo} width={150} height={150} />
          <div className="mt-5">
            <p className="text-4xl">CEO</p>
          </div>
        </div>
        <div
          className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div
            className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg  ${
              isHovered ? "right-0 opacity-100" : "right-full opacity-0"
            }`}
          >
            <h1>Mandla Mbolekwa</h1>
          </div>
          <Image alt="" src={ceo} width={150} height={150} />
          <div className="mt-5">
            <p className="text-4xl">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
