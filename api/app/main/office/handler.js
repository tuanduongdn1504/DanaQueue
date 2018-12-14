const controller = require('./controller');
const validator = require('./validator');

exports.getMany = {
  description: 'Get Office list',
  notes: 'Return Office items',
  tags: ['api', 'v1'],
  handler: controller.getMany,
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getOne = {
    description: 'Get a Office',
    notes: 'Return a Office by id',
    tags: ['api', 'v1'],
    handler: controller.getOne,
    auth: false,
    validate: {
      params: {
        id: validator.idParam
      }
    }
  };