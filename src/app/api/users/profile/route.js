import User from "@/model/userModel";
import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";

// Define the GET request handler function
export async function GET(request) {
  // Get the token from the request cookies
  const token = request.cookies.get("token")?.value || "";

  // Check if the token exists
  if (!token) {
    return NextResponse.json({ status: 401, error: "No token found" });
  }

  try {
    // Verify the token using the secret token from the environment variables
    const decodedToken = Jwt.verify(token, process.env.SECRETE_TOKEN);
    const user = await User.findById(decodedToken.id);

    // Check if the user exists
    if (!user) {
      return NextResponse.json({ status: 404, error: "User not found" });
    }

    // Return a JSON response with the user's details
    return NextResponse.json({
      surname: user.surname,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  } catch (error) {
    console.log("Token verification error:", error);
    return NextResponse.json({
      status: 404,
      message: "Token invalid or expired",
    });
  }
}
