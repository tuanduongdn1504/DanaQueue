const controller = require('./controller');
const validator = require('./validator');

exports.getMany = {
  description: 'Get Booking list',
  notes: 'Return Booking items',
  tags: ['api', 'v1'],
  handler: controller.getMany,
  auth: false,
  validate: {
    query: validator.queryParams
  }
};

exports.getManyOfTheOffice = {
  description: 'Get Booking list of the office',
  notes: 'Return Booking items',
  tags: ['api', 'v1'],
  handler: controller.getManyOfTheOffice,
  auth: false,
  validate: {
    params: {
      officeId: validator.idParam
    },
    query: validator.queryParams
  }
};

exports.getManyOfTheUser = {
  description: 'Get Booking list of the user',
  notes: 'Return Booking items',
  tags: ['api', 'v1'],
  handler: controller.getManyOfTheUser,
  auth: {
    strategy: 'jwt',
    scope: ['user']
  },
  validate: {
    query: validator.queryParams
  }
};

exports.getManyAtDay = {
  description: 'Get Booking list at day',
  notes: 'Return Booking items',
  tags: ['api', 'v1'],
  handler: controller.getManyAtDay,
  auth: {
    strategy: 'jwt',
    scope: ['admin']
  },
  validate: {
    query: validator.queryParams
  }
};

exports.search = {
  description: 'Search numerical booking',
  notes: 'Return Booking info',
  tags: ['api', 'v1'],
  handler: controller.search,
  auth: {
    strategy: 'jwt',
    scope: ['user']
  },
  validate: {
    payload: validator.search
  }
};

exports.getOne = {
  description: 'Get a Booking',
  notes: 'Return a Booking by id',
  tags: ['api', 'v1'],
  handler: controller.getOne,
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};

exports.running = {
  description: 'Get a numerical running in office',
  notes: 'Return numerical running',
  tags: ['api', 'v1'],
  handler: controller.running,
  auth: false,
  validate: {
    payload: validator.running
  }
};

exports.createNow = {
  description: 'Create a new Booking at now',
  notes: 'Return created Booking',
  tags: ['api', 'v1'],
  handler: controller.createNow,
  auth: {
    strategy: 'jwt',
    scope: ['user']
  },
  validate: {
    payload: validator.createBookingAtNow
  }
};

exports.createTimer = {
  description: 'Create a new Booking at timer',
  notes: 'Return created Booking',
  tags: ['api', 'v1'],
  handler: controller.createTimer,
  auth: {
    strategy: 'jwt',
    scope: ['user']
  },
  validate: {
    payload: validator.createBookingAtTimer
  }
};

exports.updateBooking = {
  description: 'Update status processing requests',
  notes: 'Return status processing or finished',
  tags: ['api', 'v1'],
  handler: controller.updateBooking,
  auth: {
    strategy: 'jwt',
    scope: ['admin']
  },
  validate: {
    params: {
      id: validator.idParam
    },
    payload: validator.updateBooking
  }
};

exports.deleteOne = {
  description: 'Delete a Booking',
  notes: 'Return deleted Booking by id',
  tags: ['api', 'v1'],
  handler: controller.deleteOne,
  auth: false,
  validate: {
    params: {
      id: validator.idParam
    }
  }
};
