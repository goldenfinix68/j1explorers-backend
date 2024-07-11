const Joi = require("joi");

const getCategory = {
  query: Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
  }),
};

module.exports = {
  getCategory,
};
