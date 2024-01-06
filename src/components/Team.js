"use client";

import React, { useReducer } from "react";
import ceo from "/public/business-man.png";
import Image from "next/image";

// Reducer function to handle state changes based on action types
const reducer = (state, action) => {
  switch (action.type) {
    case "CEO":
      return { ...state, CEO: !state.CEO };
    case "COO":
      return { ...state, COO: !state.COO };
    case "CTO":
      return { ...state, CTO: !state.CTO };
    default:
      return state;
  }
};

export default function Team() {
  const [state, dispatch] = useReducer(reducer, {
    CEO: false,
    COO: false,
    CTO: false,
  });

  return (
    <div className="bg-[#4a513f] text-white p-10">
      <h1 className="text-center text-5xl mb-10">Our Team</h1>
      <div className="flex flex-auto gap-10">
        <div
          className="bg-[rgba(128,0,128,0.5)] border border-white flex flex-col items-center justify-center rounded-lg cursor-pointer w-full overflow-hidden relative"
          onMouseEnter={() => dispatch({ type: "CEO" })}
          onMouseLeave={() => dispatch({ type: "CEO" })}
        >
          <div
            className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg  ${
              state.CEO ? "right-0 opacity-100" : "right-full opacity-0"
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
          onMouseEnter={() => dispatch({ type: "COO" })}
          onMouseLeave={() => dispatch({ type: "COO" })}
        >
          <div
            className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg  ${
              state.COO ? "right-0 opacity-100" : "right-full opacity-0"
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
          onMouseEnter={() => dispatch({ type: "CTO" })}
          onMouseLeave={() => dispatch({ type: "CTO" })}
        >
          <div
            className={`absolute bg-[rgba(0,0,0,0.6)] h-full w-full transition-all duration-500 rounded-lg  ${
              state.CTO ? "right-0 opacity-100" : "right-full opacity-0"
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
