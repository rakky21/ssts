import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  itemName: String,
  itemImage: String,
  itemDescription: String,
  itemPrice: Number,
  itemQuantity: Number,
  itemCategory: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
