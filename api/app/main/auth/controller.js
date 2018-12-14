const service = require('./service');

exports.login = async request => {
  try {
    const { phoneNumber, password } = request.payload;
    return await service.login(phoneNumber, password);
  } catch (err) {
    throw err;
  }
};

exports.register = async request => {
  try {
    return await service.register(request.payload);
  } catch (err) {
    throw err;
  }
};
