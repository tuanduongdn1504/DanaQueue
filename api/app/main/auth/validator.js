const Joi = require('joi');
const { strPhoneNumber, strPassword } = require('../../utils/validatorUtils');

exports.login = {
  phoneNumber: strPhoneNumber().required(),
  password: Joi.string().required()
};

exports.register = {
  fullName: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: strPhoneNumber().required(),
  password: strPassword().required()
};
