const jwt = require('jsonwebtoken')
const Post = require('../models/post.model.js')
const checkpostowner = async(req,res,next)=>{
    try{
    const token = req.headers['authorization']
    // console.log(payload)
   const idpayload = req.data.id
const idhead = req.params.id
    // console.log(idhead)
    const post = await Post.findById(idhead)
    let userId = post.userId
    userId = userId.toString()
    console.log(userId)
    if(!post){
        res.status(404).json({message:"cannot find the user"})
    }
    if(idpayload.toString() == userId){
        console.log("you are the author of the post")
        return next()
    }
    console.log("you not have autherize to deleted")
    return res.status(404).json({message:"you not have autherize to delete"})
}
catch(err){console.log(err)}
    
    
}
module.exports = {checkpostowner}
