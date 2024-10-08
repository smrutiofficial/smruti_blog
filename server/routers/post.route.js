const express = require("express");
const { createPost, getPosts } = require("../controllers/post.controller.js");
const auth = require("../middlewares/auth.middleware.js"); // We'll implement this middleware next

const router = express.Router();

// Create a post (requires authentication)
router.post("/", auth, createPost);

// Get all posts
router.get("/", getPosts);

module.exports = router;
