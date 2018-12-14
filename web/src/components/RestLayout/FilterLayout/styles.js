import styled from 'styled-components';
import { Form } from 'antd';
import { palette } from 'styled-theme';

export const FilterFormWrapper = styled(Form)`
  margin: auto;
  .filterContainer {
    display: flex;
    padding-bottom: 15px;
    @media only screen and (max-width: 576px) {
      display: block;
      margin-bottom: 15px;
    }
  }
  .filterContent {
    flex: 1;
    justify-content: flex-end;
    margin-right: 10px;
    @media only screen and (max-width: 576px) {
      margin-right: 0px;
    }
  }
  .filterActions {
    width: 200px;
    @media only screen and (max-width: 576px) {
      display: block;
      width: 100%;
      margin-bottom: 15px;
    }
  }
  .border {
  }
  .filterButton {
    margin-top: 5px;
    width: 100%;
    font-size: 14px;
  }
  .clearButton {
    background: ${palette('grayscale', 1)};
    color: white;
  }
  .ant-form-item {
    margin-bottom: 0px;
    margin-right: -1px;
  }
  .ant-form-item-label label {
    color: #757575;
  }
`;
