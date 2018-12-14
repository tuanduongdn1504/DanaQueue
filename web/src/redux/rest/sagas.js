import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import { goBack } from 'react-router-redux';
import {
  getList,
  getOneRecord,
  putRecord,
  deleteRecord,
  postRecord,
  batch,
  customQuery,
} from '../../api/restApi';
import * as actions from './actions';
import { apiWrapper } from '../reduxCreator';
import { retrieveReference as _retrieveReference } from './referenceSaga';
import { convertRequestParams, convertResponseData } from './dataProvider';

const { REST_ACTION_TYPES } = actions;

export const retrieveReference = _retrieveReference;

export function* retrieveList({ resource }) {
  try {
    const { limit, offset, filter } = yield select(state => state.rest[resource]);
    const params = convertRequestParams('getAll', {
      limit: (limit < 1000 && limit) || 10,
      offset: offset || 0,
      filter,
    });
    const response = yield call(apiWrapper, getList, false, false, resource, params);
    const convertData = convertResponseData('getAll', response, resource);
    yield put(
      actions.retrieveListSuccess(resource, {
        list: convertData.results,
        total: convertData.total,
      }),
    );
  } catch (error) {
    yield put(actions.retrieveListFailed(resource, error));
  }
}

export function* retrieveOneRecord({ resource, id, data }) {
  try {
    const response = yield call(apiWrapper, getOneRecord, false, false, resource, id, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('getOne', response, resource);
    const newList =
      rest[resource].list && rest[resource].list.length !== 0
        ? rest[resource].list.map(item => {
            return String(item.id) === String(convertData.id)
              ? { ...item, ...data, ...convertData }
              : item;
          })
        : [convertData];
    yield put(
      actions.retrieveOneRecordSuccess(resource, {
        list: newList,
        total: rest[resource] ? rest[resource].total : newList.length,
      }),
    );
  } catch (error) {
    yield put(actions.retrieveOneRecordFailed(error));
  }
}

export function* editMultiRecord({ resource, data }) {
  try {
    const requestParams = convertRequestParams('editMulti', data, resource);

    const response = yield call(apiWrapper, batch, true, false, requestParams);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('editMulti', response, resource);

    data.map((item, index) => {
      return {
        ...item,
        ...convertData[index],
      };
    });
    const newList = rest[resource].list.map(item => {
      return item.id === convertData.id ? { ...item, ...data, ...convertData } : item;
    });
    yield put(
      actions.editRecordSuccess(resource, {
        list: newList,
        total: rest[resource].total,
      }),
    );
  } catch (error) {
    yield put(actions.editRecordFailed(error));
  }
}

export function* editRecord({ resource, id, data, isGoBack }) {
  try {
    const response = yield call(apiWrapper, putRecord, true, false, resource, id, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('update', response, resource);
    const newList = rest[resource].list.map(item => {
      return item.id === id ? { ...item, ...data, ...convertData } : item;
    });
    yield put(
      actions.editRecordSuccess(resource, {
        list: newList,
        total: rest[resource].total,
        itemLoading: { ...rest[resource].itemLoading, [id]: false },
      }),
    );
    yield put(actions.retrieveOneRecord(resource, id));
    if (!isGoBack) {
      yield put(goBack());
    }
  } catch (error) {
    yield put(actions.editRecordFailed(error, resource, id));
  }
}

export function* createRecord({ resource, data }) {
  try {
    const response = yield call(apiWrapper, postRecord, true, false, resource, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('create', response, resource);
    const newList = rest[resource]
      ? [
          {
            ...data,
            ...convertData,
          },
          ...rest[resource].list,
        ]
      : [convertData];
    yield put(
      actions.createRecordSuccess(resource, {
        list: newList,
        total: rest[resource] ? rest[resource].total + 1 : 1,
      }),
    );
    yield put(actions.retrieveOneRecord(resource, response.id));
    yield put(goBack());
  } catch (error) {
    yield put(actions.createRecordFailed(resource, error));
  }
}

export function* delRecord({ resource, id }) {
  try {
    yield call(apiWrapper, deleteRecord, true, false, resource, id);
    // const rest = yield select(state => state.rest);
    // const newList = _.xorBy(rest[resource].list, [{ id }], 'id');
    // yield put(
    //   actions.retr(resource, {
    //     list: newList,
    //     count: rest[resource].count - 1,
    //   }),
    // );
    yield put(actions.retrieveList(resource));
  } catch (error) {
    yield put(actions.deleteRecordFailed(resource, error));
  }
}

export function* customQuerySaga({ resource, id, data = {}, queryUrl }) {
  try {
    const response = yield call(apiWrapper, customQuery, true, false, resource, id, queryUrl, data);
    const rest = yield select(state => state.rest);
    const convertData = convertResponseData('update', response, resource);
    const newList = rest[resource].list.map(item => {
      return item.id === convertData.id ? { ...item, ...data, ...convertData } : item;
    });
    yield put(
      actions.customQuerySuccess(resource, {
        list: newList,
        total: rest[resource].total,
        itemLoading: { ...rest[resource].itemLoading, [id]: false },
      }),
    );
    yield put(actions.retrieveOneRecord(resource, id));
  } catch (error) {
    yield put(actions.customQueryFailed(error, resource, id));
  }
}

function restSagas() {
  return [
    takeEvery(REST_ACTION_TYPES.RETRIEVE_LIST, retrieveList),
    takeLatest(REST_ACTION_TYPES.RETRIEVE_ONE_RECORD, retrieveOneRecord),
    takeLatest(REST_ACTION_TYPES.EDIT_MULTI_RECORD, editMultiRecord),
    takeLatest(REST_ACTION_TYPES.EDIT_RECORD, editRecord),
    takeLatest(REST_ACTION_TYPES.DELETE_RECORD, delRecord),
    takeLatest(REST_ACTION_TYPES.CREATE_RECORD, createRecord),
    takeEvery(REST_ACTION_TYPES.RETRIEVE_REFERENCE, retrieveReference),
    takeEvery(REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD, customQuerySaga),
  ];
}

export default restSagas();
