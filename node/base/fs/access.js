const fs = require('fs')
const path = require('path')

const access = fs.access

const _path = path.resolve(__dirname)
const filepath = path.join(_path, 'test.txt')
access(filepath, fs.constants.F_OK, (err, fd) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(fd)

})

