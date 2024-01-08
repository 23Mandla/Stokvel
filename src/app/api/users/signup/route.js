import db_connect from "@/utils/db";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await db_connect();
    const { name, surname, email, phone, password } = await req.json();

    //cehck if the user exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ error: "User already exists" });
    }

    //ecrytpt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //save new user
    await User.create({
      name,
      surname,
      email,
      phone,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration failed", error);
    return NextResponse.json({ error: "Registion failed" }, { status: 500 });
  }
}
