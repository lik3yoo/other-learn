import * as  jwt from 'jsonwebtoken'
import { config } from "@/config";

type userInfo = {
	phone: string,
	username: string
}
const generateToken = (userInfo: userInfo) => {
	return jwt.sign(userInfo, config.secretKey, { expiresIn: "2h" })
}


export default {
	generateToken
}