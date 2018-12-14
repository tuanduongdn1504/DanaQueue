const path = require('path');
const CustomModel = require('./CustomModel');

class OfficeAdmin extends CustomModel {
  static get tableName() {
    return 'officeAdmins';
  }

  static get relationMappings() {
    return {
      users: {
        relation: CustomModel.HasOneRelation,
        modelClass: path.join(__dirname, '/User'),
        join: {
          from: 'officeAdmins.userId',
          to: 'users.id'
        }
      },
      offices: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Office'),
        join: {
          from: 'officeAdmins.userId',
          to: 'offices.id'
        }
      }
    };
  }
}

module.exports = OfficeAdmin;
