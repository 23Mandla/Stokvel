import React from "react";
import Image from "next/image";
import ceo from "/public/business-man.png";

export default function Team() {
  return (
    <div className="bg-[#4a513f] text-white p-10">
      <h1 className="text-center text-5xl mb-3">Our Team</h1>
      <div className="grid grid-cols-3 gap-10 p-10">
        <div className="bg-[rgba(128,0,128,0.5)] p-4 border border-white rounded-lg flex items-center justify-center">
          <Image alt="ceo" height={200} width={200} src={ceo} />
          <p className="absolute bottom-0">CEO</p>
        </div>
        <div className="bg-[rgba(128,0,128,0.5)] p-4 border border-white rounded-lg flex items-center justify-center">
          <Image alt="ceo" height={200} width={200} src={ceo} />
        </div>
        <div className="bg-[rgba(128,0,128,0.5)] p-4 border border-white rounded-lg flex items-center justify-center">
          <Image alt="ceo" height={200} width={200} src={ceo} />
        </div>
      </div>
    </div>
  );
}
