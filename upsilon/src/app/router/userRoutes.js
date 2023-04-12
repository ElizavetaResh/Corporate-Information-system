const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
const rezumeController = require('../controller/rezumeController')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.post('/user/auth', userController.authUser)

router.post('/task', taskController.getTask)
router.post('/task/filter', taskController.getFilteredTask)
router.post('/rezume', rezumeController.getRezume)

module.exports =  router