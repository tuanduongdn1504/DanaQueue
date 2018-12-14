import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { retrieveReference, retrieveList } from '../../../redux/rest/actions';
import { getRecordData } from '../../../helpers/Tools';

class ReferenceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
    };
  }
  componentDidMount() {
    const { record, source, initialFilter, resourceData } = this.props;
    const dataValue = getRecordData(record, source);

    if (dataValue && _.some(resourceData, item => item.id === dataValue)) {
      this.props.retrieveReference(getRecordData(record, source));
    }

    this.props.retrieveList(initialFilter || {});
  }

  componentWillUpdate(nextProps) {
    if (!_.isEqual(this.props.initialFilter, nextProps.initialFilter)) {
      this.props.retrieveList(nextProps.initialFilter);
    }
  }

  retrieveListWaypoint() {
    if (this.state.limit < this.props.total) {
      const newLimit = this.state.limit + 10;
      this.setState({ limit: newLimit });
      this.props.retrieveList({ limit: newLimit });
    }
  }

  render() {
    const {
      resourceData,
      record,
      children,
      source,
      getFieldDecorator,
      setFieldsValue,
      form,
      searchKey,
      loadingData,
    } = this.props;
    const newChildren = React.cloneElement(children, {
      onSearch: value => {
        if (searchKey) {
          this.props.retrieveList({ [searchKey]: value });
        }
      },
      onEnter: () => this.retrieveListWaypoint(),
      searchKey,
      record,
      loading: loadingData,
      form,
      source,
      getFieldDecorator,
      setFieldsValue,
      resourceData,
    });
    return newChildren;
  }
}
ReferenceInput.propTypes = {
  resourceData: PropTypes.array,
  record: PropTypes.object,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  getFieldDecorator: PropTypes.func,
  setFieldsValue: PropTypes.func,
  form: PropTypes.object,
  searchKey: PropTypes.string,
  total: PropTypes.number,
  loadingData: PropTypes.bool,
  initialFilter: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const data = state.rest[props.reference];
  return {
    resourceData: _.unionBy(
      data && data.list,
      state.rest[`${[props.reference]}Reference`] &&
        state.rest[`${[props.reference]}Reference`].list,
      'id',
    ),
    loadingData: data && data.loading,
    total: data && data.total,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveReference: data =>
      dispatch(
        retrieveReference(props.reference, Array.isArray(data) ? data : [data], props.mappedBy),
      ),
    retrieveList: filter => dispatch(retrieveList(props.reference, filter)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReferenceInput);
