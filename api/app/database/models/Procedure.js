const path = require('path');
const CustomModel = require('./CustomModel');

class Procedure extends CustomModel {
  static get tableName() {
    return 'procedures';
  }

  static get relationMappings() {
    return {
      offices: {
        relation: CustomModel.BelongsToOneRelation,
        modelClass: path.join(__dirname, '/Office'),
        join: {
          from: 'procedures.officeId',
          to: 'offices.id'
        }
      },
      procedureInfos: {
        relation: CustomModel.HasOneRelation,
        modelClass: path.join(__dirname, '/ProcedureInfo'),
        join: {
          from: 'procedures.id',
          to: 'procedureInfos.procedureId'
        }
      },
      bookings: {
        relation: CustomModel.HasManyRelation,
        modelClass: path.join(__dirname, '/Booking'),
        join: {
          from: 'procedures.id',
          to: 'bookings.procedureId'
        }
      }
    };
  }
}

module.exports = Procedure;
