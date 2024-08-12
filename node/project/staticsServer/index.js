const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3000;

const server = http.createServer(async (req, res) => {
  console.log(req);
  const fileUrl = req.url;
  const staticUrl = path.resolve(__dirname, "./statics");
  const relPath = path.join(staticUrl, fileUrl);
  const isExist = fs.existsSync(relPath);
  if (isExist) {
    try {
      const relFile = fs.readFileSync(relPath);
      const extname = path.extname(relFile);
      let contentType =  'text/html'
      switch (extname) {
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.png':
          contentType = 'image/png'
          break;
        case '.mp4':
          contentType = 'video/mp4'
      }
      res.writeHead(200, { "Content-Type": contentType})
      res.end(relFile);
    } catch {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end("File Not Found");
  }
});

server.listen(port, () => {
  console.log("server is running at " + port);
});
