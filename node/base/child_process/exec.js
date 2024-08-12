const child = require("child_process");

// exec sync
const execSync = child.execSync;
const exec = child.exec;
const command = "git status";
const result = execSync(command);
// console.log(result.toString())

// 判断文件夹下文件是否存在
// const fs = require('fs')
// const path = require('path')
// const dir = path.resolve(__dirname, './')
// const files = fs.readdirSync(dir)
// console.log(files)

// //创建release文件，并添加到文件夹中
// const release = path.resolve(__dirname, './release')
// if (!fs.existsSync(release)) {
//   fs.mkdirSync(release)
// }
// const releaseFile = path.resolve(release, './release.txt')

execSync("node test.js");
