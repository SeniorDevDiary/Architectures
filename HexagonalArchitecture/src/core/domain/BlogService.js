const BlogPost = require("./BlogPost");

class BlogService {
  constructor(blogRepository) {
    this.blogRepository = blogRepository;
  }

  createPost(title, content) {
    const post = new BlogPost(title, content);
    return this.blogRepository.save(post);
  }

  getPost(id) {
    return this.blogRepository.findById(id);
  }

  getAllPosts() {
    return this.blogRepository.findAll();
  }
}

module.exports = BlogService;
