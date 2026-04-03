const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("./", (req, res) => {
  res.join({ message: "API running" });
});

app.use("/api/auth", require("./routes/authRoutes"));

// app.listen(5000, () => console.log("Server running on port 5000"));

const PORT = process.env.port || 8000;

app.listen(PORT, () => console.log(`server running on on port ${PORT}`));
