const Joi = require("joi");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const EmailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
  
});

module.exports = {
  EmailSchema,
};
