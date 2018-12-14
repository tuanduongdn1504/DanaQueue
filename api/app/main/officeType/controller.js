const service = require('./service');

exports.getMany = async request => {
  try {
    return await service.getAllOfficeType(request.query);
  } catch (error) {
      console.log(error);
    throw error;
  }
};

exports.getOne = async request => {
    try {
        const { id } = request.params;
        return await service.getOneOfficeType(id);
    } catch (error) {
        console.log(error);
      throw error;
    }
  };