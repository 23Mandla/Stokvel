"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "/public/profile.png";
import axios from "axios";
import Contribution from "@/icons/contribution";


export default function ProfilePage() {
  const [userName, setUserName] = useState("Guest");
  const [userSurname, setUserSurname] = useState("Guest");

  useEffect(() => {
    const userName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/users/profile"
        );
        const userData = response.data;
        setUserName(userData.name)
        setUserSurname(userData.surname)
      } catch (error) {}
    };

    userName()
  }, []);

  return (
    <div className="grid grid-cols-7 h-screen w-full text-white bg-slate-800 pt-20 gap-1">
      <div className="bg-[#28282B] col-span-1 pt-3 border-r border-gray-600 overflow-hidden">
        <div className=" flex flex-col justify-center gap-2 cursor-pointer m-auto border-b border-b-gray-600 rounded-sm p-2">
          <Image
            src={profile}
            alt=""
            width={50}
            height={50}
            className="rounded-full m-auto"
          />
          <p className="text-center text-white">{userName} {userSurname}</p>
        </div>
        <div className="border border-gray-600 m-1 rounded-sm h-full text-sm p-3 space-y-3">
          <h1> <Contribution /> contributions</h1>
          <h1>  Statements</h1>
        </div>
      </div>

      <div className="col-span-6">
        <ul className=" flex gap-8 border-b border-b-gray-600 p-3 pl-16">
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <Link href="">Members</Link>
          </li>
          <li>
            <Link href="">Perfomance</Link>
          </li>
          <li>
            <Link href="">Events</Link>
          </li>
          <li>
            <Link href="">Chat</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
