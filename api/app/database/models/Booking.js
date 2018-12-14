const path = require('path');
const CustomModel = require('./CustomModel');

class Booking extends CustomModel {
  static get tableName() {
    return 'bookings';
  }

  static get relationMappings() {
    return {
      offices: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Office'),
        join: {
          from: 'bookings.officeId',
          to: 'offices.id'
        }
      },
      procedures: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Procedure'),
        join: {
          from: 'bookings.procedureId',
          to: 'procedures.id'
        }
      },
      users: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/User'),
        join: {
          from: 'bookings.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Booking;
