const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/user.controller')

const {createUser} = require('../Middlewares/createuser.middleware.js')

router.get('/',usercontroller.getallusers)
router.post('/',usercontroller.createuser)
router.delete('/:id',usercontroller.DeleteUser)
router.put('/:id',usercontroller.updateuser)
router.patch('/:id',usercontroller.edituser)
router.get('/filter',usercontroller.filteruser)
router.get('/:id',createUser,usercontroller.getuserbyid)

module.exports= router