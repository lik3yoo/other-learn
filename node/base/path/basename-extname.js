const path = require('path');

const pathStr = '/Users/xuguoming/learn/node/path/join.js'

let base = path.basename(pathStr)
let ext = path.extname(pathStr)

console.log(base)
console.log(ext)