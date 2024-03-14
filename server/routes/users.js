const express = require("express");

const user = require("../models/userModel");

const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

//GET all users
router.get("/", getUsers);

//GET single user
router.get("/:id", getUser);

//POST user
router.post("/", createUser);

//UPDATE
router.patch("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

module.exports = router;
