import React from "react";

export default function Portfolio({ userData }) {
  return (
    <div className="w-[75%] h-[80%] border rounded-md bg-white text-black p-14 space-y-10">
      <div className="space-y-10">
        <div className="flex w-full gap-5">
          <div className="flex justify-around border-b-2 border-red-400 w-full">
            <span className="bg-gray-300 rounded-sm p-1 text-center font-bold w-full">
              Name
            </span>
            <span className="bg-gray-400 rounded-sm p-1 text-gray-100 text-center w-full">
              {userData.name}
            </span>
          </div>
          <div className="flex justify-around border-b-2 border-red-400 w-full">
            <span className="bg-gray-300 rounded-sm p-1 text-center font-bold w-full">
              Surname
            </span>
            <span className="bg-gray-400 rounded-sm p-1 text-gray-100 text-center w-full">
              {userData.surname}
            </span>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="flex justify-around border-b-2 border-yellow-400 w-full">
            <span className="bg-gray-300 rounded-sm p-1 text-center font-bold w-full">
              Email address
            </span>
            <span className="bg-gray-400 rounded-sm p-1 text-gray-100 text-center w-full">
              {userData.email}
            </span>
          </div>
          <div className="flex justify-around border-b-2 border-yellow-400 w-full">
            <span className="bg-gray-300 rounded-sm p-1 text-center font-bold w-full">
              Phone
            </span>
            <span className="bg-gray-400 rounded-sm p-1 text-gray-100 text-center w-full">
              0788193368
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-around border-b-2 border-[#27FF82] w-full">
          <span className="bg-gray-300 rounded-sm p-1 font-bold w-full pl-14">
            Total Amout
          </span>
          <span className="bg-gray-400 rounded-sm p-1 text-white text-center w-full font-bold">
            R10,000
          </span>
        </div>
      </div>
    </div>
  );
}
