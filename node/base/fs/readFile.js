const fs = require('fs')

fs.readFile('./test.txt', 'utf8', function (err, dataStr) {
  console.log(err);
  console.log(dataStr)
  //  正确时 err 为null, dataStr 为文件内容
  // 错误时 err 为错误对象, dataStr 为undefined
})