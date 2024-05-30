class BlogPost {
  constructor(title, content) {
    this.id = Date.now();
    this.title = title;
    this.content = content;
  }
}

module.exports = BlogPost;
