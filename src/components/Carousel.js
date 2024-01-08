"use client";

import Image from "next/image";
import grow from "/public/grow.jpg";
import { FaAnglesDown } from "react-icons/fa6";

export default function Carousel() {
  return (
    <div className="fixed w-full h-screen">
      <Image alt="" src={grow} fill />
      <div className="absolute p-5 w-[45%]  z-10 text-white left-[50%] top-[38%] bg-[rgba(0,0,0,0.1)]">
        <h1 className="text-3xl font-extrabold mb-10">The power of smart savings!</h1>
        <p className="font-bold text-lg mb-16">
          Plant the seeds of financial security today to harvest a future of
          abundance.
        </p>
        <FaAnglesDown className="relative left-10 top-3 text-5xl cursor-pointer"/>
      </div>
    </div>
  );
}
