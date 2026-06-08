const Joi = require('joi');

const loginValidate = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      "any.required": "email is required",
      "string.email": "invalid email format"
    }),

  password: Joi.string()
    .required()
    .messages({
      "any.required": "password is required"
    })
});

module.exports = loginValidate;