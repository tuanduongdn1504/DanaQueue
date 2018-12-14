import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import IntlMessages from '../../utility/IntlMessages';
import Text from '../../common/Text';
import { getRecordData } from '../../../helpers/Tools';

class RestTableLayout extends Component {
  onChangePagination = (e, filters, sorter) => {
    const { resourceData, retrieveList } = this.props;
    const formatFilter = {};
    const formatSort =
      sorter && sorter.field ? `${sorter.order === 'descend' ? '-' : ''}${sorter.field}` : null;
    Object.keys(filters).forEach(filter => {
      formatFilter[filter] = { $in: filters[filter] };
    });
    retrieveList({
      offset: (e.current - 1) * e.pageSize,
      limit: e.pageSize,
      filter: { ...resourceData.filter, ...formatFilter },
      order: formatSort,
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

  render() {
    const { resourceData, children, gotoEditPage, loading, onRow, customQuery } = this.props;
    const columns = children.map((item, index) => {
      return {
        title: item.props.title ? <IntlMessages id={item.props.title} /> : null,
        dataIndex: item.props.source,
        width: item.props.width,
        align: item.props.align,
        key: item.props.source || `col${index}`,
        sorter: item.props.sorter
          ? (a, b) => {
              return getRecordData(a, item.props.source) > getRecordData(b, item.props.source);
            }
          : undefined,
        sortOrder: item.props.sortOrder,
        filters: item.props.filters,
        filterMultiple: item.props.filterMultiple,
        onFilter: (value, record) => {
          return `${getRecordData(record, item.props.source)}`.search(`${value}`) > -1;
        },
        render:
          item.props.render ||
          ((obj, record) => {
            const RecordComponent = React.cloneElement(item, {
              table: true,
              record,
              loading: resourceData.itemLoading && resourceData.itemLoading[record.id],
              onChange: () => this.onChangeRecord(record, item),
              customQuery,
              ...getAction(this.props, item),
            });
            return RecordComponent;
          }),
      };
    });

    return (
      <Table
        onRow={record => {
          return {
            onDoubleClick: () => {
              onRow ? onRow(record) : gotoEditPage(record.id);
            },
          };
        }}
        onChange={this.onChangePagination}
        pagination={{
          position: 'none',
          total: resourceData.total,
          current: currentPage(resourceData),
          showTotal,
          pageSize: resourceData.limit,
          showQuickJumper: true,
          showSizeChanger: true,
        }}
        columns={columns}
        loading={loading}
        dataSource={(resourceData && resourceData.list) || []}
        rowKey="id"
      />
    );
  }
}

export const currentPage = resourceData => {
  return Number(resourceData.offset) / Number(resourceData.limit) + 1;
};

export const showTotal = (total, range) => {
  return (
    <Text type="body3" fontWeight="light">
      {` ${range.join(' - ')} của ${total} `}{' '}
      {/* <IntlMessages id={total > 1 ? 'text.records' : 'text.record'} /> */}
    </Text>
  );
};
export const getAction = (props, item) => {
  switch (item.props.source) {
    case 'edit':
      return { gotoEditPage: item.props.gotoEditPage || props.gotoEditPage };
    case 'delete':
      return { deleteItem: item.props.deleteItem || props.deleteItem };
    case 'show':
      return { gotoShowPage: item.props.gotoShowPage || props.gotoShowPage };
    case 'group':
      return {
        gotoShowPage: props.gotoShowPage,
        deleteItem: props.deleteItem,
        gotoEditPage: props.gotoEditPage,
      };

    default:
      return {};
  }
};

RestTableLayout.propTypes = {
  children: PropTypes.node,
  retrieveList: PropTypes.func,
  gotoEditPage: PropTypes.func,
  resourceData: PropTypes.object,
  loading: PropTypes.bool,
  updateRecord: PropTypes.func,
  onRow: PropTypes.func,
  customQuery: PropTypes.func,
};

export default RestTableLayout;
