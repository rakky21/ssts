import express, { Request, Response } from "express";

import mongoose from "mongoose";

import { config } from "dotenv";
config();

import Wishlist from "../models/Wishlist";

const PORT = 4000;
const app = express();
app.use(express());

app.post("/wishlist", async (req: Request, res: Response) => {
  const newWishlist = new Wishlist({
    creator: req.body.creator,
    description: req.body.description,
    // creator: "Tatiana",
    // description: "This item ...",
  });
  const createdWishlist = await newWishlist.save();
  res.json(createdWishlist);
});

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});
