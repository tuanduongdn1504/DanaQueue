import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { retrieveReference } from '../../../redux/rest/actions';
import { getRecordData } from '../../../helpers/Tools';

class Reference extends Component {
  componentDidMount() {
    const { source, record } = this.props;
    this.props.retrieveReference(getRecordData(record, source));
  }
  componentWillUpdate(nextProps) {
    if (this.props.record !== nextProps.record && !nextProps.resourceData) {
      const { source } = this.props;
      const { record } = nextProps;
      this.props.retrieveReference(getRecordData(record, source));
    }
  }
  render() {
    const {
      resourceData,
      resource,
      record,
      reference,
      children,
      retrieveList,
      source,
      rootPath,
      isLink,
      loading,
    } = this.props;
    return isLink ? (
      <Link
        href={`${rootPath}/${reference}/${
          resourceData ? resourceData.id : getRecordData(record, source)
        }/edit`}
        to={`${rootPath}/${reference}/${
          resourceData ? resourceData.id : getRecordData(record, source)
        }/edit`}
      >
        {React.Children.map(children, element =>
          React.cloneElement(element, {
            record: resourceData,
            resource,
            reference,
            retrieveList,
            loading,
          }),
        )}
      </Link>
    ) : (
      React.Children.map(children, element => {
        return React.cloneElement(element, {
          record: resourceData,
          resource,
          reference,
          retrieveList,
          loading,
        });
      })
    );
  }
}

Reference.propTypes = {
  resourceData: PropTypes.object,
  resource: PropTypes.string,
  record: PropTypes.object,
  reference: PropTypes.string,
  retrieveList: PropTypes.func,
  children: PropTypes.node,
  source: PropTypes.string,
  retrieveReference: PropTypes.func,
  rootPath: PropTypes.string,
  isLink: PropTypes.bool,
  loading: PropTypes.bool,
};

Reference.defaultProps = {
  rootPath: '',
  mappedBy: 'id',
};

const mapStateToProps = (state, props) => {
  return {
    resourceData:
      state.rest[`${props.reference}Reference`] && state.rest[`${props.reference}Reference`].list
        ? state.rest[`${props.reference}Reference`].list.find(
            data =>
              `${data[props.mappedBy || 'id']}` === `${getRecordData(props.record, props.source)}`,
          )
        : null,
    loading:
      state.rest[`${props.reference}Reference`] &&
      state.rest[`${props.reference}Reference`].loading,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    retrieveReference: id =>
      dispatch(retrieveReference(props.reference, id ? [id] : [], props.mappedBy)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reference);
