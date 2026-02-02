import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await Message.create({ name, email, message });

    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
