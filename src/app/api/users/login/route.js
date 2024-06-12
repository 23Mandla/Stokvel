import db_connect from "@/utils/db";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await db_connect();
    const { email, password } = await req.json();

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid password/email address!" },
        { status: 400 }
      );
    }

    // Check if password is valid
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { message: "Invalid password/email address!" },
        { status: 400 }
      );
    }

    // Create token data
    const tokenData = {
      id: user._id,
      email: user.email,
      password: user.password,
    };

    // Create token
    const token = Jwt.sign(tokenData, process.env.SECRETE_TOKEN, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      status: 200,
    });

    response.cookies.set("token", token);
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
