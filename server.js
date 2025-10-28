// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route (important for Render)
app.get("/", (req, res) => {
  res.send("✅ NewsBuddy Backend is Running Successfully!");
});

// ✅ Main API route for news
app.get("/api/news", async (req, res) => {
  const { category = "general", audience = "kids" } = req.query;

  try {
    // Example dummy data — you can replace later with real API logic
    const news = [
      {
        title: "India launches new education satellite for students",
        description:
          "ISRO successfully launched a new satellite to provide better access to educational resources.",
        url: "https://example.com/news1",
      },
      {
        title: "Students participate in global coding challenge",
        description:
          "Over 10,000 students from around the world took part in the 2025 CodeFest event.",
        url: "https://example.com/news2",
      },
      {
        title: "Mumbai schools go green with solar energy",
        description:
          "Several schools in Mumbai are switching to solar power to promote sustainability.",
        url: "https://example.com/news3",
      },
    ];

    res.json(news);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
