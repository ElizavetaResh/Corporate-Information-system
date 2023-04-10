const Router = require('express')
const router = new Router()
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')

router.post('/user', userController.createUser)
router.get('/user', userController.getUsers)
router.post('/user/auth', userController.authUser)
router.get('/user/:id', userController.getOneUser)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

//router.post('/task/all', taskController.createTask)
router.post('/task', taskController.getTask)
router.get('/task/:id', taskController.getIdTask)
router.put('/task', taskController.updateTask)
router.delete('/task/:id', taskController.deleteTask)

module.exports =  router