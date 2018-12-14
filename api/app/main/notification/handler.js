const controller = require('./controller');
const validator = require('./validator');

exports.getMany = {
  description: 'Get Notifications list',
  notes: 'Return Notification item',
  tags: ['api', 'v1'],
  handler: controller.getMany,
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getOne = {
    description: 'Get Notification by id',
    notes: 'Return Notification item',
    tags: ['api', 'v1'],
    handler: controller.getOne,
    auth: false,
    validate: {
      params : {
        id: validator.idParam
      }
    }
  };

  exports.createToken = {
    description: 'Create token notification',
    notes: 'Return created token',
    tags: ['api', 'v1'],
    handler: controller.createToken,
    auth: {
      strategy: 'jwt',
      scope: ['user']
    },
    validate: {
      payload: validator.createToken
    }
  };

  exports.createNotify = {
    description: 'Create a new Notification',
    notes: 'Return created Notification',
    tags: ['api', 'v1'],
    handler: controller.createNotify,
    auth: false,
    validate: {
      payload: validator.createNotification
    }
  };
