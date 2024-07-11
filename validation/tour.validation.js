const Joi = require("joi");

const getTourSchedules = {
  query: Joi.object().keys({
    day: Joi.number().integer().min(0).max(8).required(),
  }),
};

module.exports = {
  getTourSchedules,
};
