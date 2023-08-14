import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc auth user/set token
// rout POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// @desc register a new user
// rout POST /api/user/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "register user" });
});

// profile
// rout POST /api/user/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "logout user" });
});

// @desc  get user profile
// rout Get /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
});

// @desc  update user profile
// rout put /api/user/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
