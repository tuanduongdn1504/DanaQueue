import { pick } from 'lodash';
import { getValidData } from '../../helpers/Tools';

const SLUG_PRIMARY_KEY = [
  'typeGroups',
  'subTypeGroups',
  'caseTypes',
  'userRoles',
  'activityTypes',
  'caseStatuses',
];

export const convertRequestParams = (type, params, resource, mappedBy) => {
  const requestParams = pick(params, ['limit', 'offset']);
  let query = {
    limit: requestParams.limit,
    offset: requestParams.offset,
  };
  if (params.filter) {
    query.filter = JSON.stringify(getValidData(params.filter));
  }

  switch (type) {
    case 'getAll':
      return query;
    case 'getReference':
      query = {
        filter: JSON.stringify({
          $where: {
            [mappedBy || 'id']: {
              $in: params,
            },
          },
          // [mappedBy || 'id']: {
          //   $in: params,
          // },
        }),
      };
      return query;
    case 'editMulti':
      return {
        requests: params.map(record => {
          const newRecord = record;
          delete newRecord.createdAt;
          delete newRecord.updatedAt;
          return {
            method: 'PUT',
            path: `/Classes/${resource}/${newRecord.id}`,
            body: newRecord,
          };
        }),
      };
    case 'getOne':
      break;
    case 'del':
    case 'update':
    case 'create':
    default:
      return {};
  }
  return {};
};

export const convertResponseData = (type, response, resource) => {
  const isPrimaryKeyBySlug = SLUG_PRIMARY_KEY.indexOf(resource) > -1;
  switch (type) {
    case 'getAll':
      return {
        results: response.results.map(data => ({
          ...data,
          id: isPrimaryKeyBySlug ? data.slug : data.id,
        })),
        total: response.total,
      };
    case 'editMulti':
      return response.map(data => data.success);
    case 'getOne':
    case 'update':
    case 'create':
      return { ...response, id: isPrimaryKeyBySlug ? response.slug : response.id };
    case 'del':
    default:
      return response;
  }
};
