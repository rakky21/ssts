import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  itemname: String,
  itemimage: String,
  itemdescription: String,
  itemprice: Number,
  itemquantity: Number,
  itemcategory: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
