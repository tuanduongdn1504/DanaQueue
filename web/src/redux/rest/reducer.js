import { makeReducerCreator } from '../reduxCreator';
import { REST_ACTION_TYPES } from './actions';

const initialState = {
  errorRequest: false,
};
const retrieveList = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      ...action.filter,
      loading: true,
    },
  };
};

const retrieveListSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      ...action.data,
      loading: false,
    },
  };
};

const retrieveListFailed = (state, { resource, error }) => {
  return {
    ...state,
    [resource]: {
      ...state[resource],
      loading: false,
    },
    error,
  };
};

const retrieveOneRecord = (state, { resource, id }) => {
  return {
    ...state,
    [resource]: state[resource]
      ? {
          ...state[resource],
          currentId: id,
        }
      : {
          currentId: id,
        },
    errorRequest: false,
  };
};

const retrieveOneRecordSuccess = (state, { resource, data }) => {
  return {
    ...state,
    [resource]: {
      ...state[resource],
      ...data,
    },
    errorRequest: false,
  };
};

const retrieveOneRecordFailed = (state, { error }) => {
  return {
    ...state,
    errorRequest: true,
    error,
  };
};

const deleteRecord = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      loading: true,
    },
    errorRequest: false,
  };
};

const deleteRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: { ...state[action.resource], ...action.data, loading: false },
    errorRequest: false,
  };
};

const deleteRecordFailed = (state, { resource, error }) => {
  return {
    ...state,
    [resource]: { ...state[resource], loading: false },
    errorRequest: true,
    error,
  };
};

const editRecord = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      itemLoading: state[action.resource].itemLoading
        ? {
            ...state[action.resource].itemLoading,
            [action.id]: true,
          }
        : { [action.id]: true },
      loading: true,
    },
    errorRequest: false,
  };
};

const editRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      ...action.data,
      loading: false,
    },
    errorRequest: false,
  };
};

const editRecordFailed = (state, { error, resource, id }) => {
  return {
    ...state,
    [resource]: {
      ...state[resource],
      itemLoading: { ...state[resource].itemLoading, [id]: false },
      loading: false,
    },
    errorRequest: true,
    error,
  };
};

const createRecord = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      loading: true,
    },
    errorRequest: false,
  };
};
const createRecordSuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: { ...state[action.resource], ...action.data, loading: false },
    errorRequest: false,
  };
};

const createRecordFailed = (state, { resource, error }) => {
  return {
    ...state,
    [resource]: {
      ...state[resource],
      loading: false,
    },
    errorRequest: true,
    error,
  };
};

const retrieveReference = (state, action) => {
  return {
    ...state,
    [`${[action.resource]}Reference`]: {
      ...state[`${[action.resource]}Reference`],
      ...action.filter,
      loading: true,
      list: state[`${action.resource}Reference`] ? state[`${action.resource}Reference`].list : [],
    },
  };
};

const retrieveReferenceSuccess = (state, action) => {
  return {
    ...state,
    [`${[action.resource]}Reference`]: {
      ...state[`${action.resource}Reference`],
      ...action.data,
      loading: false,
      list: [...state[`${action.resource}Reference`].list, ...action.data.list],
    },
  };
};

const retrieveReferenceFailed = (state, { resource, error }) => {
  return {
    ...state,
    error,
    [`${resource}Reference`]: {
      loading: false,
    },
  };
};

const clearData = (state, action) => {
  switch (action.key) {
    case 'list':
      return {
        ...state,
        [action.resource]: {
          ...state[action.resource],
          list: [],
          ...action.filter,
          loading: false,
        },
      };
    case 'reference':
      return {
        ...state,
        [`${[action.resource]}Reference`]: {
          ...state[`${[action.resource]}Reference`],
          ...action.filter,
          loading: false,
          list: [],
        },
      };
    case 'record':
      return {
        ...state,
        [action.resource]: {},
      };
    default:
      return { ...state };
  }
};

const customQuery = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      itemLoading: state[action.resource].itemLoading
        ? {
            ...state[action.resource].itemLoading,
            [action.id]: true,
          }
        : { [action.id]: true },
    },
    errorRequest: false,
  };
};

const customQuerySuccess = (state, action) => {
  return {
    ...state,
    [action.resource]: {
      ...state[action.resource],
      ...action.data,
    },
    errorRequest: false,
  };
};

const customQueryFailed = (state, { error, resource, id }) => {
  return {
    ...state,
    [resource]: {
      ...state[resource],
      itemLoading: state[resource].itemLoading
        ? { ...state[resource].itemLoading, [id]: false }
        : {},
    },
    errorRequest: true,
    error,
  };
};

export default makeReducerCreator(initialState, {
  [REST_ACTION_TYPES.RETRIEVE_LIST]: retrieveList,
  [REST_ACTION_TYPES.RETRIEVE_LIST_SUCCESS]: retrieveListSuccess,
  [REST_ACTION_TYPES.RETRIEVE_LIST_FAILED]: retrieveListFailed,

  [REST_ACTION_TYPES.RETRIEVE_ONE_RECORD]: retrieveOneRecord,
  [REST_ACTION_TYPES.RETRIEVE_ONE_RECORD_SUCCESS]: retrieveOneRecordSuccess,
  [REST_ACTION_TYPES.RETRIEVE_ONE_RECORD_FAILED]: retrieveOneRecordFailed,

  [REST_ACTION_TYPES.DELETE_RECORD]: deleteRecord,
  [REST_ACTION_TYPES.DELETE_RECORD_SUCCESS]: deleteRecordSuccess,
  [REST_ACTION_TYPES.DELETE_RECORD_FAILED]: deleteRecordFailed,

  [REST_ACTION_TYPES.EDIT_RECORD]: editRecord,
  [REST_ACTION_TYPES.EDIT_RECORD_SUCCESS]: editRecordSuccess,
  [REST_ACTION_TYPES.EDIT_RECORD_FAILED]: editRecordFailed,

  [REST_ACTION_TYPES.CREATE_RECORD]: createRecord,
  [REST_ACTION_TYPES.CREATE_RECORD_SUCCESS]: createRecordSuccess,
  [REST_ACTION_TYPES.CREATE_RECORD_FAILED]: createRecordFailed,

  [REST_ACTION_TYPES.RETRIEVE_REFERENCE]: retrieveReference,
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE_SUCCESS]: retrieveReferenceSuccess,
  [REST_ACTION_TYPES.RETRIEVE_REFERENCE_FAILED]: retrieveReferenceFailed,

  [REST_ACTION_TYPES.CLEAR_DATA]: clearData,

  [REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD]: customQuery,
  [REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD_SUCCESS]: customQuerySuccess,
  [REST_ACTION_TYPES.CUSTOM_QUERY_ONE_RECORD_FAILED]: customQueryFailed,
});
