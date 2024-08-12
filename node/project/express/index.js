const express = require('express')
const app = express()
const router = require('./router/user/index')	// 导入路由
const parser = require('body-parser')
const custom = require('./custom-parser-middleware')
const cors = require('cors')
const db = require('./mysql')
const session = require('express-session')

/**
 * 中间件
 */
const mw1 = function(req, res, next) {
	console.log('调用中间件函数')
	req.test = 'test'	// 定义 test属性共router使用
	next()	// 中间件一定要调用next
}

const mw2 = function(req, res, next) {
	console.log(req.test)
	next()
}

app.use(mw1)	 // 调用全局中间件
app.use(mw2) 		// 调用多个全局中间件

app.use(cors())	// 解决跨域问题

db.query('select * from users', (err, result) => {
		if(err) {
			console.log(err)
		}else {
			console.log(result)
		}

	},
)

/**
 *	内置中间件
 */

app.use(express.json())	// 解析表单中json格式的数据
// app.use(express.urlencoded({ extended: false }))	// 内置  解析表单中的url-encoded的数据
// app.use(parser.urlencoded({ extended: false }))	// 第三方
app.use(custom.urlencoded)

/**
 * session
 * */

app.use(session({
	secret: "test",
	resave: false,
	saveUninitialized: true,
}))

/**
 *	调用路由
 */
app.use(router)
// app.user('/user', router)	// 添加访问前缀	/user/user_list

// app.get('/index', (req, res) => {
// 	res.send('hello world')
// })
//
app.post('/post', (req, res) => {
	console.log(req.body)

	req.session.isLogin = true	// 设置session

	res.send(req.query)

})

/**
 * 静态资源
 */
app.use(express.static('./static'))
app.use('/public', express.static('./static'))	// 设置挂载路径

app.listen(888, () => {
	console.log('app is running at http://localhost:888')
})