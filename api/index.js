const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables
env.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// CORS setup


//const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: "https://localhost:3000", // Allow this origin to access the resources
    methods: "GET,POST,PUT,DELETE", // Specify the allowed methods
  })
);

// Handle preflight requests
app.options("*", cors());


// Parse JSON and URL-encoded data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth/register", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
