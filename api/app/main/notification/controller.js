const service = require('./service');

exports.getMany = async request => {
  try {
    return await service.getAllNotification(request.query);
  } catch (error) {
      console.log(error);
    throw error;
  }
};

exports.getOne = async request => {
    try {
      const { id } = request.params;
      return await service.getOneNotification(id);
    } catch (error) {
        console.log(error);
      throw error;
    }
};

exports.createToken = async request => {
    try {
      const { auth, payload } = request;
      const { id } = auth.credentials;
      return await service.createToken(id, payload);
    } catch (error) {
      throw error;
    }
  };

  exports.createNotify = async request => {
    try {
      const { payload } = request;
      return await service.createNotify(payload);
    } catch (error) {
      throw error;
    }
  };