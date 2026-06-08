const joi = require('joi') 

const postValidate = joi.object({
    title:joi.string().min(2).max(10).required().messages({
        "any.required":"the title is required",
        "string.min":"the minuimum length is 2"
    }),
    body:joi.string().min(2).max(1000).required().messages({
        "any.required":"the body is required",
        "string.min":"you should write at least 2 characters"
    }),
     comments:joi.array().items(
  joi.object({
    text: joi.string().required()
  })
)
    

})
