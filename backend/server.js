import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware — JSON body parse karne ke liye aur CORS allow karne ke liye
// (taake React frontend, jo alag port pe chalta hai, is backend ko call kar sake)
app.use(cors());
app.use(express.json());

// Health check route — server chal raha hai ya nahi, check karne ke liye
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Zainab's portfolio backend is running." });
});

// Contact form ka route — /api/contact
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});
