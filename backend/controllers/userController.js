import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc auth user/set token
// rout POST /api/user/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newUser = await User.findOne({ email });
  if (newUser) {
    const passwordMatches = await newUser.comparePassword(password);
    if (passwordMatches) {
      generateToken(res, newUser._id);
      res.status(200).json({ name: newUser.name, email: newUser.email });
    } else {
      res.status(401).json("Invalid Email or Password");
    }
  } else {
    res.status(401).json("Invalid Email or Password");
  }
});

// @desc register a new user
// rout POST /api/user/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    res.status(400);
    throw new Error("This user already exist");
  }
  const newUser = await User.create({ name, email, password });
  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json(newUser);
  } else {
    res.status(400).json("Invalid user data");
  }
});

// profile
// rout POST /api/user/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "logout user" });
});

// @desc  get user profile
// rout Get /api/user/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const { name, email, _id: id } = req.user;
  res.status(200).json({ name, email, id });
});

// @desc  update user profile
// rout put /api/user/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const updateUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const updatedUser = await User.findOneAndUpdate({ _id: userId }, updateUser, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
