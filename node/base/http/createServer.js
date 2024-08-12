const http = require('http')

const server = http.createServer()

server.on('request', function(req, res) {
	console.log(req)
	let url = req.url
	et method = req.method

	res.setHeader('Content-Type', 'text/html; charset=utf-8')

	res.end('你好')
})

server.listen(888, () => {
	console.log('sever is running on http://localhost:888')
})
