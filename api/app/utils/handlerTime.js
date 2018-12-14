const moment = require('moment');

function getTimeNow(hour, minute) {
  const year = moment().year();
  const month = moment().month();
  const date = moment().date();
  return moment()
    .year(year)
    .month(month)
    .date(date)
    .hour(hour)
    .minute(minute)
    .second(0)
    .millisecond(0)
    .format();
}

function setTimeNow(date, hour, minute) {
  return moment(date)
    .hour(hour || 0)
    .minute(minute || 0)
    .second(0)
    .millisecond(0)
    .format();
}

module.exports = {
  getTimeNow,
  setTimeNow
};
