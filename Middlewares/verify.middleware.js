const jwt = require('jsonwebtoken')

const verify = (req,res,next)=>{
    const token = req.headers['authorization']
    const payload = jwt.verify(token ,process.env.serect_key)
    req.data=payload
    // console.log(payload)
    console.log(payload.email)
    next()
}
module.exports ={verify}