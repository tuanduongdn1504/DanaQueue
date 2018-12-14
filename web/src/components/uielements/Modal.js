import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './styles/modal.style';

const Modal = props => <ModalWrapper {...props} />;

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
