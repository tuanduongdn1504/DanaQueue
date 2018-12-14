const Handler = require('./handler');

const Routes = [
  {
    method: 'GET',
    path: '/api/v1/bookings',
    config: Handler.getMany
  },
  {
    method: 'GET',
    path: '/api/v1/offices/{officeId}/bookings',
    config: Handler.getManyOfTheOffice
  },
  {
    method: 'GET',
    path: '/api/v1/bookings/me',
    config: Handler.getManyOfTheUser
  },
  {
    method: 'GET',
    path: '/api/v1/bookings/today',
    config: Handler.getManyAtDay
  },
  {
    method: 'GET',
    path: '/api/v1/bookings/{id}',
    config: Handler.getOne
  },
  {
    method: 'POST',
    path: '/api/v1/bookings/running',
    config: Handler.running
  },
  {
    method: 'POST',
    path: '/api/v1/bookings/now',
    config: Handler.createNow
  },
  {
    method: 'POST',
    path: '/api/v1/bookings/search',
    config: Handler.search
  },
  {
    method: 'POST',
    path: '/api/v1/bookings/timer',
    config: Handler.createTimer
  },
  {
    method: 'PUT',
    path: '/api/v1/bookings/{id}',
    config: Handler.updateBooking
  },
  {
    method: 'DELETE',
    path: '/api/v1/bookings/{id}',
    config: Handler.deleteOne
  }
];

module.exports = Routes;
