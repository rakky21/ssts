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