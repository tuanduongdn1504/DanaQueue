const Boom = require('boom');
const _ = require('lodash');
const Models = require('../../database/models');

exports.getAllOfficeType = async query => Models.OfficeType.queryBuilder(query);

exports.getOneOfficeType = async id => {
    try {
      const result = await Models.OfficeType.query().findById(id);
      if (!result) {
        throw Boom.notFound('Procedure not found');
      }
      return result;
    } catch (error) {
      throw error;
    }
  };