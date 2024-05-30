import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

import {
  createWishlistController,
  deleteWishlistController,
  getWishlistController,
} from "../controllers/withlistControllers";
import {
  getWishlistCardController,
  createWishlistCardController,
  deleteWishlistCardController,
} from "../controllers/wishlistCardController";

const PORT = 4000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/wishlist", getWishlistController);
app.post("/wishlist", createWishlistController);
app.delete("/wishlist/:wishlistId", deleteWishlistController);
app.get("/wishlist/:wishlistId/card", getWishlistCardController);
app.post("/wishlist/:wishlistId/card", createWishlistCardController);
app.delete("/wishlist/:wishlistId/card", deleteWishlistCardController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});
9;
