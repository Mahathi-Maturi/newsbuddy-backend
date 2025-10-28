const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("🎉 NewsBuddy Backend is Live and Working!");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
