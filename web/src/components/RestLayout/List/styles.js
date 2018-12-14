import styled from 'styled-components';

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  .viewContent {
    width: 100%;
    height: 100%;
  }
  .paginationRow {
    padding: 0px;
  }
  .ant-pagination {
    display: flex;
  }
  .ant-pagination-total-text {
    display: flex;
    align-items: center;
  }
  .ant-pagination-options-quick-jumper {
    font-weight: 300;
    font-size: 14px;
  }
  .ant-select-selection-selected-value {
    font-weight: 300;
    font-size: 14px;
  }
  .ant-pagination-item {
    font-weight: 300;
    font-size: 14px;
  }
  .box {
    box-shadow: 0px 1px 33px 1px rgba(39, 50, 75, 0.1);
    padding: 0px;
    border: 0px;
    border-radius: 5.5px;
    margin-bottom: 20px;
  }
`;
