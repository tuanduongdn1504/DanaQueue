const Boom = require('boom');
const _ = require('lodash');
const Models = require('../../database/models');

exports.getAllProcedure = async query => Models.Procedure.queryBuilder(query);

exports.getOneProcedure = async id => {
    try {
      const result = await Models.Procedure.query().findById(id);
      if (!result) {
        throw Boom.notFound('Procedure not found');
      }
      return result;
    } catch (error) {
      throw error;
    }
  };