const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.db_user_name}:${process.env.db_pass}@cluster0.vt0qgrn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("ok I am well!!");
});

app.listen(port, () => {
  console.log("server is running on port =>", port);
});
