import { omitBy, isEmpty } from 'lodash';

export const getResourceTitle = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatFormData = (originalData, data) => {
  const newData = {};
  Object.keys(data).forEach(key => {
    newData[key] = formatData(data[key], typeof originalData[key]);
  });
  return newData;
};

export const formatData = (data, type) => {
  switch (type) {
    case 'number':
      return Number(data);
    default:
      return data;
  }
};

export const getMatchFromPath = string => {
  const re = '(\\/)((?:[a-z][a-z0-9_]*))(\\/)((?:[a-z][a-z0-9_]*))';
  const p = new RegExp(re, ['i']);
  const m = p.exec(string);
  return m && m.length > 0 ? m[0] : string;
};

export const getSearch = filter => {
  const params = {
    limit: filter.limit,
    offset: filter.offset,
    ...getValidData(filter.filter),
  };

  return Object.keys(params)
    .map(key => {
      return params[key]
        ? `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(params[key]))}`
        : '';
    })
    .filter(data => data !== '')
    .join('&');
};

export const getValidData = filter => {
  return omitBy(filter, item => {
    const sources = item ? Object.keys(item) : [];
    let isInvalid = false;
    sources.forEach(data => {
      if (typeof item === 'object' && isEmpty(getRecordData(item, data))) {
        isInvalid = true;
      }
    });
    return isInvalid;
  });
};

export const getFilterFromUrl = searchStr => {
  const parsed = {};
  if (searchStr.trim() === '') return null;
  decodeURIComponent(searchStr)
    .trim()
    .substring(1)
    .split('&')
    .forEach(text => {
      const keyValue = text.split('=');
      parsed[keyValue[0]] = keyValue[1];
      try {
        parsed[keyValue[0]] = JSON.parse(parsed[keyValue[0]]);
      } catch (error) {
        parsed[keyValue[0]] = parsed[keyValue[0]];
      }
    });

  // Object.keys(parsed).forEach(data => {
  //   try {
  //     parsed[data] = JSON.parse(parsed[data]);
  //   } catch (error) {
  //     parsed[data] = parsed[data];
  //   }
  // });
  const filter = { limit: parsed.limit, offset: parsed.offset };
  delete parsed.limit;
  delete parsed.offset;
  filter.filter = parsed;
  return filter;
};

export const getRecordData = (record, source) => {
  const arrKeys = source ? replaceAll(replaceAll(source, '\\[', '.'), '\\]', '').split('.') : [];
  let data = record;
  arrKeys.forEach(key => {
    data = data ? data[key] : data;
  });
  return data;
};

export const convertDataToObj = (formatOnSubmit, record) => {
  const newRecord = {};
  Object.keys(record).forEach(key => {
    newRecord[key] = formatOnSubmit[key]
      ? { ...record[key], ...formatOnSubmit[key](record[key]) }
      : record[key];
  });
  // const arrKeys = source.split('.');
  // let data = record;
  // arrKeys.forEach((key, index) => {
  //   if (index === arrKeys.index - 1) {
  //     data[key] = value;
  //   } else {
  //     data = data[key];
  //   }
  // });
  return newRecord;
};

export const replaceAll = function(str, search, replacement) {
  return str.replace(new RegExp(search, 'g'), replacement);
};

export const fetchSvg = async() => {
  const response = await fetch(
    'https://file.myfontastic.com/Fvw7WtHFjPqkRhM7VFHBfc/sprites/1539254234.svg',
  );
  const html = await response.text();
  let listSvg = replaceAll(html, '<symbol id=', '');
  listSvg = replaceAll(listSvg, ' viewBox="0 0 512 512">\n', ':');
  listSvg = replaceAll(listSvg, '<path d=', '');
  listSvg = replaceAll(listSvg, 'anticon-', '');
  listSvg = replaceAll(
    listSvg,
    `/>
    </symbol>`,
    ',',
  );
  listSvg = listSvg.replace('<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">', '{');
  listSvg = `${listSvg.substring(0, listSvg.lastIndexOf(','))}}`;
  listSvg = JSON.parse(listSvg);
  return listSvg;
};

export const formatSendCaseMessage = (item, caseType) => {
  return (
    caseType &&
    caseType.pushMessage.vi
      .replace('REPORT_USER', item.senderName)
      .replace('REPORT_ADDRESS', item.address)
      .replace(
        'BLOOD_TYPE',
        item.additionalInfo && item.additionalInfo.bloodType
          ? item.additionalInfo.bloodType.join(',')
          : '',
      )
  );
};
