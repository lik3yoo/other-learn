const fs = require("fs")
const path = require("path")

const dirPath = path.join(__dirname, "testDir")
fs.mkdir(dirPath, (err) => {
  console.log(err)
})