const express = require("express");
const BlogService = require("../../core/domain/BlogService");
const InMemoryBlogRepository = require("../persistence/InMemoryBlogRepository");

const blogRepository = new InMemoryBlogRepository();
const blogService = new BlogService(blogRepository);

const router = express.Router();

router.post("/posts", (req, res) => {
  const { title, content } = req.body;
  const post = blogService.createPost(title, content);
  res.status(201).json(post);
});

router.get("/posts/:id", (req, res) => {
  const post = blogService.getPost(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});

router.get("/posts", (req, res) => {
  const posts = blogService.getAllPosts();
  res.json(posts);
});

module.exports = router;
