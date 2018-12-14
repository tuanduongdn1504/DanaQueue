const path = require('path');
const CustomModel = require('./CustomModel');

class Office extends CustomModel {
  static get tableName() {
    return 'offices';
  }

  static get relationMappings() {
    return {
      officeTypes: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/OfficeType'),
        join: {
          from: 'offices.officeTypeId',
          to: 'officeTypes.id'
        }
      },
      officeAdmins: {
        relation: CustomModel.HasManyRelation,
        modelClass: path.join(__dirname, '/OfficeAdmin'),
        join: {
          from: 'offices.id',
          to: 'officeAdmins.officeId'
        }
      },
      bookings: {
        relation: CustomModel.HasManyRelation,
        modelClass: path.join(__dirname, '/Booking'),
        join: {
          from: 'offices.id',
          to: 'bookings.officeId'
        }
      },
      procedures: {
        relation: CustomModel.HasManyRelation,
        modelClass: path.join(__dirname, '/Procedure'),
        join: {
          from: 'offices.id',
          to: 'procedures.officeId'
        }
      }
    };
  }
}

module.exports = Office;
