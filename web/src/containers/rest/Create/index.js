import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createRecord } from '../../../redux/rest/actions';
import RestCreateComponent from '../../../components/RestLayout/Create';
import IntlMessages from '../../../components/utility/IntlMessages';
import Modal from '../../../components/uielements/Modal';

const RestCreate = props => {
  return !props.showModal ? (
    <RestCreateComponent {...props} />
  ) : (
    <Modal
      title={props.title || <IntlMessages id={props.resource} />}
      visible
      onCancel={props.onBack}
      footer={null}
    >
      <RestCreateComponent {...props} />
    </Modal>
  );
};

const mapStateToProps = (state, props) => {
  const defaultValues = decodeURI(props.location.search.substring(1)).trim();
  return {
    record: defaultValues !== '' ? JSON.parse(defaultValues) : {},
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: data => dispatch(createRecord(props.resource, data, props.gotoShowPage)),
    gotoShowPage: id => props.history.push(`${props.match.path.replace('create', '')}/${id}/edit`),
    onBack: () => props.history.goBack(),
  };
};

RestCreate.propTypes = {
  showModal: PropTypes.bool,
  onBack: PropTypes.func,
  resource: PropTypes.string,
  title: PropTypes.any,
};
const ConnectedRestCreate = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestCreate);

ConnectedRestCreate.propTypes = {
  goShowPageWhenSuccess: PropTypes.bool,
};
ConnectedRestCreate.defaultProps = {
  goShowPageWhenSuccess: true,
};
export default ConnectedRestCreate;
