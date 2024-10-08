const Post = require("../models/Post.model.js");
const User = require("../models/User.model.js");

// Create a post
const createPost = async (req, res) => {
  const { title, body } = req.body;

  try {
    const user = await User.findById(req.user.id);

    const newPost = new Post({
      title,
      body,
      author: req.user.id, // req.user will come from the authentication middleware
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", ["name", "email"])
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { createPost, getPosts };
