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
    <div className="w-full h-screen p-10 bg-[#222d27]">
      <div className="relative w-1/3 mx-auto top-24 pt-3 border border-gray-500 rounded bg-slate-100 p-3">
        <h1 className="text-xl mb-2 text-center border-b-2 border-black pb-1.5 font-bold">
          Login into stokvel
        </h1>
        <form
          onSubmit={submitHandler}
          className="w-full space-y-8 py-6 items-center"
        >
          <div className="mb-5 w-[80%] m-auto">
            <label htmlFor="email" className="block text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={member.email}
              onChange={handleChange}
              placeholder="enter email address ..."
              className="bg-transparent border-2 border-gray-400 p-1 rounded w-[90%]"
            />
          </div>

          <div className="mb-5 w-[80%] m-auto">
            <label htmlFor="password" className="block text-lg mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={member.password}
              onChange={handleChange}
              placeholder="enter password ..."
              className="bg-transparent border-2 border-gray-400 p-1 rounded w-[90%]"
            />
          </div>

          <div className="flex justify-center gap-10 mb-8">
            <button className="bg-[#2a5a3a] text-white py-1 px-5 rounded">
              Login
            </button>
            <Link
              href="/signup"
              className="bg-[#2a5a3a] text-white py-1 px-3 rounded"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
