module.exports = async(err,req,res,next)=>{
    const statuscode = err.statuscode || 500
    const message = err.message || 'internal server err'
    res.status(statuscode).json({
        failed:true,
        message:message
    })
}
