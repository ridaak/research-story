const express = require("express");

const app = express();

const port = process.env.port || 4000;

app.get("/", (req, res) => {
  res.send("This is an express application!!!!!.");
});

app.listen(port, () => {
  console.log("listening...");
});
