const express = require("express");
// const db = require("./config/connection");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://fcribas:Magnolia@cluster0.qlr3650.mongodb.net/ssts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//route
app.use(require("./routes/api/index.js"));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});