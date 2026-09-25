import { Router } from "express";
import pool from "../config/db.js";

const router = Router();

// POST /api/contact — naya contact message MySQL mein save karta hai
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation — teeno fields required hain
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email aur message sab zaroori hain." });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.status(201).json({
      success: true,
      message: "Message safaltapoorvak save ho gaya!",
      id: result.insertId,
    });
  } catch (err) {
    console.error("DB insert error:", err);
    res.status(500).json({ error: "Server error — message save nahi ho saka." });
  }
});

// GET /api/contact — saare messages fetch karta hai (apne records dekhne ke liye)
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT id, name, email, message, created_at FROM contact_messages ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error("DB fetch error:", err);
    res.status(500).json({ error: "Server error — messages fetch nahi ho sake." });
  }
});

export default router;
