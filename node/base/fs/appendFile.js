const fs = require("fs")
const path = require("path")

const appendFile = fs.appendFile

const filepath = path.join(path.resolve(__dirname), 'test.txt')
appendFile(filepath, 'appendFile test txt', (err) => {
  console.log(err)
})