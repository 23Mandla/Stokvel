"use client";

// import required modules
import Image from "next/image";
import grow from "/public/grow.jpg";

export default function Carousel() {
  return (
    <div className="fixed w-full h-screen">
      <Image alt="" src={grow} fill />
      <div className="absolute p-5 w-1/3 z-10 text-white left-[55%] top-[40%]">
        <h1 className="text-3xl font-extrabold mb-10">The power of smart savings!</h1>
        <p className="font-bold text-lg mb-16">
          Plant the seeds of financial security today to harvest a future of
          abundance.
        </p>
        <button className="relative border-2 border-[#13381b] py-2 px-8 rounded-sm left-1/4 bg-[rgba(0,0,0,0.4)]">JOIN US</button>
      </div>
    </div>
  );
}
