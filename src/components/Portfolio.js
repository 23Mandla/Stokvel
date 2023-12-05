import React from "react";

export default function Portfolio({ userData }) {
  return (
    <div className="w-[80%] h-[80%] border rounded-md bg-white text-black">
      <div className="flex w-screen gap-5 p-10">
        <div className="flex justify-around w-1/3 border-b-2 border-red-400">
          <span className="bg-gray-300 w-screen rounded-sm p-1 text-center">Name</span>
          <span className="bg-gray-400 w-screen rounded-sm p-1 text-gray-100 text-center">{userData.name}</span>
        </div>
        <div className="flex justify-around w-1/3 border-b-2 border-red-400">
          <span className="bg-gray-300 w-screen rounded-sm p-1 text-center">Surname</span>
          <span className="bg-gray-400 w-screen rounded-sm p-1 text-gray-100 text-center">{userData.surname}</span>
        </div>
      </div>
      <div className="flex w-screen gap-5 p-10">
        <div className="flex justify-around w-1/3 border-b-2 border-yellow-400">
          <span className="bg-gray-300 w-screen rounded-sm p-1 text-center">Email address</span>
          <span className="bg-gray-400 w-screen rounded-sm p-1 text-gray-100 text-center">{userData.email}</span>
        </div>
      </div>
    </div>
  );
}
