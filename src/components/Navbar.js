"use client";

import { useState, useContext } from "react";
import AuthContext from "@/helpers/auth-context";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "/public/logo.jpg";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isAboutHovered, setAboutIsHovered] = useState(false);
  const [isContactHovered, setContactIsHovered] = useState(false);
  const ctx = useContext(AuthContext);
  const router = useRouter();

  const handleAboutHover = () => {
    setAboutIsHovered((prevStae) => !prevStae);
  };

  const handleConatctHover = () => {
    setContactIsHovered((prevStae) => !prevStae);
  };

  const onLogout = async () => {
    try {
      await axios.get("api/users/logout");
      router.push("/login");
      ctx.onLogout();
      Cookies.remove("token");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed text-white top-0 flex shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-screen justify-between px-20 py-6 z-10 bg-[#4B5320]">
      <Image src={logo} alt="" height={50} width={50} className="rounded" />
      <div className="flex gap-14">
        <ul className="relative flex right-10 gap-8">
          <li>
            <Link
              href="/"
              className="relative border-b-2 pb-1 border-transparent hover:border-b-2 hover:border-white"
            >
              Home
            </Link>
          </li>
          <li className="group relative">
            <Link
              className="relative border-b-2 pb-1 border-transparent hover:border-b-2 hover:border-white"
              onMouseEnter={handleAboutHover}
              onMouseLeave={handleAboutHover}
              href="/about"
            >
              About Us
            </Link>
            <div
              className={`absolute bg-[#556B2F] p-2 mt-8 space-y-2 h-screen w-screen transition-all duration-500 ${
                isAboutHovered ? "left-0 opacity-100" : "left-full opacity-0"
              }`}
            >
              <h1 className="ml-40 mt-40">We are inveSTARS</h1>
            </div>
          </li>
          <li className="group relative">
            <Link
              href="/Contact-us"
              onMouseEnter={handleConatctHover}
              onMouseLeave={handleConatctHover}
              className="relative border-b-2 pb-1 border-transparent hover:border-b-2 hover:border-white"
            >
              Contact-us
            </Link>
            <div
              className={`absolute bg-[#556B2F] p-2 mt-8 space-y-2 h-screen w-screen transition-all duration-500  ${
                isContactHovered ? "left-0 opacity-100" : "left-full opacity-0"
              }`}
            >
              <h1 className="ml-40 mt-40">Found us here</h1>
            </div>
          </li>
          {ctx.isLoggedIn && (
            <li>
              <Link
                href="/profile"
                className="relative border-b-2 pb-1 border-transparent hover:border-b-2 hover:border-white"
              >
                profile
              </Link>
            </li>
          )}
        </ul>

        <div className="flex gap-5">
          <>
            {!ctx.isLoggedIn && (
              <Link
                href="/signup"
                className="bg-transparent text-white px-5 py-1 border rounded-sm hover:bg-[#08220D] transition ease-in-out delay-150 "
              >
                Join Us
              </Link>
            )}
            {!ctx.isLoggedIn && (
              <Link
                href="/login"
                className="bg-transparent text-white px-5 py-1 border rounded-sm hover:bg-[#08220D] transition ease-in-out delay-150 "
              >
                Log-in
              </Link>
            )}
            {ctx.isLoggedIn && (
              <button
                href="/login"
                className="bg-transparent text-white px-5 py-1 border rounded-sm hover:bg-[#08220D] transition ease-in-out delay-150 "
                onClick={onLogout}
              >
                Log-out
              </button>
            )}
          </>
        </div>
      </div>
    </nav>
  );
}
