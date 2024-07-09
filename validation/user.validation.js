const Joi = require("joi");

const createNewUser = {
  body: Joi.object().keys({
    username: Joi.string().required().min(1),
    fullname: Joi.string().required(),
    email: Joi.string().required().email(),
    gender: Joi.string().allow(null),
    birthdate: Joi.string().allow(null),
    phone: Joi.string().allow(null),
    whatsapp: Joi.string().allow(null),
    employer: Joi.string().allow(null),
    passport_country: Joi.string().allow(null),
    birthcity: Joi.string().allow(null),
    passport_number: Joi.string().allow(null),
    expiration_date: Joi.string().allow(null),
    password: Joi.string().required().min(1),
  }),
};

const loginUser = {
  body: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required().min(1),
  }),
};

const updateUser = {
  body: Joi.object().keys({
    fullname: Joi.string(),
    email: Joi.string().email(),
    gender: Joi.string().allow(null),
    birthdate: Joi.string().allow(null),
    phone: Joi.string().allow(null),
    whatsapp: Joi.string().allow(null),
    employer: Joi.string().allow(null),
    passport_country: Joi.string().allow(null),
    birthcity: Joi.string().allow(null),
    passport_number: Joi.string().allow(null),
    expiration_date: Joi.string().allow(null),
  }),
};

const changePassword = {
  body: Joi.object().keys({
    old_password: Joi.string().required().min(1),
    new_password: Joi.string().required().min(1),
  }),
};

module.exports = {
  createNewUser,
  loginUser,
  updateUser,
  changePassword,
};
