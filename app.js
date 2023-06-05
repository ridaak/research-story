const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("This is an express application!!!!!.");
});

app.listen(port, () => {
  console.log("listening...");
});
