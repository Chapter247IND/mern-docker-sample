const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.static("./uploads"));

app.post(
  "/",
  multer({
    storage: multer.diskStorage({
      destination: "./uploads",
    }),
  }).single("image"),
  (req, res) => {
    return res.status(200).json({
      message: "App is working fine",
      file: req.file.filename,
    });
  }
);

const PORT = process.env.PORT || 8000;

app.listen(PORT).on("listening", () => {
  console.log(`App started working on port: ${PORT}`);
});
