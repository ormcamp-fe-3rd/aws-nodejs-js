const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("API Server is on successfully");
});

app.listen(3000);
