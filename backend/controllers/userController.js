import asyncHandler from "express-async-handler";
// auth user/set token
// rout POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// register user/set token
// rout POST /api/user/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "register user" });
});

export { authUser, registerUser };
