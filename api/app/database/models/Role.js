const path = require('path');
const CustomModel = require('./CustomModel');

class Role extends CustomModel {
  static get tableName() {
    return 'roles';
  }

  static get relationMappings() {
    return {
      users: {
        relation: CustomModel.HasManyRelation,
        modelClass: path.join(__dirname, '/User'),
        join: {
          from: 'roles.id',
          to: 'users.roleId'
        }
      }
    };
  }
}

module.exports = Role;
