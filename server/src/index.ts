import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
import Wishlist from "../models/Wishlist";
import Product from "../models/Product";

const PORT = 4000;
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// CREATE THE ROUTES AND UPDATE THE LAYOUT. ADD MERCHANDISE SAMPLE
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
app.delete("/wishlist/:wishlistId", async (req: Request, res: Response) => {
  const wishlistId = req.params.wishlistId;
  const wishlist = await Wishlist.findByIdAndDelete(wishlistId);
  res.json({
    wishlist,
    message: "Wishlist deleted",
  });
});

// PRODUCT
app.get("/products", async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
});
app.post("/product", async (req: Request, res: Response) => {
  const newProduct = new Product({
    itemName: req.body.itemName,
    itemImage: req.body.itemImage,
    itemDescription: req.body.itemDescription,
    itemPrice: req.body.itemPrice,
    itemQuantity: req.body.itemQuantity,
    itemCategory: req.body.itemCategory,
  });
  const createProduct = await newProduct.save();
  res.json(createProduct);
});
app.delete("/product/:productId", async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const product = await Product.findByIdAndDelete(productId);
  res.json({
    product,
    message: "Product deleted",
  });
});
mongoose.connect(process.env.MONGO_URL!).then(() => {
  app.listen(PORT);
  console.log(`🌍 listening on port: ${PORT} & connected to db`);
});
