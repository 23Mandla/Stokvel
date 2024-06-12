"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import AuthContext from "@/helpers/auth-context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

export default function SignUpPage() {
  const [member, setMember] = useState({
    email: "",
    password: "",
  });
  const [serverResponse, setServerResponse] = useState("");

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
      if (member.password === "" || member.email === "") {
        return setServerResponse("Email and password are required!");
      }else{
             //used the fetch method, easier to handle error messages from the server
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(member),
      });
      
      /*const response = await axios.post(
        "http://localhost:3000/api/users/login",
        member
      );*/

      const result = await response.json();
      if (response.status === 200) {
        router.push("/profile");
        ctx.onLogIn();

      } else {
        setServerResponse(result.message);
      }
      }
 
    } catch (error) {
      console.log(error)
      toast.error("Login failed");
    }
  }

  return (
    <div className="w-full h-screen p-10 bg-[#222d27]">
      <div className="relative w-1/3 mx-auto top-24 pt-3 border border-gray-500 rounded bg-slate-100 p-3">
        <h1 className="text-xl mb-2 text-center border-b-2 border-black pb-1.5 font-bold">
          Login into stokvel
        </h1>
        <p className="text-sm text-center text-red-500">{serverResponse}</p>
        <form
          onSubmit={submitHandler}
          className="w-full space-y-8 py-6 items-center relative"
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
