import db from '@/config/db'

const userHandler = {
	login: (req, res) => {
		let sql = `select * from user where phone=?, passwor= ?`

		console.log(req)
	},
	register: (req, res) => {
		console.log(req)
	}
}

export default userHandler