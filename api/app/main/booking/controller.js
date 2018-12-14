const service = require('./service');

exports.getMany = async request => {
  try {
    return await service.getAllBooking(request.query);
  } catch (error) {
    throw error;
  }
};

exports.getManyOfTheOffice = async request => {
  try {
    const { query } = request;
    const { officeId } = request.params;
    return await service.getAllOfTheOffice(officeId, query);
  } catch (error) {
    throw error;
  }
};

exports.getManyOfTheUser = async request => {
  try {
    const { auth, query } = request;
    const { id } = auth.credentials;

    return await service.getAllOfTheUser(id, query);
  } catch (error) {
    throw error;
  }
};

exports.getManyAtDay = async request => {
  try {
    const { auth } = request;
    const { officeId } = auth.credentials;
    return await service.getAllAtDay(officeId);
  } catch (error) {
    throw error;
  }
};

exports.search = async request => {
  try {
    const { payload } = request;
    return await service.search(payload);
  } catch (error) {
    throw error;
  }
};

exports.getOne = async request => {
  try {
    const { id } = request.params;
    return await service.getOneBooking(id);
  } catch (error) {
    throw error;
  }
};

exports.running = async request => {
  try {
    return await service.running(request.payload);
  } catch (error) {
    throw error;
  }
};

exports.createNow = async request => {
  try {
    const { auth, payload } = request;
    const { id } = auth.credentials;
    return await service.createBookingNow(id, payload);
  } catch (error) {
    throw error;
  }
};

exports.createTimer = async request => {
  try {
    const { auth, payload } = request;
    const { id } = auth.credentials;
    return await service.createBookingTimer(id, payload);
  } catch (error) {
    throw error;
  }
};

exports.updateBooking = async request => {
  try {
    const { status } = request.payload;
    const { id } = request.params;
    return await service.updateBooking(id, status);
  } catch (error) {
    throw error;
  }
};

exports.deleteOne = async request => {
  try {
    const { id } = request.params;
    return await service.deleteBooking(id);
  } catch (error) {
    throw error;
  }
};
