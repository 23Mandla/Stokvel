export async function GET(request) {
  const token = request.cookies.get("token")?.value || "";
  if (token) {
    try {
      const usersCount = await User.countDocuments();
      res.status(200).json({ count: usersCount });
    } catch (error) {}
  }
}
