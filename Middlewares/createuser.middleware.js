const User = require('../models/user.model.js')
const createUser = async(req,res,next)=>{
    const id = req.path.split('/')[1]
    const user = await User.findById(id)
    console.log(`hello, ${user.name}`)
    next()
}

// const postUser=async(req,res,next)=>{
//     const  = 
// }
module.exports = {createUser}