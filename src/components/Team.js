"use client";

import React, { useState } from "react";
import ceo from "/public/business-man.png";

export default function Team() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-[#4a513f] text-white p-10">
      <h1 className="text-center text-5xl mb-3">Our Team</h1>
      <div className="grid grid-cols-3 gap-10 p-10">
        <div
          className="bg-[rgba(128,0,128,0.5)] p-4 border border-white rounded-lg flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: `url(${ceo.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="relative bottom-0">CEO</p>
        </div>
        <div
          className={`bg-[rgba(128,0,128,0.5)] p-4 border border-white rounded-lg flex items-center justify-center cursor-pointer`}
          style={{
            backgroundImage: `url(${ceo.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/*get ishovered state*/}

          <p className="relative bottom-0">CEO</p>
        </div>
        <div
          className="bg-[rgba(128,0,128,0.5)] p-4 border border-white rounded-lg flex items-center justify-center cursor-pointer h-96"
          style={{
            backgroundImage: `url(${ceo.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="relative bottom-0">CEO</p>
        </div>
      </div>
    </div>
  );
}
