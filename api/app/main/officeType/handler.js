const controller = require('./controller');
const validator = require('./validator');

exports.getMany = {
  description: 'Get Office Type list',
  notes: 'Return office type items',
  tags: ['api', 'v1'],
  handler: controller.getMany,
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getOne = {
    description: 'Get Office Type by id',
    notes: 'Return office type item',
    tags: ['api', 'v1'],
    handler: controller.getOne,
    auth: false,
    validate: {
      params:{
          id : validator.idParam
      } 
    }
  };