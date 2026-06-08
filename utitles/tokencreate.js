const jwt = require('jsonwebtoken')

const generatetoken = (datauser)=>{
   return jwt.sign(datauser,process.env.serect_key,{expiresIn:"1d"})
}
module.exports = generatetoken