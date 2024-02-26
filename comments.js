// create web server
const express = require("express");
const app = express();
// create route
app.get("/comments", (req, res) => {
  res.json({ comments: [1, 2, 3, 4, 5] });
});
// start server
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
// Path: index.js
// create web server
const CreateWebServer = require("express");

// create route
app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});
// start server
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
