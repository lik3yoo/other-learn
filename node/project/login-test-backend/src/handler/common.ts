import db from '../config/db'

const commonHandler = {
	login: (req, res) => {

		let cookie = req.cookies
		let sql = `select * from user where username=? and password=?`

		const query = req.body
		const [username, password] = [query.username, query.password]
		if (!username || !password) {
			res.send({
				code: 400,
				message: '用户名或密码不能为空'
			})
		}
		db.query(sql, [username, password], (err, result) => {
			if (err) {
				console.log("找不到该用户")
				console.log(err)
				return
			}

			if (result.length > 0) {
				if (cookie == undefined) {
					res.cookie('u_id', "abcdefg", {
						domain: 'localhost'
					})
					// res.cookie('u_id', `${result[0].id}`)
				}
				res.send({
					code: 200,
					message: "登录成功",
				})
			}
		})

	},
	userInfo: (req, res) => {
		let cookie = req.cookies
		console.log(cookie)
		const sql = `select * from user where id=?`
		db.query(sql, [cookie.u_id], (err, result) => {
			if (err) {
				console.log(err)
				return
			}
			if (result.length > 0) {
				res.send({
					code: 200,
					message: "获取用户信息成功",
					data: result[0]
				})
			}
		}
		)
	},
	userList: (req, res) => {
		const sql = `select * from user`
		db.query(sql, (err, result) => {
			if (err) {
				console.log(err)
				return
			}
			if (result.length > 0) {
				res.send({
					code: 200,
					message: "获取用户列表成功",
					data: result
				})
			}
		}
		)
	}
}

export default commonHandler