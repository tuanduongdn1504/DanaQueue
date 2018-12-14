const Joi = require('joi');
const { idNumber, queryParams } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.idParam = idNumber()
  .required()
  .description('id is required');