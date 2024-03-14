// // const db = require("./config/connection");

// //express app

//route THIS IS THE PROBLEM
// app.use(require("./routes/api/index.js"));

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });

//2

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const API_ROUTE = require("./routes/transactions");
const USER_API = require("./routes/users");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/buds/", USER_API);

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
