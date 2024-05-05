import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
  creator: String,
  description: String,
});

const WishlistModel = mongoose.model("Wishlist", WishlistSchema);

export default WishlistModel;
