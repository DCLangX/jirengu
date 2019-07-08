module.exports = option => {
    // 校验token的中间件
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser')

    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, 'token不存在')
        const {
            id
        } = jwt.verify(token, req.app.get('secret'), (err, decoded) => {
            assert(!err, 401, '无效token')
            return decoded
        })
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录！')
        console.log(req.user)
        await next()
    }
}