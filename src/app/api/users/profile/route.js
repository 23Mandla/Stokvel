import User from "@/model/userModel";
import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";

export async function GET(request) {
  const token = request.cookies.get("token")?.value || "";

  if (token) {
    try {
      const decodedToken = Jwt.verify(token, process.env.SECRETE_TOKEN);
      const user = await User.findById(decodedToken.id);
      if (!user) {
        return NextResponse.status(404).json({ error: "User not found" });
      }

      return NextResponse.json({
        surname: user.surname,
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.log("Token verification error:", error);
      return NextResponse.status(404).json({
        message: "Token invalid or expired",
      });
    }
  } else {
    return NextResponse.status(401).json({ error: "No token found" });
  }
}
