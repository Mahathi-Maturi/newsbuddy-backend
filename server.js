import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ NewsBuddy Backend is Running Successfully!");
});

// ✅ News route
app.get("/news", (req, res) => {
  const sampleNews = [
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

  res.json(sampleNews);
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
