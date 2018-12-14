const Boom = require('boom');
const _ = require('lodash');
const { raw } = require('objection');
const Models = require('../../database/models');
const { getTimeNow, setTimeNow } = require('../../utils/handlerTime');
const numberSlot = require('../../initData/numberSlot');
const firebase = require('../../utils/firebase');

const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });

function timeRemaining(numerical, employeesCount) {
  const timeSlot = Math.ceil(numerical / employeesCount);
  return numberSlot[timeSlot];
}

exports.getAllBooking = async query =>
  Models.Booking.queryBuilder(query)
    .joinRelation('users')
    .joinRelation('procedures')
    .joinRelation('offices')
    .select([
      'bookings.id',
      'users.id as userId',
      'users.fullName',
      'users.email',
      'users.phoneNumber',
      'bookings.numerical',
      'bookings.time',
      'procedures.id as procedureId',
      'procedures.name as procedure',
      'offices.id as officeId',
      'offices.name as office',
      'bookings.type',
      'bookings.status'
    ]);

exports.getAllOfTheOffice = async (officeId, query) =>
  Models.Booking.queryBuilder(query)
    .where('bookings.officeId', officeId)
    .joinRelation('users')
    .joinRelation('procedures')
    .joinRelation('offices')
    .select([
      'bookings.id',
      'users.id as userId',
      'users.fullName',
      'users.email',
      'users.phoneNumber',
      'bookings.numerical',
      'bookings.time',
      'procedures.id as procedureId',
      'procedures.name as procedure',
      'offices.id as officeId',
      'offices.name as office',
      'bookings.type',
      'bookings.status'
    ]);

exports.getAllOfTheUser = async (userId, query) =>
  Models.Booking.queryBuilder(query)
    .where('bookings.userId', userId)
    .joinRelation('users')
    .joinRelation('procedures')
    .joinRelation('offices')
    .select([
      'bookings.id',
      'users.id as userId',
      'users.fullName',
      'users.email',
      'users.phoneNumber',
      'bookings.numerical',
      'bookings.time',
      'procedures.id as procedureId',
      'procedures.name as procedure',
      'offices.id as officeId',
      'offices.name as office',
      'bookings.type',
      'bookings.status'
    ]);

exports.getAllAtDay = async officeId =>
  Models.Booking.query()
    .where('bookings.officeId', officeId)
    .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`))
    .joinRelation('users')
    .joinRelation('procedures')
    .joinRelation('offices')
    .select([
      'bookings.id',
      'users.id as userId',
      'users.fullName',
      'users.email',
      'users.phoneNumber',
      'bookings.numerical',
      'bookings.time',
      'procedures.id as procedureId',
      'procedures.name as procedure',
      'offices.id as officeId',
      'offices.name as office',
      'bookings.type',
      'bookings.status'
    ]);

exports.search = async body => {
  try {
    const { officeId, numerical } = body;
    const booking = await Models.Booking.query()
      .findOne({ officeId, numerical })
      .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`));

    if (!booking) {
      throw Boom.notFound('Booking not found');
    }

    const bookingRunning = await Models.Booking.query()
      .findOne({ officeId, status: 'running' })
      .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`));

    let numericalRunning;
    if (bookingRunning) {
      numericalRunning = bookingRunning.numerical;
    } else {
      numericalRunning = 0;
    }
    const result = {
      numerical,
      time: booking.time,
      numericalRunning
    };

    return result;
  } catch (error) {
    throw error;
  }
};

exports.running = async body => {
  try {
    const { officeId } = body;
    const booking = await Models.Booking.query()
      .findOne({ officeId, status: 'running' })
      .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`));

    if (!booking) {
      return {
        numerical: 0
      };
    }

    return {
      numerical: booking.numerical
    };
  } catch (error) {
    throw error;
  }
};

exports.getOneBooking = async id => {
  try {
    const result = await Models.Booking.query()
      .findById(id)
      .joinRelation('users')
      .joinRelation('procedures')
      .joinRelation('offices')
      .select([
        'bookings.id',
        'users.id as userId',
        'users.fullName',
        'users.email',
        'users.phoneNumber',
        'bookings.numerical',
        'bookings.time',
        'procedures.id as procedureId',
        'procedures.name as procedure',
        'offices.id as officeId',
        'offices.name as office',
        'bookings.type',
        'bookings.status'
      ]);

    if (!result) {
      throw Boom.notFound('Booking not found');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

exports.createBookingNow = async (userId, body) => {
  try {
    const { officeId } = body;
    const bookings = await Models.Booking.query()
      .where('officeId', officeId)
      .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`));

    const arrBooking = _.flattenDeep(_.map(bookings, _.property(['numerical'])));
    arrBooking.sort((a, b) => a - b);

    const arrNumerical = arrBooking.length ? _.range(1, arrBooking[arrBooking.length - 1] + 1) : [];

    const numericalBookings = _.difference(arrNumerical, arrBooking);

    let numerical;
    if (numericalBookings.length >= 1) {
      [numerical] = numericalBookings;
    } else if (arrNumerical.length) {
      numerical = arrNumerical[arrNumerical.length - 1] + 1;
    } else {
      numerical = 1;
    }

    const office = await Models.Office.query()
      .findById(officeId)
      .select('employeesCount');

    const { employeesCount } = office;
    const timeFrame = timeRemaining(numerical, employeesCount);
    const arrTimeFrame = timeFrame.split(':');
    const time = getTimeNow(arrTimeFrame[0], arrTimeFrame[1]);

    const iBody = {
      time: new Date(time),
      type: 0
    };

    const data = _.assign(body, iBody, { userId, numerical });
    const result = await Models.Booking.query().insertGraph(data);
    const dataFirebase = await Models.Booking.query()
      .findById(result.id)
      .joinRelation('users')
      .joinRelation('procedures')
      .joinRelation('offices')
      .select([
        'bookings.id as bookingId',
        'users.id as userId',
        'users.fullName',
        'users.email',
        'users.phoneNumber',
        'bookings.numerical',
        'bookings.time',
        'bookings.status',
        'procedures.name as procedure',
        'offices.id as officeId',
        'offices.name as office'
      ]);

    const dataInsert = dataFirebase.toJSON();
    database
      .collection('bookings')
      .doc(result.id.toString())
      .set(dataInsert);
    return result;
  } catch (error) {
    throw error;
  }
};

exports.createBookingTimer = async (userId, body) => {
  try {
    const { officeId, date, timeFrame } = body;
    const office = await Models.Office.query()
      .findById(officeId)
      .select('employeesCount');

    const { employeesCount } = office;
    const timeFrameStart = timeFrame * employeesCount + 1;
    const bookings = await Models.Booking.query()
      .where('officeId', officeId)
      .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`));

    const arrBooking = _.flattenDeep(_.map(bookings, _.property(['numerical'])));
    arrBooking.sort();

    const arrNumerical = _.range(timeFrameStart, 48 * employeesCount + 1);

    const numericalBookings = _.difference(arrNumerical, arrBooking);
    const [numerical] = numericalBookings;

    const numberTimeFrame = timeRemaining(numerical, employeesCount);
    const arrTimeFrame = numberTimeFrame.split(':');
    const time = setTimeNow(date, arrTimeFrame[0], arrTimeFrame[1]);

    const iBody = {
      userId,
      numerical,
      time: new Date(time),
      type: 1
    };

    body = _.omit(body, ['timeFrame', 'date']);
    const data = _.assign(body, iBody);
    const result = await Models.Booking.query().insertGraph(data);
    const dataFirebase = await Models.Booking.query()
      .findById(result.id)
      .joinRelation('users')
      .joinRelation('procedures')
      .joinRelation('offices')
      .select([
        'bookings.id as bookingId',
        'users.id as userId',
        'users.fullName',
        'users.email',
        'users.phoneNumber',
        'bookings.numerical',
        'bookings.time',
        'bookings.status',
        'procedures.name as procedure',
        'offices.id as officeId',
        'offices.name as office'
      ]);

    const dataInsert = dataFirebase.toJSON();
    database
      .collection('bookings')
      .doc(result.id.toString())
      .set(dataInsert);
    return result;
  } catch (error) {
    throw error;
  }
};

exports.updateBooking = async (id, status) => {
  try {
    const result = await Models.Booking.query()
      .patchAndFetchById(id, { status })
      .returning('id', 'numerical', 'status', 'officeId');

    if (!result) {
      throw Boom.notFound('Booking not found');
    }
    database
      .collection('bookings')
      .doc(id.toString())
      .update({ status });

    if (status === 'running') {
      const user = await Models.Booking.query()
        .where({ status: 'pending', officeId: result.officeId })
        .andWhere('numerical', '>', result.numerical)
        .andWhere(raw(`date_part('day', time) = date_part('day', CURRENT_DATE)`))
        .joinRelation('users')
        .select(['bookings.*', 'users.tokenNotify'])
        .orderBy('numerical')
        .first();

      if (user) {
        const { tokenNotify } = user;
        if (tokenNotify) {
          const message = {
            token: tokenNotify,
            notification: {
              title: 'Sắp đến lượt của bạn!',
              body: `Hiện tại hệ thống đang xử lý đến số ${result.numerical}`
            }
          };

          await firebase.messaging().send(message);
        }
      }
    }

    return result;
  } catch (error) {
    throw error;
  }
};

exports.deleteBooking = async id => {
  try {
    const result = await Models.Booking.query()
      .patchAndFetchById(id, { status: 'canceled' })
      .returning('id', 'status');

    if (!result) {
      throw Boom.notFound('Booking not found');
    }
    database
      .collection('bookings')
      .doc(id.toString())
      .update({ status: 'canceled' });

    return result;
  } catch (error) {
    throw error;
  }
};
