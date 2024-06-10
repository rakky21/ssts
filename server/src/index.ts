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
import {
  createProductController,
  getProductController,
  deleteProductController,
} from "../controllers/productControllers";

const PORT = 4000;
const app = express();
// app.use(cors({ origin: ["http://locaholhost:4000", "http://localhost:5173"] }));
app.use(cors({ origin: "*" }));
app.use(express.json());
// // WISH
app.post("/wishlist", createWishlistController);
app.get("/wishlist", getWishlistController);
app.delete("/wishlist/:wishlistId", deleteWishlistController);
// // CARD
app.post("/wishlist/:wishlistId/cards", createCardController);
app.get("/wishlist/:wishlistId", getCardController);
app.delete("/wishlist/:wishlistId/cards/:index", deleteCardController);
// // PRODUCT
app.post("/products", createCardController);
app.get("/products", getCardController);
app.delete("products/:productId", deleteCardController);
// // PRODUCT
app.post("/product", createProductController);
app.get("/product", getProductController);
app.delete("/product/:productId", deleteProductController);

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});
