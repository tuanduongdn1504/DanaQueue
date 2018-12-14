const controller = require('./controller');
const validator = require('./validator');

exports.getMany = {
  description: 'Get Procedure list',
  notes: 'Return procedure items',
  tags: ['api', 'v1'],
  handler: controller.getMany,
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getOne = {
    description: 'Get a procedure',
    notes: 'Return a Procedure by id',
    tags: ['api', 'v1'],
    handler: controller.getOne,
    auth: false,
    validate: {
      params: {
        id: validator.idParam
      }
    }
  };