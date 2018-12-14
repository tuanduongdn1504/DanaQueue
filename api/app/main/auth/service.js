const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const Boom = require('boom');
const _ = require('lodash');

const Models = require('../../database/models');
const CONSTANTS = require('../../constants');

const secret = process.env.JWT_SECRET || 'danaqueue';

const createJwtToken = data =>
  jsonwebtoken.sign(
    _.assign(data, {
      ttl: Math.floor(Date.now() / 1000) - 60 * 60
    }),
    secret
  );

exports.register = async body => {
  const { email, phoneNumber, password } = body;
  const user = await Models.User.query()
    .where({ email })
    .orWhere({ phoneNumber });
  if (user.length) {
    return Boom.conflict('User is exist');
  }

  const hashPassword = await bcrypt.hash(password, CONSTANTS.SALT_ROUNDS);
  const result = await Models.User.query().insertGraph(
    _.assign(body, {
      password: hashPassword,
      roleId: CONSTANTS.USER_ROLE.USER
    })
  );

  result.scope = 'user';
  const data = _.pick(result, ['phoneNumber', 'id', 'scope']);
  return _.assign({ token: createJwtToken(data) }, data);
};

exports.login = async (phoneNumber, password) => {
  try {
    const user = await Models.User.query()
      .findOne({ phoneNumber })
      .joinRelation('roles')
      .leftJoinRelation('officeAdmins')
      .select(
        'users.*',
        'roles.name as scope',
        'officeAdmins.officeId',
        'users.password as hashPassword'
      );

    if (!user) {
      return Boom.conflict('User is not found');
    }

    if (!user.hashPassword) {
      return Boom.conflict('User can not login with email and password');
    }

    const isCorrectPassword = await bcrypt.compare(password, user.hashPassword);
    if (!isCorrectPassword) {
      return Boom.forbidden('Incorrect password');
    }

    const data = _.pick(user, ['phoneNumber', 'id', 'scope', 'officeId']);
    return _.assign({ token: createJwtToken(data) }, data);
  } catch (error) {
    throw error;
  }
};
