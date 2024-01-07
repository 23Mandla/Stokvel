"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const router = useRouter();

  //set egistration input values
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  //get input reg values
  function handleChange(evt) {
    setUser((previousUsers) => ({
      ...previousUsers,
      [evt.target.name]: evt.target.value,
    }));
  }

  async function submitHandler(evt) {
    /*try {
      const response =  await axios.post("/api/users/signup", user);
      console.log("Registration successfull", response.data);
      router.push("/login");
    } catch (error) {
      console.log("sign up failed : ", error.message);
    }*/

    evt.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        throw new Error("Failed to register");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-screen bg-[#222d27]">
      <div className="relative  w-1/3 m-auto top-32 border border-gray-500 rounded bg-slate-200">
        <h1 className="text-xl m-5 text-center">Please complete the fields below</h1>

        <div className="w-1/2 m-auto">
          <div className="mb-5">
            <label htmlFor="name" className="block text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="enter name ..."
              className="bg-transparent border-2 border-gray-400 p-1 rounded w-[100%]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="surname" className="block text-lg">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={user.surname}
              onChange={handleChange}
              placeholder="enter surname ..."
              className="bg-transparent border-2 border-gray-400 p-1 rounded w-[100%]"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="enter email address ..."
              className="bg-transparent border-2 border-gray-400 p-1 rounded w-[100%]"
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
              value={user.password}
              onChange={handleChange}
              placeholder="enter password ..."
              className="bg-transparent border-2 border-gray-400 p-1 rounded w-[100%]"
            />
          </div>

          <div className="flex gap-10 mb-8">
            <button
              className="bg-[#02291b] text-white py-1 px-3 rounded"
              onClick={submitHandler}
            >
              Register
            </button>
            <Link
              href="/login"
              className="bg-[#02291b] text-white py-1 px-3 rounded"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
