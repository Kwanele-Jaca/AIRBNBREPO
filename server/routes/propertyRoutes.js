import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

// GET ALL PROPERTIES
router.get("/", async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// GET ONE PROPERTY
router.get("/:id", async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.json(property);
});

// CREATE PROPERTY (HOST DASHBOARD)
router.post("/", async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.json(newProperty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE PROPERTY
router.delete("/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json({
      message: "Property deleted successfully",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
});

export default router;