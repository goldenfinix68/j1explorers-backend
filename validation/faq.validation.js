const Joi = require("joi");

const getFaqsByCategory = {
  query: Joi.object().keys({
    category: Joi.number().integer().min(1).required(),
  }),
};

module.exports = {
  getFaqsByCategory,
};
