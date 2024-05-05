require("dotenv").config();
var cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");

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


//   import fs from 'node:fs'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
// import express from 'express'
// import { createServer as createViteServer } from 'vite'

// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// async function createServer() {
//   const app = express()

//   // Create Vite server in middleware mode and configure the app type as
//   // 'custom', disabling Vite's own HTML serving logic so parent server
//   // can take control
//   const vite = await createViteServer({
//     server: { middlewareMode: true },
//     appType: 'custom'
//   })

//   // Use vite's connect instance as middleware. If you use your own
//   // express router (express.Router()), you should use router.use
//   // When the server restarts (for example after the user modifies
//   // vite.config.js), `vite.middlewares` is still going to be the same
//   // reference (with a new internal stack of Vite and plugin-injected
//   // middlewares). The following is valid even after restarts.
//   app.use(vite.middlewares)

//   app.use('*', async (req, res) => {
//     // serve index.html - we will tackle this next
//   })

//   app.listen(5173)
// }

// createServer()