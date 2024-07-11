const Joi = require("joi");

const getSchedule = {
  query: Joi.object().keys({
    id: Joi.number().integer().min(1).required(),
  }),
};

module.exports = {
  getSchedule,
};
