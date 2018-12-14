import { makeActionCreator, makeConstantCreator } from '../reduxCreator';

export const REST_ACTION_TYPES = makeConstantCreator(
  'RETRIEVE_LIST',
  'RETRIEVE_LIST_SUCCESS',
  'RETRIEVE_LIST_FAILED',

  'RETRIEVE_ONE_RECORD',
  'RETRIEVE_ONE_RECORD_SUCCESS',
  'RETRIEVE_ONE_RECORD_FAILED',

  'DELETE_RECORD',
  'DELETE_RECORD_SUCCESS',
  'DELETE_RECORD_FAILED',

  'EDIT_MULTI_RECORD',
  'EDIT_RECORD',
  'EDIT_RECORD_SUCCESS',
  'EDIT_RECORD_FAILED',

  'CREATE_RECORD',
  'CREATE_RECORD_SUCCESS',
  'CREATE_RECORD_FAILED',

  'RETRIEVE_REFERENCE',
  'RETRIEVE_REFERENCE_SUCCESS',
  'RETRIEVE_REFERENCE_FAILED',

  'CUSTOM_QUERY_ONE_RECORD',
  'CUSTOM_QUERY_ONE_RECORD_SUCCESS',
  'CUSTOM_QUERY_ONE_RECORD_FAILED',

  'CLEAR_DATA',
);

export const retrieveList = (resource, filter, isClear) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_LIST, {
    resource,
    filter,
    isClear,
  });
export const retrieveListSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_LIST_SUCCESS, {
    resource,
    data,
  });
export const retrieveListFailed = (resource, error) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_LIST_FAILED, { resource, error });

export const retrieveOneRecord = (resource, id) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_ONE_RECORD, { resource, id });
export const retrieveOneRecordSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_ONE_RECORD_SUCCESS, {
    resource,
    data,
  });
export const retrieveOneRecordFailed = error =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_ONE_RECORD_FAILED, error);

export const deleteRecord = (resource, id) =>
  makeActionCreator(REST_ACTION_TYPES.DELETE_RECORD, { resource, id });
export const deleteRecordSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.DELETE_RECORD_SUCCESS, {
    resource,
    data,
  });
export const deleteRecordFailed = (resource, error) =>
  makeActionCreator(REST_ACTION_TYPES.DELETE_RECORD_FAILED, { resource, error });

export const editMultiRecord = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.EDIT_MULTI_RECORD, { resource, data });
export const editRecord = (resource, id, data, isGoBack) =>
  makeActionCreator(REST_ACTION_TYPES.EDIT_RECORD, { resource, id, data, isGoBack });
export const editRecordSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.EDIT_RECORD_SUCCESS, { resource, data });
export const editRecordFailed = (error, resource, id) =>
  makeActionCreator(REST_ACTION_TYPES.EDIT_RECORD_FAILED, { error, resource, id });

export const createRecord = (resource, data, isGoToShowPage) =>
  makeActionCreator(REST_ACTION_TYPES.CREATE_RECORD, {
    resource,
    data,
    isGoToShowPage,
  });
export const createRecordSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.CREATE_RECORD_SUCCESS, {
    resource,
    data,
  });
export const createRecordFailed = (resource, error) =>
  makeActionCreator(REST_ACTION_TYPES.CREATE_RECORD_FAILED, { resource, error });

export const retrieveReference = (resource, ids, mappedBy) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_REFERENCE, { resource, ids, mappedBy });

export const retrieveReferenceSuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_REFERENCE_SUCCESS, {
    resource,
    data,
  });
export const retrieveReferenceFailed = error =>
  makeActionCreator(REST_ACTION_TYPES.RETRIEVE_REFERENCE_FAILED, error);

export const customQuery = (resource, id, queryUrl, data) =>
  makeActionCreator(REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD, { resource, queryUrl, id, data });
export const customQuerySuccess = (resource, data) =>
  makeActionCreator(REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD_SUCCESS, { resource, data });
export const customQueryFailed = (error, resource, id) =>
  makeActionCreator(REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD_FAILED, { error, resource, id });

export const clearData = (key, resource) =>
  makeActionCreator(REST_ACTION_TYPES.CLEAR_DATA, { key, resource });
