import Wishlist from "../models/Wishlist";
import { Request, Response } from "express";

// // CREATE
export async function createCardController(req: Request, res: Response) {
  const wishlistId = req.params.wishlistId;
  const wishlist = await Wishlist.findById(wishlistId);
  if (!wishlist) return res.status(400).send("No card was found with this ID");
  const { text } = req.body;
  wishlist.cards.push(text);
  await wishlist.save();
  res.json(wishlist);
}
// // GET
export async function getCardController(req: Request, res: Response) {
  const { wishlistId } = req.params;
  const wishlist = await Wishlist.findById(wishlistId);
  res.json(wishlist);
}

// // DElETE
export async function deleteCardController(req: Request, res: Response) {
  const wishlistId = req.params.wishlistId;
  const index = req.params.index;
  const wishlist = await Wishlist.findById(wishlistId);
  if (!wishlist) return res.status(400).send("No card exists with this ID");
  wishlist.cards.splice(parseInt(index), 1);
  await wishlist.save();
  res.json(wishlist);
}
