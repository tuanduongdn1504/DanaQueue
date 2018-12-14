import React from 'react';
import PropTypes from 'prop-types';
import { GroupWrapper } from './styles';

const ActionGroup = ({
  children,
  elementProps,
  gotoEditPage,
  gotoShowPage,
  deleteItem,
  record,
}) => {
  return (
    <GroupWrapper {...elementProps}>
      {React.Children.map(children, element =>
        React.cloneElement(element, {
          gotoEditPage: element.props.gotoEditPage || gotoEditPage,
          gotoShowPage: element.props.gotoShowPage || gotoShowPage,
          deleteItem: element.props.deleteItem || deleteItem,
          record,
        }),
      )}
    </GroupWrapper>
  );
};

ActionGroup.propTypes = {
  children: PropTypes.node,
  elementProps: PropTypes.object,
  record: PropTypes.object,
  gotoEditPage: PropTypes.func,
  gotoShowPage: PropTypes.func,
  deleteItem: PropTypes.func,
};

ActionGroup.defaultProps = {
  source: 'group',
};
export default ActionGroup;
