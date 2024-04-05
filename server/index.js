require("dotenv").config();
var cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");

const API_ROUTE = require("./routes/transactions");
const USER_API = require("./routes/users");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//express app
const app = express();
app.use(cors());

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/users/", USER_API);

//connect to DB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    //listen request
    app.listen(PORT, () => {
      console.log(`🌍 listening on port:${PORT} & connected to db`);
    });
  })
  .catch((err) => {
    console.log(err);
  });