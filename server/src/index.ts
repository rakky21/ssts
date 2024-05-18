import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

import { config } from "dotenv";
config();

import Wishlist from "../models/Wishlist";

const PORT = 4000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

//Routes
app.get("/wishlist", async (req: Request, res: Response) => {
  const wishlist = await Wishlist.find();
  res.json(wishlist);
});
app.post("/wishlist", async (req: Request, res: Response) => {
  const newWishlist = new Wishlist({
    title: req.body.title,
    description: req.body.description,
  });
  const createdWishlist = await newWishlist.save();
  res.json(createdWishlist);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});
