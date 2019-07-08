module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams: true
    })
    // 创建资源
    router.post('/', async (req, res) => {
        const model = await req.model.create(req.body)
        res.send(model)
    })
    // 修改资源
    router.put('/:id', async (req, res) => {
        const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    // 删除资源
    router.delete('/:id', async (req, res) => {
        const model = await req.model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    // 获取资源
    router.get('/', async (req, res) => {
        const queryOption = {}
        if (req.model.modelName === 'Category') {
            queryOption.populate = 'parent'
        }
        const items = await req.model.find().setOptions(queryOption).limit(10)
        res.send(items)
    })
    // 资源详情
    router.get('/:id', async (req, res) => {
        const model = await req.model.findById(req.params.id)
        res.send(model)
    })
    const auth = require('../../middleware/auth')
    app.use('/admin/api/rest/:resource', auth(), async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.model = require(`../../models/${modelName}`)
        next()
    }, router)
    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })
    app.use('/admin/api/upload', auth(), upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    app.use('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body
        const user = await AdminUser.findOne({
            username
        }).select('+password')
        assert(user, 422, '用户不存在')
        // if (!user) {
        //     return res.status(422).send({
        //         message: '用户不存在'
        //     })
        // }
        const isValid = require('bcrypt').compareSync(password, user.password)
        // if (!isValid) {
        //     return res.status(422).send({
        //         message: '密码错误'
        //     })
        // }
        assert(isValid, 422, '密码错误')
        const token = jwt.sign({
            id: user._id
        }, app.get('secret'))
        res.send({
            token
        })
    })

    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}