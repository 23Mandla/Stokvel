import db_connect from "@/utils/db";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await db_connect();
    console.log("CONNECTED TO MONGODB");

    const { email, password } = await req.json();

    //cehck if the user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    //check if password is valid
    const validPassword = bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    //create data token
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    //create token
    const token =  Jwt.sign(tokenData, process.env.SECRETE_TOKEN, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    })

    response.cookies.set("token", token)
    return response;
   
  } catch (error) {
    console.error("Login failed", error);
    return NextResponse.json({ error: "Registion failed" }, { status: 500 });
  }
}
