const path = require('path');
const CustomModel = require('./CustomModel');

class ProcedureInfo extends CustomModel {
  static get tableName() {
    return 'procedureInfos';
  }

  static get relationMappings() {
    return {
      procedures: {
        relation: CustomModel.HasOneRelation,
        modelClass: path.join(__dirname, '/Procedure'),
        join: {
          from: 'procedureInfos.procedureId',
          to: 'procedures.id'
        }
      }
    };
  }
}

module.exports = ProcedureInfo;
