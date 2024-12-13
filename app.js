const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("get request received");
  res.send("API Server is on successfully");
});

app.get("/health", (req, res) => {
  console.log("health check request received");
  res.send("API Server is healthy");
});

app.listen(3000, () => {
  console.log("listening on port 3000 successfully");
});
