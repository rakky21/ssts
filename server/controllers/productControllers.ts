import Product from "../models/Product";
import { Response, Request } from "express";

// // CREATE
export async function createProductController(req: Request, res: Response) {
  const newProduct = new Product({
    itemname: req.body.itemname,
    itemimage: req.body.itemimage,
    itemdescription: req.body.itemdescription,
    itemprice: req.body.itemprice,
    itemquantity: req.body.itemquantity,
    itemcategory: req.body.itemcategory,
  });
  const createProduct = await newProduct.save();
  res.json(createProduct);
}

// // GET
export async function getProductController(req: Request, res: Response) {
  const products = await Product.find();
  res.json(products);
}

// // DELETE
export async function deleteProductController(req: Request, res: Response) {
  const productId = req.params.productId;
  const product = await Product.findByIdAndDelete(productId);
  res.json({
    product,
    message: "Product deleted",
  });
}
