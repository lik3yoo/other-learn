// 错误中间件

const express = require('express')
const app = express()

// 中间件
const mw = function(req, res, next) {
	console.log('调用中间件函数')
	req.test = 'test'	// 定义 test属性共router使用
	next()	// 中间件一定要调用next
}



app.get('/index', mw, (req, res) => {
	throw new Error('error')
})

app.use((err, req, res, next)=>{
	console.log('发生了错误', err.message)
	res.send(err.message)
})


app.listen(888, () => {
	console.log('app is running at http://localhost:888')
})