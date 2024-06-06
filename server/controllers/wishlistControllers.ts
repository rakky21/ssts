import Wishlist from "../models/Wishlist";
import { Request, Response } from "express";

// // CREATE
export async function createWishlistController(req: Request, res: Response) {
  const newWishlist = new Wishlist({
    title: req.body.title,
    description: req.body.description,
  });
  const createdWishlist = await newWishlist.save();
  res.json(createdWishlist);
}
// // GET
export async function getWishlistController(req: Request, res: Response) {
  const wishlist = await Wishlist.find();
  res.json(wishlist);
}
// // DELETE
export async function deleteWishlistController(req: Request, res: Response) {
  const wishlistId = req.params.wishlistId;
  const wishlist = await Wishlist.findByIdAndDelete(wishlistId);
  res.json({
    wishlist,
    message: "Wishlist deleted",
  });
}
