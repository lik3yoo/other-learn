const questring = require("querystring");
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const path = url.split("?")[0];
  const query = questring.parse(url.split("?")[1]);

  const fn = query.callback;

  if (req.method === "GET") {
    res.write(fn + "(" + JSON.stringify(123) + ")");
  }

  res.end();
});

server.listen("345");
console.log("server is running at port 345");
