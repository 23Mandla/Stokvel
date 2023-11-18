"use client";

import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/helpers/auth-context";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

export default function SignUpPage() {
  const [member, setMember] = useState({
    email: "",
    password: "",
  });

  const ctx = useContext(AuthContext);

  const router = useRouter();

  const handleChange = (evt) => {
    setMember((member) => ({
      ...member,
      [evt.target.name]: evt.target.value,
    }));
  };

  async function submitHandler(evt) {
    evt.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        member
      );
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
      ctx.onLogIn();
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="w-full h-screen p-10 bg-[#dae9e1]">
      <h1 className="text-center text-gray-700 text-3xl">Sign up form</h1>
      <div className="relative grid grid-flow-col w-4/5 mx-auto top-24 border border-gray-500 rounded">
        <div className="flex items-center justify-center bg-[#02291b] text-white">
          hello
        </div>

        <div className="grid justify-center mt-10">
          <h1 className="text-xl mb-8">Login into stokvel</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={member.email}
                onChange={handleChange}
                placeholder="enter email address ..."
                className="bg-transparent border-2 border-gray-400 p-1 rounded"
              />
            </div>

            <div className="mb-7">
              <label htmlFor="password" className="block text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={member.password}
                onChange={handleChange}
                placeholder="enter password ..."
                className="bg-transparent border-2 border-gray-400 p-1 rounded"
              />
            </div>

            <div className="flex gap-10 mb-8">
              <button
                className="bg-[#02291b] text-white py-1 px-3 rounded"
              >
                Login
              </button>
              <Link
                href="/signup"
                className="bg-[#02291b] text-white py-1 px-3 rounded"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
