const express = require('express')
const router = express.Router()

router.get("/user_list", (req, res) => {

	req.session.isLogin = true	// 设置session
	res.send(`user_list ${ req.test }`)

})

module.exports = router