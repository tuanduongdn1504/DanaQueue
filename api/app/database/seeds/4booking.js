const Models = require('../models');
const { setTimeNow } = require('../../utils/handlerTime');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('bookings')
    .del()
    .then(() =>
      Models.Booking.query().insertGraph([
        {
          userId: 3,
          officeId: 2,
          procedureId: 5,
          numerical: 3,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        },
        {
          userId: 4,
          officeId: 2,
          procedureId: 6,
          numerical: 5,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        },
        {
          userId: 3,
          officeId: 1,
          procedureId: 3,
          numerical: 1,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        },
        {
          userId: 4,
          officeId: 1,
          procedureId: 1,
          numerical: 2,
          time: setTimeNow('12-2-2018'),
          type: 1,
          status: 'pending'
        },
        {
          userId: 3,
          officeId: 2,
          procedureId: 6,
          numerical: 7,
          time: setTimeNow('12-2-2018'),
          type: 1,
          status: 'pending'
        },
        {
          userId: 4,
          officeId: 1,
          procedureId: 4,
          numerical: 5,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        },
        {
          userId: 3,
          officeId: 2,
          procedureId: 6,
          numerical: 9,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        },
        {
          userId: 3,
          officeId: 1,
          procedureId: 2,
          numerical: 2,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        },
        {
          userId: 4,
          officeId: 2,
          procedureId: 8,
          numerical: 4,
          time: setTimeNow('12-2-2018'),
          type: 1,
          status: 'pending'
        },
        {
          userId: 3,
          officeId: 2,
          procedureId: 5,
          numerical: 3,
          time: setTimeNow('12-2-2018'),
          type: 0,
          status: 'pending'
        }
      ])
    );
