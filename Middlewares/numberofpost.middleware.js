const Posts = require('../models/post.model')

const numberopposts = async(req,res,next)=>{
    const totalNumber = await Posts.countDocuments()
    console.log(`Total  Number of Posts: ${totalNumber}`)
    next()
}
module.exports = {numberopposts}