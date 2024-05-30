const express = require("express");
const blogController = require("./adapters/rest/BlogController");

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api", blogController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
