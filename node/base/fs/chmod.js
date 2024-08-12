const path = require("path")
const fs = require("fs")

const filepath = path.join(__dirname, 'test.txt')
const chmod = fs.chmod

chmod(filepath, fs.constants.S_IRUSR, (err) => {
  console.log(err)
})
