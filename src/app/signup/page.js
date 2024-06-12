"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { set } from "mongoose";
// import axios from "axios" for API calls;

export default function SignUpPage() {
  const router = useRouter();

  //set egistration input values
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });
  const [serverResponse, setServerResponse] = useState("");

  //get input registration values
  function handleChange(evt) {
    setUser((previousUsers) => ({
      ...previousUsers,
      [evt.target.name]: evt.target.value,
    }));
  }

  // Function to handle form submission
  async function submitHandler(evt) {
    /*try {
      const response =  await axios.post("/api/users/signup", user);
      console.log("Registration successfull", response.data);
      router.push("/login");
    } catch (error) {
      console.log("sign up failed : ", error.message);
    }*/

    evt.preventDefault();

    // Check if password matches confirm password
    if (user.password !== user.cPassword) {
      alert("Password does not match");
      return;
    }

    try {
    if(user.name === "" || user.surname === "" || user.email === "" || user.phone === "" || user.password === "" || user.cPassword === ""){
      return setServerResponse("All fields are required!")
      }else{
          // Send a POST request to the signup API endpoint
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const result = await response.json();

      // If the response is successful, redirect to the login page
      if (response.ok) {
        setServerResponse(toast.success(result.message));
        router.push("/login");
      } else {
        throw new Error("Failed to register");
      }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleButtonClick = () => {
     // Displays a success message
  };

  return (
    <div className="w-full h-screen bg-[#222d27]">
      <div className="relative  w-1/2 m-auto top-32 border border-gray-500 rounded bg-slate-100">
        <h1 className="text-xl m-5 text-center border-b-2 border-black pb-1.5 font-bold">
          Please complete the form.
        </h1>
        <p className="text-sm text-center text-red-500">{serverResponse}</p>
        <div className="w-full m-auto px-5 space-y-4 py-6">
          <div className="grid grid-cols-2 px-7 gap-4">
            <div className="mb-5">
              <label htmlFor="name" className="block text-lg mb-2">
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
              <label htmlFor="surname" className="block text-lg mb-2">
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
          </div>

          <div className="grid grid-cols-2 px-7 gap-4">
            <div className="mb-5">
              <label htmlFor="email" className="block text-lg mb-2">
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
              <label htmlFor="phone" className="block text-lg mb-2">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="enter cell number ..."
                className="bg-transparent border-2 border-gray-400 p-1 rounded w-[100%]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 px-7 gap-4">
            <div className="mb-7">
              <label htmlFor="password" className="block text-lg mb-2">
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

            <div className="mb-5">
              <label htmlFor="cPassword" className="block text-lg mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="cPassword"
                name="cPassword"
                value={user.cPassword}
                onChange={handleChange}
                placeholder="confirm password ..."
                className="bg-transparent border-2 border-gray-400 p-1 rounded w-[100%]"
              />
            </div>
          </div>

          <div className="flex gap-10 mb-8 justify-center">
            <button
              className="bg-[#2a5a3a] text-white py-1 px-3 rounded"
              onClick={submitHandler}
            >
              Register
            </button>
            <Link
              href="/login"
              className="bg-[#2a5a3a] text-white py-1 px-5 rounded"
              onClick={handleButtonClick}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
