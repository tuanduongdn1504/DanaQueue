import { call, put, cancel, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import _ from 'lodash';
import * as actions from './actions';
import { convertRequestParams, convertResponseData } from './dataProvider';
import { apiWrapper } from '../reduxCreator';
import { getList } from '../../api/restApi';

const debouncedIds = {};
const mappeds = {};
const tasks = {};

const addIds = (resource, ids) => {
  if (!debouncedIds[resource]) {
    debouncedIds[resource] = [];
  }
  debouncedIds[resource] = _.union(debouncedIds[resource], ids);
};

const addMappedBy = (resource, mappedBy) => {
  if (!mappeds[resource]) {
    mappeds[resource] = [];
  }
  mappeds[resource] = mappedBy;
};

function* finalize(resource) {
  // combined with cancel(), this debounces the calls
  yield call(delay, 50);
  yield fork(retrieveReferenceList, resource);
  delete tasks[resource];
  delete debouncedIds[resource];
  delete mappeds[resource];
}

export function* retrieveReference({ resource, ids, mappedBy }) {
  if (tasks[resource]) {
    yield cancel(tasks[resource]);
  }
  addIds(resource, ids);
  addMappedBy(resource, mappedBy);
  tasks[resource] = yield fork(finalize, resource);
}

export function* retrieveReferenceList(resource) {
  try {
    const params = convertRequestParams(
      'getReference',
      debouncedIds[resource],
      resource,
      mappeds[resource],
    );
    const response = yield call(apiWrapper, getList, false, false, resource, params);
    const convertData = convertResponseData('getAll', response, resource);
    yield put(
      actions.retrieveReferenceSuccess(resource, {
        list: convertData.results,
        total: convertData.total,
      }),
    );
  } catch (error) {
    yield put(actions.retrieveReferenceFailed(resource, error));
  }
}
