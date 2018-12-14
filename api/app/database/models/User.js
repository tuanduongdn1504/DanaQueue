const path = require('path');
const CustomModel = require('./CustomModel');

class User extends CustomModel {
  static get tableName() {
    return 'users';
  }

  static get $hidden() {
    return ['password'];
  }

  $beforeInsert() {
    this.createdAt = new Date().toUTCString();
    this.updatedAt = new Date().toUTCString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toUTCString();
  }

  static get relationMappings() {
    return {
      roles: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Role'),
        join: {
          from: 'users.roleId',
          to: 'roles.id'
        }
      },
      officeAdmins: {
        relation: CustomModel.HasOneRelation,
        modelClass: path.join(__dirname, '/OfficeAdmin'),
        join: {
          from: 'users.id',
          to: 'officeAdmins.userId'
        }
      }
    };
  }
}

module.exports = User;
