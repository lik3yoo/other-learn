const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // 设置响应内容
  res.end('Hello, world!');
});

// 监听端口8888
server.listen(8888, () => {
  console.log('Server is running at http://localhost:8888');
});
