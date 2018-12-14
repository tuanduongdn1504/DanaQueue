const Boom = require('boom');
const Models = require('../database/models');
const CONSTANT = require('../constants');

const isAdmin = async (request, h) => {
  const { auth } = request;
  const userId = auth.credentials.id;
  if (!userId) {
    throw Boom.forbidden('Not permission');
  }
  const checkUser = await Models.User.query()
    .findById(userId)
    .where('roleId', '<', CONSTANT.USER_ROLE.USER)
    .first()
    .returning('*');
  if (!checkUser) {
    throw Boom.forbidden("User isn't a admin");
  }
  return h.continue;
};

isAdmin.applyPoint = 'onPreHandler';

module.exports = isAdmin;
