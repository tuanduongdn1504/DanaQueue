import React from 'react';
import moment from 'moment';
import 'moment/locale/vi';

import unidecode from 'unidecode';
import IntlMessages from '../components/utility/IntlMessages';

export const upperFirstChar = text => {
  return text.replace(/\w\S*/g, txt => {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
};
export const lowerFirstChar = text => {
  return text.charAt(0).toLowerCase() + text.substr(1);
};
export const replaceAll = (text, search, replacement) => {
  return text.replace(new RegExp(search, 'g'), replacement);
};

export const makeActionName = text => {
  return lowerFirstChar(
    replaceAll(
      upperFirstChar(replaceAll(text, '_', ' ').toLowerCase()),
      ' ',
      ''
    )
  );
};

export const formatDateTime = text => {
  return moment(text).format('DD/MM/YY, HH:mm');
};

export const formatDate = text => {
  return moment(text).format('DD/MM/YY');
};

export const encodeJsonToURI = params => {
  return Object.keys(params)
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const stringToSlug = e => {
  let str = e;
  str = unidecode(str).toLowerCase();
  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
};

export const formatRangeTime = values => {
  if (!values || values.length === 0) {
    return 'text.allDay';
  }
  if (values[0] && values[0].diff(values[1], 'd') === 0) {
    return values[0].diff(moment(), 'd') === 0
      ? 'text.today'
      : values[0].format('DD/MM');
  }
  if (values[0]) {
    return `${values[0].format('DD/MM')} - ${values[1].format('DD/MM')}`;
  }
  return '';
};

export const renderMessage = message => {
  return <IntlMessages id={message} />;
};

export function defineDateFromNow(date) {
  moment.locale('vi');
  const now = moment();
  const dateParams = moment(new Date(date));
  const diffDays = now.diff(dateParams, 'days');
  const diffMonths = now.diff(dateParams, 'months');
  const diffYears = now.diff(dateParams, 'years');
  if (diffDays === 0) {
    return dateParams.fromNow();
  }
  if (diffDays === 1) {
    return dateParams.format('[Hôm qua lúc] HH:mm');
  }
  if (diffMonths === 1) {
    return dateParams.format('[1 tháng trước]');
  }
  if (diffYears === 0) {
    return dateParams.format('DD/MM [lúc ]HH:mm');
  }
  return dateParams.format('DD/MM/YYYY');
}

export const formatDateTimeStamp = time =>
  moment.unix(time).format('DD/MM/YY, hh:mma');

export const compareDate = time => {
  return moment.unix(time).isAfter(moment().startOf('day'));
};
