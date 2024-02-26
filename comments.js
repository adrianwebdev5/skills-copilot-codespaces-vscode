// create web server
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/comments") {
    fs.readFile(path.join(__dirname, "comments.json"), "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Server error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Resource not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Path: comments.json
[
  {
    id: 1,
    name: "John Doe",
    email: "test@test.com",
  },
];
