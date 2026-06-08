const joi = require('joi')

const userVaildate = joi.object(
    {
        name:joi.string().min(3).max(14).required().messages({
            "any.required": "the name is required",
            "string.min":"the min string length is 3"
        }),
         email:joi.string().email().required().messages({
            "any.required": "the email is required"  
        }),
        password:joi.string().min(6).max(14).required().messages({
            "any.required": "the password is required" ,
            "any.only": "Passwords do not match" 
        }),
        confirmpassword:joi.string().valid(joi.ref('password')).required().messages({
            "any.required": "the confirmpassword is required" ,
            "any.only": "Passwords do not match"
        }),
        role:joi.string().valid('dev','admin','user').default('user')
    }
)
module.exports = userVaildate