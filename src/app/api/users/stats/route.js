import User from "@/model/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("token")?.value || "";
  if (token) {
    try {
      const usersCount = await User.countDocuments();
      return NextResponse.json({
        status: 200,
        count: usersCount,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json({
        status: 500,
        message: "Internal server error",
      });
    }
  }
}
