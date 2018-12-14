import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Card } from 'antd';
import { getAction } from '../TableLayout';
import Title from '../../common/Title';
import IntlMessages from '../../utility/IntlMessages';

class RestListLayout extends Component {
  state = {
    current: currentPage(this.props.resourceData),
  };

  onChangePagination = e => {
    const { resourceData } = this.props;
    this.setState({ current: e.current });
    this.props.retrieveList({
      offset: (e.current - 1) * e.pageSize,
      limit: e.pageSize,
      filter: resourceData.filter,
    });
  };

  onChangeRecord(record, item) {
    switch (item.props.type) {
      case 'switch':
        return this.props.updateRecord(
          record.id,
          {
            [item.props.source]: !record[item.props.source],
          },
          true,
        );

      default:
        return null;
    }
  }

  onChangePage = page => {
    const { resourceData } = this.props;
    this.props.retrieveList({
      offset: (page - 1) * (resourceData.limit || 10),
      limit: resourceData.limit || 10,
      filter: resourceData.filter,
    });
  };

  renderListItem = record => {
    const { children } = this.props;
    return React.Children.map(children, item => {
      return (
        <div key={item.props.title}>
          <Title>{item.props.title ? <IntlMessages id={item.props.title} /> : ''}</Title>
          {React.cloneElement(item, {
            record,
            table: true,
            list: true,
            onChange: () => this.onChangeRecord(record, item),
            ...getAction(this.props, item),
          })}
        </div>
      );
    });
  };

  render() {
    const {
      resourceData,
      gotoEditPage,
      deleteItem,
      gotoShowPage,
      responseRender,
      isList,
    } = this.props;
    return (
      <List
        grid={{ gutter: 16 }}
        pagination={{
          position: 'none',
          onChange: this.onChangePage,
          pageSize: resourceData.limit || 10,
        }}
        dataSource={(resourceData && resourceData.list) || []}
        renderItem={record => (
          <List.Item style={{ marginBottom: 0 }}>
            {responseRender && !isList ? (
              responseRender(record, {
                gotoShowPage,
                deleteItem,
                gotoEditPage,
              })
            ) : (
              <Card style={{ marginTop: 10, marginBottom: 0 }}>{this.renderListItem(record)}</Card>
            )}
          </List.Item>
        )}
      />
    );
  }
}

const currentPage = resourceData => {
  return Number(resourceData.offset) / Number(resourceData.limit) + 1;
};

RestListLayout.propTypes = {
  retrieveList: PropTypes.func,
  resourceData: PropTypes.object,
  updateRecord: PropTypes.func,
  responseRender: PropTypes.func,
  gotoEditPage: PropTypes.func,
  gotoShowPage: PropTypes.func,
  deleteItem: PropTypes.func,
  children: PropTypes.any,
  isList: PropTypes.bool,
};

export default RestListLayout;
