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