const Joi = require("joi");

const getFaqsByCategory = {
  query: Joi.object().keys({
    category: Joi.number().required(),
  }),
};

module.exports = {
  getFaqsByCategory,
};
