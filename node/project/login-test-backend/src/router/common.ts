import { Router } from "express"
import { common as commonHandler } from '../handler'

// TODO 登录查询数据库是否有此用户,如果没有注册
// TODO 如果有此用户则生成token, 并且设置token过期时间
// TODO 修改密码,更新数据库表

// TODO 接口跨域
// TODO 权限认证

const router = Router()

router.post('/login', commonHandler.login)

router.get('/user-info', commonHandler.userInfo)

router.get('/user-list', commonHandler.userList)

export default router
