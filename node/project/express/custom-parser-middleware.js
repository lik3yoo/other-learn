const qs = require('querystring')

const urlencoded = function(req, res, next) {

	let str = ""
	req.on('data', (chunk) => {
		console.log(chunk)
		str += chunk
	})
	req.on('end', () => {
		console.log(str)
		const obj = qs.parse(str)
		console.log(obj)
	})

	next()
}

module.exports = {
	urlencoded,
}