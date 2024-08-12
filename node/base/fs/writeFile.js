const fs = require('fs')

fs.writeFile('./test.txt', 'hello nodejs', 'utf8', function (err) {
  console.log(err)
  // 成功 err为null
  // 失败 err为错误对象
})