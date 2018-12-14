import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination } from 'antd';

import CustomBreadcrumb from '../../common/Breadcrumb';
import CreateButton from '../../RestActions/CreateButton';
import RestTableLayout, { getAction, currentPage, showTotal } from '../TableLayout';
import LayountContent from '../../utility/LayoutWrapper';
import Box from '../../utility/Box';
import PageHeader from '../../uielements/pageHeader';
import ActionView from '../ActionLayout';
import RestFilterForm from '../FilterLayout';
import RestListLayout from '../ListLayout';
import { ListWrapper } from './styles';
import IntlMessages from '../../utility/IntlMessages';

class RestListComponent extends Component {
  state = {};

  onChangePagination = (page, pageSize) => {
    const { resourceData } = this.props;
    this.props.retrieveList({
      offset: (page - 1) * pageSize,
      limit: pageSize,
      filter: resourceData.filter,
    });
  };
  renderListItem = record => {
    const { children } = this.props;
    return React.Children.map(children, item => {
      return React.cloneElement(item, {
        record,
        onChange: () => this.onChangeRecord(record, item),
        ...getAction(this.props, item),
      });
    });
  };

  render() {
    const {
      retrieveList,
      noCardWrapper,
      resourceData,
      resource,
      hasCreate,
      gotoCreatePage,
      filter,
      title,
      isList,
      location,
      notShowPagination,
    } = this.props;
    const BREADCRUMB_LIST = [];
    if (location) {
      location.pathname.split('/').forEach((data, index) => {
        if (data === '') return;
        BREADCRUMB_LIST &&
          BREADCRUMB_LIST.push({
            title: typeof data === 'string' && !Number('data') ? <IntlMessages id={data} /> : data,
            path: `${BREADCRUMB_LIST[index - 1] ? BREADCRUMB_LIST[index - 1].path : ''}/${data}`,
          });
      });

      BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title =
        title || BREADCRUMB_LIST[BREADCRUMB_LIST.length - 1].title;
    }

    const actions = (
      <div>{hasCreate && <CreateButton resource={resource} gotoCreatePage={gotoCreatePage} />}</div>
    );

    if (!resourceData) return null;
    const filterForm = filter ? (
      <RestFilterForm
        format={filter.props.format}
        resourceData={resourceData}
        retrieveList={retrieveList}
      >
        {filter}
      </RestFilterForm>
    ) : null;
    const pagimationView = (
      <Pagination
        showSizeChanger
        showQuickJumper
        total={resourceData.total}
        defaultCurrent={currentPage(resourceData) || 1}
        current={currentPage(resourceData) || 1}
        showTotal={showTotal}
        pageSize={resourceData.limit || 10}
        onChange={this.onChangePagination}
        onShowSizeChange={this.onChangePagination}
      />
    );
    const paginationTopView = (
      <Row
        className="paginationRow"
        justify="center"
        align="middle"
        type="flex"
        style={{ marginBottom: 20 }}
      >
        <Col md={16} xs={24}>
          {pagimationView}
        </Col>
        <Col md={8} xs={24}>
          <ActionView>{actions}</ActionView>
        </Col>
      </Row>
    );

    const paginationBottomView = (
      <Row className="paginationRow" justify="center" align="middle" type="flex">
        <Col xs={24}>{pagimationView}</Col>
      </Row>
    );

    const tableContent = (
      <div className="viewContent">
        {filterForm}

        {!notShowPagination && paginationTopView}
        <Box className="box">
          <RestTableLayout {...this.props} />
        </Box>
        {!notShowPagination && paginationBottomView}
      </div>
    );
    const listCotent = (
      <div className="viewContent">
        {filterForm}
        <ActionView>{actions}</ActionView>
        <RestListLayout {...this.props} />
      </div>
    );
    const content = isList ? (
      listCotent
    ) : (
      <Row className="viewContent">
        <Col md={0} xs={24}>
          {listCotent}
        </Col>
        <Col md={24} xs={0}>
          {tableContent}
        </Col>
      </Row>
    );
    return noCardWrapper ? (
      <ListWrapper>{content}</ListWrapper>
    ) : (
      <ListWrapper>
        <LayountContent
          bordered={false}
          title={<CustomBreadcrumb data={BREADCRUMB_LIST} />}
          extra={actions}
        >
          <PageHeader>
            <CustomBreadcrumb data={BREADCRUMB_LIST} />
          </PageHeader>
          {content}
        </LayountContent>
      </ListWrapper>
    );
  }
}

RestListComponent.propTypes = {
  resource: PropTypes.string,
  noCardWrapper: PropTypes.bool,
  retrieveList: PropTypes.func,
  resourceData: PropTypes.object,
  hasCreate: PropTypes.bool,
  gotoCreatePage: PropTypes.func,
  filter: PropTypes.object,
  title: PropTypes.any,
  children: PropTypes.any,
  isList: PropTypes.bool,
  location: PropTypes.object,
  notShowPagination: PropTypes.bool,
};
RestListComponent.defaultProps = {
  noCardWrapper: false,
  isList: false,
};
export default RestListComponent;
