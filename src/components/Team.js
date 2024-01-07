"use client";

import React, { useReducer } from "react";
import ceo from "/public/business-man.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

// Reducer function to handle state changes based on action type
const reducer = (state, action) => {
  switch (action.type) {
    case "CEO":
      return { ...state, CEO: !state.CEO };
    case "COO":
      return { ...state, COO: !state.COO };
    case "CTO":
      return { ...state, CTO: !state.CTO };
    case "MRK":
      return { ...state, MRK: !state.MRK };
    default:
      return state;
  }
};

export default function Team() {
  const [state, dispatch] = useReducer(reducer, {
    CEO: false,
    COO: false,
    CTO: false,
    MRK: false,
  });

  return (
    <div className="bg-[#4c5937] text-white p-10">
      <div className="bg-[#587246] rounded-full p-4">
        <h1 className="text-center text-5xl mb-8">Our Team</h1>
        <div className="grid grid-cols-2 gap-10 p-10 w-[60%] m-auto">
          <div
            className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
            onMouseEnter={() => dispatch({ type: "CEO" })}
            onMouseLeave={() => dispatch({ type: "CEO" })}
          >
            <div
              className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg p-5 font-bold text-lg ${
                state.CEO ? "right-0 opacity-100" : "right-full opacity-0"
              }`}
            >
              <h1>Mandla Mbolekwa</h1>
              <p className="text-orange-500">CEO</p>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-[#0A66C2] text-2xl mt-2" />
              </Link>
              <div className="float-right w-[70%]  mt-10 border-l-2 h-[100%] pl-3 rounded-md">
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <Image alt="" src={ceo} width={150} height={150} />
            <div className="mt-5">
              <p className="text-4xl">CEO</p>
            </div>
          </div>

          <div
            className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
            onMouseEnter={() => dispatch({ type: "COO" })}
            onMouseLeave={() => dispatch({ type: "COO" })}
          >
            <div
              className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg p-5 font-bold text-lg ${
                state.COO ? "top-0 opacity-100" : "top-full opacity-0"
              }`}
            >
              <h1>Mandla Mbolekwa</h1>
              <p className="text-orange-500">COO</p>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-[#0A66C2] text-2xl mt-2" />
              </Link>
              <div className="float-right w-[70%]  mt-10 border-l-2 h-[100%] pl-3">
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <Image alt="" src={ceo} width={150} height={150} />
            <div className="mt-5">
              <p className="text-4xl">COO</p>
            </div>
          </div>

          <div
            className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
            onMouseEnter={() => dispatch({ type: "CTO" })}
            onMouseLeave={() => dispatch({ type: "CTO" })}
          >
            <div
              className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg p-5 font-bold text-lg ${
                state.CTO ? "left-0 opacity-100" : "left-full opacity-0"
              }`}
            >
              <h1>Mandla Mbolekwa</h1>
              <p className="text-orange-500">CTO</p>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-[#0A66C2] text-2xl mt-2" />
              </Link>
              <div className="float-right w-[70%]  mt-10 border-l-2 h-[100%] pl-3">
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <Image alt="" src={ceo} width={150} height={150} />
            <div className="mt-5">
              <p className="text-4xl">CTO</p>
            </div>
          </div>

          <div
            className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
            onMouseEnter={() => dispatch({ type: "MRK" })}
            onMouseLeave={() => dispatch({ type: "MRK" })}
          >
            <div
              className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg p-5 font-bold text-lg ${
                state.MRK ? "right-0 opacity-100" : "right-full opacity-0"
              }`}
            >
              <h1>Mandla Mbolekwa</h1>
              <p className="text-orange-500">Marketing</p>
              <Link href="https://www.linkedin.com/">
                <FaLinkedin className="text-[#0A66C2] text-2xl mt-2" />
              </Link>
              <div className="float-right w-[70%]  mt-10 border-l-2 h-[100%] pl-3">
                <p className="text-sm mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <Image alt="" src={ceo} width={150} height={150} />
            <div className="mt-5">
              <p className="text-4xl">Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
