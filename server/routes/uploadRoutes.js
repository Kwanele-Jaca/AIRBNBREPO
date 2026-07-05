import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
});

router.post("/", upload.single("image"), async (req, res) => {

  try {

    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded",
      });
    }

    cloudinary.uploader
      .upload_stream(
        {
          folder: "airbnb",
        },
        (error, result) => {

          if (error) {
            console.log(error);
            return res.status(500).json(error);
          }

          res.json({
            url: result.secure_url,
          });

        }
      )
      .end(req.file.buffer);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });

  }

});

export default router;