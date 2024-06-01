import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

import {
  createWishlistController,
  deleteWishlistController,
  getWishlistController,
} from "../controllers/wishlistControllers";
import {
  getCardController,
  createCardController,
  deleteCardController,
} from "../controllers/cardControllers";

const PORT = 4000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
// // WISH
app.get("/wishlist", getWishlistController);
app.post("/wishlist", createWishlistController);
app.delete("/wishlist/:wishlistId", deleteWishlistController);
// // CARD
app.get("/wishlist/:wishlistId/cards", getCardController);
app.post("/wishlist/:wishlistId/cards", createCardController);
app.delete("/wishlist/:wishlistId/cards", deleteCardController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});
