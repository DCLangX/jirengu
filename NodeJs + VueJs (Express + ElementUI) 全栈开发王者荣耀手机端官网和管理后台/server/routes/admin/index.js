module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    router.post('/', async (req, res) => {

        const model = await req.model.create(req.body)
        res.send(model)
    })
    router.put('/:id', async (req, res) => {
        const model = await req.model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    router.delete('/:id', async (req, res) => {
        const model = await req.model.findByIdAndDelete(req.params.id, req.body)
        res.send({
            success: true
        })
    })
    router.get('/', async (req, res) => {
        const queryOption = {}
        if (req.model.modelName === 'Category') {
            queryOption.populate = 'parent'
        }
        const items = await req.model.find().setOptions(queryOption).limit(10)
        res.send(items)
    })
    router.get('/:id', async (req, res) => {
        const model = await req.model.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.model = require(`../../models/${modelName}`)
        next()
    }, router)
    const multer = require('multer')
    const upload = multer({
        dest: __dirname + '/../../uploads'
    })
    app.use('/admin/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    app.use('/admin/api/login', async (req, res) => {
        const {
            username,
            password
        } = req.body
        const AdminUser = require('../../models/AdminUser')
        const user = await AdminUser.findOne({
            username
        }).select('+password')
        if (!user) {
            return res.status(422).send({
                message: '用户不存在'
            })
        }
        const isValid = require('bcrypt').compareSync(password, user.password)
        if (!isValid) {
            return res.status(422).send({
                message: '密码错误'
            })
        }
        res.send('ok')
    })
}