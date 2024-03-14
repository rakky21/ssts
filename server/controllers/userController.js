const User = require("../models/userModel");
const mongoose = require("mongoose");

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};
// get a single user
const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "User not found" });
  }
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ err: "No user found" });
  }
  res.status(200).json(user);
};

// create a new user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  //add doc to db
  try {
    const user = await User.create({ username, password, email });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
// delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "User not found" });
  }
  const user = await User.findOneAndDelete({ _id: id });
  if (!user) {
    return res.status(400).json({ err: "No user found, unable to delete" });
  }
  res.status(200).json(user);
};

// update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ err: "No user found" });
  }
  const user = await User.findOneAndUpdate({_id:id}, {
    //whatever properties we output in this update object and it's going to update those in that particular document
    ...req.body
  })
  if (!user) {
    return res.status(400).json({ err: "No user found" });
  }
  res.status(200).json(user);
};

module.exports = { createUser, getUser, getUsers, updateUser, deleteUser };
