const bcrypt = require('bcrypt');
const Models = require('../models');
const { SALT_ROUNDS } = require('../../constants');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('users')
    .del()
    .then(() => knex('roles').del())
    .then(() => knex('officeAdmins').del())
    .then(() =>
      Models.Role.query().insertGraph([
        {
          name: 'superadmin',
          description: 'Admin has all the power'
        },
        {
          name: 'admin',
          description: 'Admin'
        },
        {
          name: 'user',
          description: 'The end user'
        }
      ])
    )
    .then(roles =>
      Models.User.query().insertGraph([
        {
          fullName: 'Super Admin',
          email: 'superadmin@danaqueue.com',
          password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
          phoneNumber: '0911793246',
          roleId: roles[0].id
        },
        {
          fullName: 'Admin',
          email: 'admin@danaqueue.com',
          password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
          phoneNumber: '0911793247',
          roleId: roles[1].id
        },
        {
          fullName: 'User',
          email: 'user@danaqueue.com',
          password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
          phoneNumber: '0911793248',
          roleId: roles[2].id
        },
        {
          fullName: 'Dev',
          email: 'dev@danaqueue.com',
          password: bcrypt.hashSync('danaqueue', SALT_ROUNDS),
          phoneNumber: '0911793249',
          roleId: roles[2].id
        }
      ])
    )
    .then(users =>
      Models.OfficeAdmin.query().insertGraph([
        {
          userId: users[0].id,
          officeId: 1
        },
        {
          userId: users[1].id,
          officeId: 1
        }
      ])
    );
