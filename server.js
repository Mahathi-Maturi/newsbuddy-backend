// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route (important for Render)
app.get("/", (req, res) => {
  res.send("✅ NewsBuddy Backend is Running Successfully!");
});

// Example API route (you can modify later)
app.get("/news", async (req, res) => {
  try {
    // Example: fetching dummy news
    const sampleNews = [
      { id: 1, title: "AI is transforming education", category: "Technology" },
      { id: 2, title: "India launches new space mission", category: "Science" },
    ];
    res.json(sampleNews);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// ✅ Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
