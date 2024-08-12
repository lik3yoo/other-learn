// 局部生效中间件

const express = require('express')
const app = express()

// 中间件
const mw = function(req, res, next) {
	console.log('调用中间件函数')
	req.test = 'test'	// 定义 test属性共router使用
	next()	// 中间件一定要调用next
}

const mw2 = function(req, res, next) {
	console.log('调用中间件2')
	next()
}

app.get('/index', mw, (req, res) => {
	res.send('hello world')
})

app.get('/test', mw, mw2, (req, res) => {
}) // 调用多个中间件
// app.get('/test', [mw, mw2], (req, res)=>{})	// 方式2


app.listen(888, () => {
	console.log('app is running at http://localhost:888')
})