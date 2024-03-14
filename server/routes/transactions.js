const express = require("express");
const Transaction = require("../models/transModel");

const router = express.Router();

//GET all transactions
router.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

//GET single transaction
router.get("/:id", (req, res) => {
  res.json({ msg: "Single bud" });
});

//POST transaction
router.post("/", async (req, res) => {
  const { total } = req.body;
  try {
    const transaction = await Transaction.create({total})
    res.status(200).json(transaction)
  } catch (err) {
    res.status(400).json({err: err.message})
  }
  res.json({ msg: "posted a new bud" });
});

//UPDATE
router.patch("/:id", (req, res) => {
  res.json({ msg: "Updated a bud" });
});

//DELETE
router.delete("/:id", (req, res) => {
  res.json({ msg: "bud deleted" });
});

module.exports = router;
