"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "/public/profile.png";
import axios from "axios";
import Contribution from "@/icons/Contribution";
import Statement from "@/icons/Statement";
import Portfolio from "@/components/Portfolio";
import Members from "@/components/Members";
import Performance from "@/components/Performance";
import Events from "@/components/Events";

export default function ProfilePage() {
  const [userName, setUserName] = useState("Guest");
  const [userSurname, setUserSurname] = useState("");
  const [userData, setUserData] = useState(null);
  const [component, setComponent] = useState(null);

  useEffect(() => {
    const userName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/users/profile"
        );
        const userData = response.data;
        setUserName(userData.name);
        setUserSurname(userData.surname);
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
    };

    userName();
  }, []);

  //handle component rendering
  const handleComponentRender = (component) => {
    setComponent(component);
  };

  const renderComponent = () => {
    switch (component) {
      case "portfolio":
        return <Portfolio userData={userData} />;
      case "members":
        return <Members />;
      case "performance":
        return <Performance />;
      case "events":
        return <Events />;
      default:
        return null; //return a user landing page
    }
  };

  return (
    <div className="grid grid-cols-7 h-screen w-full text-white bg-slate-800 pt-20 gap-1 overflow-hidden">
      <div className="bg-[#28282B] col-span-1 pt-3 border-r border-gray-600 overflow-hidden">
        <div className=" flex flex-col justify-center gap-2 cursor-pointer m-auto border-b border-b-gray-600 rounded-sm p-2">
          <Image
            src={profile}
            alt=""
            width={50}
            height={50}
            className="rounded-full m-auto"
          />
          <p className="text-center text-white">
            {userName} {userSurname}
          </p>
        </div>
        <div className="border border-gray-600 m-1 rounded-sm h-full text-sm p-3 space-y-3">
          <div className="flex items-center gap-2 cursor-pointer">
            <Contribution />
            <h1>contributions</h1>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <Statement />
            <h1> Statements</h1>
          </div>
        </div>
      </div>

      <div className="">
        <ul className="border-b border-gray-500 flex gap-10 pl-16 p-3 w-screen">
          <li
            className="cursor-pointer"
            onClick={() => handleComponentRender("portfolio")}
          >
            <h1>Portfolio</h1>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleComponentRender("members")}
          >
            <h1>Members</h1>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleComponentRender("performance")}
          >
            <h1>Perfomance</h1>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleComponentRender("events")}
          >
            <h1>Events</h1>
          </li>
        </ul>
        {<div className="pt-16 w-screen h-full pl-14">{renderComponent()}</div>}
      </div>

      <div className="absolute flex w-20 h-20 bottom-5 right-5 bg-[#4B5320] p-5 rounded-full items-center justify-center cursor-pointer">
        CHAT
      </div>
    </div>
  );
}
