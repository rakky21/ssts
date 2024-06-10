import User from "../models/User";
import { Request, Response } from "express";

// // CREATE
export async function createUser(req: Request, res: Response) {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  const createUser = await newUser.save();
  res.json(createUser);
}
// // GET
export async function getUser(req: Request, res: Response) {
  const user = await User.find();
  res.json(user);
}
// // DELETE
export async function deleteUser(req: Request, res: Response) {
  const userId = req.params.userId;
  const user = await User.findByIdAndDelete(userId);
  res.json({
    user,
    message: "User Deleted",
  });
}
