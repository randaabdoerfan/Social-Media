const sayhello = (req,res,next)=>{
    console.log("hello my friend")
    next()
}
module.exports ={sayhello}