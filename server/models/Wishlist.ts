import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  title: String,
  description: String,
  cards: [String],
});

const WishlistModel = mongoose.model("Wishlist", WishlistSchema);

export default WishlistModel;
