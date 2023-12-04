import React from "react";

export default function Portfolio() {
  return (
    <div className="w-[80%] h-[80%] border rounded-md bg-white text-black">
      <div className="flex w-screen gap-5 p-10">
        <div className="flex justify-around w-1/3 border-b-2 border-red-400 p-1 pl-5">
          <span>Name</span>
          <span>Mandla</span>
        </div>
        <div className="flex justify-around w-1/3 border-b-2 border-red-400 p-1 pl-5">
          <span>Surname</span>
          <span>Mbolekwa</span>
        </div>
      </div>
    </div>
  );
}
