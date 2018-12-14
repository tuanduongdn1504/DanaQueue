import { createSelector } from 'reselect';
import _ from 'lodash';

const getRawResources = (state, resource) => state.rest[resource];

export const getResources = createSelector(
  [getRawResources],
  resources => {
    return resources && resources.list ? resources.list : [];
  },
);
export const getTotalResources = createSelector(
  [getRawResources],
  resources => {
    return resources && resources.total ? resources.total : 0;
  },
);
export const getResourcesObjFormater = createSelector(
  [getRawResources],
  resources => {
    return resources && resources.list ? _.keyBy(resources.list, 'id') : {};
  },
);

export const getOneRecord = createSelector(
  [getRawResources],
  resources => {
    return resources && resources.list
      ? resources.list.find(data => String(data.id) === String(resources.currentId))
      : null;
  },
);
export const getLoading = createSelector(
  [getRawResources],
  resources => {
    return resources && resources.loading ? resources.loading : false;
  },
);
