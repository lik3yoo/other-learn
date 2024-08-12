import * as mysql from 'mysql'
import config from './sysConfig'

const db = mysql.createPool({
	host: 'localhost',
	user: config.user,
	password: config.password,
	database: config.database
})
export default db