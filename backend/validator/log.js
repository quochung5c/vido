const Joi = require("joi");

module.exports.logValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .token()
      .min(6)
      .max(20)
      .required()
  });
  return Joi.validate(data, schema);
};
