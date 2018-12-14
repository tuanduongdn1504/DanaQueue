const CustomModel = require('./CustomModel');

class Notification extends CustomModel {
  static get tableName() {
    return 'notifications';
  }
}

module.exports = Notification;
