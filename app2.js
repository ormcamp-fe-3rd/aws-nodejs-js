require("dotenv").config();
const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multers3 = require("multer-s3");
const express = require("express");
const app = express();

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multers3({
    s3,
    bucket: "myboards",
    key: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.send(req.file);
});

app.listen(3000, () => {
  console.log("listening on port 3000 successfully");
});
