const express = require("express");
const connectDB = require("./db/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse incoming JSON
app.use(express.json());

// Define routes
app.use("/api/auth", require("./routers/auth.route.js"));
app.use("/api/posts", require("./routers/post.route.js"));
app.use("/api/comments", require("./routers/comment.route.js")); // Comment routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
