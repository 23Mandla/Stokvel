import User from "@/model/userModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  const token = request.cookies.get("token")?.value || "";
  if (token) {
    try {
      const user = await User.find({}, { name: 1, surname: 1 });
      const userData = user.map((user) => ({
        name: user.name,
        surname: user.surname,
      }));
      return NextResponse.json({
        status: 200,
        data: userData,
      });
    } catch (error) {
      return NextResponse.json({
        error: error,
        message: "Unable to find user",
        status: 404,
      });
    }
  }
}
