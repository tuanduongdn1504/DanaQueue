const Boom = require('boom');
const _ = require('lodash');
const Models = require('../../database/models');

exports.getAllOffice = async query => Models.Office.queryBuilder(query);

exports.getOneOffice = async id => {
  try {
    const result = await Models.Office.query().findById(id);
    if (!result) {
      throw Boom.notFound('Office not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};
