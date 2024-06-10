import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

const PORT = 4000;
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});

// // MOVE TO THE ROUTES
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

import {
  createUser,
  getUser,
  deleteUser,
} from "../controllers/userControllers";
// // USER
app.post("/user", createUser);
app.get("/user", getUser);
app.delete("/user/:userId", deleteUser);
// // WISH
app.post("/wishlist", createWishlistController);
app.get("/wishlist", getWishlistController);
app.delete("/wishlist/:wishlistId", deleteWishlistController);
// // CARD
app.post("/wishlist/:wishlistId/cards", createCardController);
app.get("/wishlist/:wishlistId", getCardController);
app.delete("/wishlist/:wishlistId/cards/:index", deleteCardController);
<<<<<<< HEAD
=======
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
>>>>>>> faf4ca083774ffa7125cc70d1a2dbee8f21fff0f
