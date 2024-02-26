// create web server
// create a web server that takes a request and responds with a JSON object.
// The server should listen on port 8080.

var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  // parse the url
  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;
  var query = urlObj.query;
  var iso = query.iso;
  var date = new Date(iso);

  if (pathname === "/api/parsetime") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      })
    );
  }

  if (pathname === "/api/unixtime") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        unixtime: date.getTime(),
      })
    );
  }
});

server.listen(8080);
