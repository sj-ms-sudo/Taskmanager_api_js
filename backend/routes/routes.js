const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')

router.get('/getAllTasks',Controller.getAllTasks);
router.post('/createTask',Controller.createTask);
router.get('/completed',Controller.completed);

module.exports = router;