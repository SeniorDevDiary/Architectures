const BlogRepository = require("../../core/ports/BlogRepository");

class InMemoryBlogRepository extends BlogRepository {
  constructor() {
    super();
    this.posts = new Map();
  }

  save(blogPost) {
    this.posts.set(blogPost.id, blogPost);
    return blogPost;
  }

  findById(id) {
    return this.posts.get(id);
  }

  findAll() {
    return Array.from(this.posts.values());
  }
}

module.exports = InMemoryBlogRepository;
