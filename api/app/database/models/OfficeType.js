const path = require('path');
const CustomModel = require('./CustomModel');

class OfficeType extends CustomModel {
  static get tableName() {
    return 'officeTypes';
  }

  static get relationMappings() {
    return {
      users: {
        relation: CustomModel.HasManyRelation,
        modelClass: path.join(__dirname, '/Office'),
        join: {
          from: 'officeTypes.id',
          to: 'offices.officeTypeId'
        }
      }
    };
  }
}

module.exports = OfficeType;
