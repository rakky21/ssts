const express = require("express");
const UserModel = require("./models/User");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());

//route
app.use(require("./routes/api/index.js"));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});