const http = require('http');
const async_hooks = require('async_hooks');
const { v4: uuidv4 } = require('uuid');

// 存储请求ID的Map
const asyncContext = new Map();

// 创建异步钩子
const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    // 如果当前执行上下文有请求ID，则将其关联到新的异步ID
    if (asyncContext.has(async_hooks.executionAsyncId())) {
      console.log(123)
      asyncContext.set(asyncId, asyncContext.get(async_hooks.executionAsyncId()));
    }
  },
  destroy(asyncId) {
    // 清理
    asyncContext.delete(asyncId);
  }
}).enable();

// 创建HTTP服务器
const server = http.createServer((req, res) => {
  // 为每个请求生成一个唯一的请求ID
  const requestId = uuidv4();
  asyncContext.set(async_hooks.executionAsyncId(), requestId);

  // 假设这是一个异步操作
  setImmediate(() => {
    console.log(`处理请求: ${requestId}`); // 使用请求ID进行日志记录
    res.writeHead(200);
    res.end(`请求ID: ${requestId}`);
  });
});

server.listen(3000, () => console.log('服务器运行在 http://localhost:3000/'));

