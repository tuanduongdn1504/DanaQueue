import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomBreadcrumb from '../../common/Breadcrumb';
import RestCreateForm from '../RestCreateForm';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';

class RestCreateComponent extends Component {
  constructor(props) {
    super(props);
    this.formCreateRef = React.createRef();
  }

  render() {
    const { showModal, title, location, noCardWrapper } = this.props;
    const BREADCRUMB_LIST = [];
    location.pathname.split('/').forEach((data, index) => {
      BREADCRUMB_LIST.push({
        title: data,
        path: `${BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''}/${data}`,
      });
    });

    const content = (
      <div style={{ width: '100%' }}>
        <RestCreateForm {...this.props} />
      </div>
    );
    return showModal ? (
      content
    ) : (
      <LayountContent bordered={false}>
        {title || (
          <PageHeader>
            <CustomBreadcrumb data={BREADCRUMB_LIST} />
          </PageHeader>
        )}
        {noCardWrapper ? content : <Box>{content}</Box>}
      </LayountContent>
    );
  }
}
RestCreateComponent.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.any,
  location: PropTypes.object,
  noCardWrapper: PropTypes.bool,
};
RestCreateComponent.defaultProps = {
  noCardWrapper: false,
};
export default RestCreateComponent;
