import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import RestEditForm from '../RestEditForm';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';

class RestEditComponent extends Component {
  state = {};

  render() {
    const { showModal, title, noCardWrapper, location } = this.props;
    const BREADCRUMB_LIST = [];
    const paths = location.pathname.split('/');
    paths.forEach((data, index) => {
      BREADCRUMB_LIST.push({
        title: data,
        path: `${BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''}/${data}`,
      });
    });
    if (title) {
      BREADCRUMB_LIST[paths.length].title = title || BREADCRUMB_LIST[paths.length].title;
    }
    const actions = <div />;
    return !showModal && !noCardWrapper ? (
      <LayountContent bordered={false} extra={actions}>
        <PageHeader>
          <CustomBreadcrumb data={BREADCRUMB_LIST} />
        </PageHeader>
        <Box>
          <RestEditForm {...this.props} />
        </Box>
      </LayountContent>
    ) : (
      <RestEditForm {...this.props} />
    );
  }
}

RestEditComponent.propTypes = {
  location: PropTypes.object,
  showModal: PropTypes.bool,
  title: PropTypes.any,
  noCardWrapper: PropTypes.bool,
};

RestEditComponent.defaultProps = {
  noCardWrapper: false,
};

export default RestEditComponent;
