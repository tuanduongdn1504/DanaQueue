import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { retrieveList, editRecord, deleteRecord, customQuery } from '../../../redux/rest/actions';
import RestListComponent from '../../../components/RestLayout/List';
import { getFilterFromUrl, getSearch } from '../../../helpers/Tools';
import { getLoading } from '../../../redux/rest/selectors';

class RestList extends Component {
  constructor(props) {
    super(props);
    const filter =
      (this.props.location && getFilterFromUrl(this.props.location.search)) || props.initialFilter;
    if (this.props.resource) {
      this.props.retrieveList(filter, true);
    }
  }

  retrieveList = filter => {
    this.props.pushQuery(filter);
    if (this.props.resource) {
      this.props.retrieveList(filter, true);
    }
  };

  render() {
    return <RestListComponent {...this.props} retrieveList={this.retrieveList} />;
  }
}

const mapStateToProps = (state, props) => {
  return {
    loading: getLoading(state, props.resource),
    resourceData: props.resourceData || state.rest[props.resource],
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveList: (filter, isRefresh) => {
      return dispatch(
        retrieveList(
          props.resource,
          {
            ...props.initialFilter,
            ...filter,
          },
          isRefresh,
        ),
      );
    },
    customQuery: (id, queryUrl, data, isChangeToEdit) =>
      dispatch(customQuery(props.resource, id, queryUrl, data, isChangeToEdit)),
    updateRecord: (id, data, isChangeToEdit) =>
      dispatch(editRecord(props.resource, id, data, isChangeToEdit)),
    gotoEditPage: id => dispatch(push(`${props.rootPath}/${props.resource}/${id}/edit`)),
    gotoShowPage: id => props.history.push(`${props.rootPath}/${props.resource}/${id}/show`),
    gotoCreatePage: () => props.history.push(`${props.rootPath}/${props.resource}/create`),
    deleteItem: id => dispatch(deleteRecord(props.resource, id)),
    pushQuery: filter => dispatch(push(`${props.rootPath}/${props.resource}?${getSearch(filter)}`)),
  };
};

const ConnectRestList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestList);

RestList.propTypes = {
  location: PropTypes.object,
  pushQuery: PropTypes.func,
  retrieveList: PropTypes.func,
  initialFilter: PropTypes.object,
  resource: PropTypes.string,
};

ConnectRestList.defaultProps = {
  rootPath: '',
};

export default ConnectRestList;
