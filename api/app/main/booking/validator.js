const Joi = require('joi');
const { idNumber, queryParams } = require('../../utils/validatorUtils');

exports.queryParams = queryParams;

exports.idParam = idNumber()
  .required()
  .description('id is required');

exports.createBookingAtNow = {
  officeId: idNumber().required(),
  procedureId: idNumber().required()
};

exports.createBookingAtTimer = {
  officeId: idNumber().required(),
  procedureId: idNumber().required(),
  date: Joi.date(),
  timeFrame: idNumber()
    .required()
    .min(0)
    .max(47)
};

exports.updateBooking = {
  status: Joi.string()
};

exports.search = {
  officeId: idNumber().required(),
  numerical: idNumber().required()
};

exports.running = {
  officeId: idNumber().required()
};
