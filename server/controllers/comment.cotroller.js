const Comment = require("../models/Comment.model.js");
const Post = require("../models/Post.model.js");

// Create a comment
const createComment = async (req, res) => {
  const { body, postId } = req.body;

  try {
    // Check if the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const newComment = new Comment({
      body,
      author: req.user.id, // req.user will come from the authentication middleware
      post: postId,
    });

    const comment = await newComment.save();
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get comments for a specific post
const getCommentsForPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ post: postId }).populate("author", [
      "name",
      "email",
    ]);
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { createComment, getCommentsForPost };
