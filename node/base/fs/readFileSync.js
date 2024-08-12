const fs = require('fs')

const readFileSync = fs.readFileSync

// 读取test.txt
const data = readFileSync('./test.txt', 'utf8')
console.log(data)