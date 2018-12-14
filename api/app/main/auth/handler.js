const controller = require('./controller');
const validator = require('./validator');

exports.login = {
  description: 'Login to an account',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.login,
  auth: false,
  validate: {
    payload: validator.login
  }
};

exports.register = {
  description: 'Register an account to system',
  notes: 'Return user and token',
  tags: ['api', 'v1'],
  handler: controller.register,
  auth: false,
  validate: {
    payload: validator.register
  }
};
