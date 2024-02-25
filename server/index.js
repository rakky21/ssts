const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./model/User");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
