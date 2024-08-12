// const m = require('./module')
//
// console.log(m)	// {}

// const m = require('./module.export')
//
// console.log(m)
// m()

const m = require("./exports")

console.log(m)
m.fn()

// exports  等于  module.exports, 最终导出是以module.exports 为准