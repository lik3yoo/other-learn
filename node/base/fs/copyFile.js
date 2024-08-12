const fs = require("fs")
const path = require("path")

const copyFile = fs.copyFile

const file = path.join(__dirname, './test.txt')
const targetFile = path.join(__dirname, '../')
copyFile(file, `${targetFile}/test.txt`, (err) => {
  console.log(err)
})