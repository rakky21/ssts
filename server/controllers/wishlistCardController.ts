// import { createWishlistCard } from "../../client/src/api/wishlistCard";
import Wishlist from "../models/Wishlist";
import { Request, Response } from "express";

export async function getWishlistCardController(req: Request, res: Response) {
  const { wishlistId } = req.params;
  const wishlist = await Wishlist.findById(wishlistId);
  res.json(wishlist);
}

export async function createWishlistCardController(
  req: Request,
  res: Response
) {
  const wishlistId = req.params.wishlistId;
  const wishlist = await Wishlist.findById(wishlistId);
  if (!wishlist) return res.status(400).send("No wishlist found with this ID");
  const { text } = req.body;
  wishlist.cards.push(text);
  await wishlist.save();
  res.json(wishlist);
}

export async function deleteWishlistCardController(
  req: Request,
  res: Response
) {
  const wishlistId = req.params.wishlistId;
  const wishlist = await Wishlist.findByIdAndDelete(wishlistId);
  res.json({
    wishlist,
    message: "Wishlist deleted",
  });
}
