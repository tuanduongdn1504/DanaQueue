import styled from 'styled-components';
import { palette, font } from 'styled-theme';

const DashAppHolder = styled.div`
  body {
    font-family: ${font('primary', 0)} !important;
  }
  font-family: ${font('primary', 0)};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  svg {
    font-family: ${font('primary', 0)};
    &::selection {
      background: ${palette('primary', 0)};
      color: #fff;
    }
  }

  .ant-row:not(.ant-form-item) {
    ${'' /* margin-left: -8px;
    margin-right: -8px; */};
    &:before,
    &:after {
      display: none;
    }
  }

  .ant-row > div {
    ${'' /* padding: 0;
    padding: 0; */};
  }

  .isoLeftRightComponent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .isoCenterComponent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .isoLayoutContentWrapper {
    width: 100%;
    padding: 30px;
  }
  .anticon:before {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }

  .ant-pagination-item:hover {
    background-color: ${palette('primary', 0)};
    border-color: ${palette('primary', 0)};
    a {
      color: #fff;
    }
  }
  .ant-pagination-item {
    background-color: transparent;
    border: 0px;
  }
  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    background-color: transparent;
    border: 0px;
  }
  .ant-pagination-item-active {
    background-color: ${palette('primary', 0)};
    border-color: ${palette('primary', 0)};
    a {
      color: #fff;
    }
  }
  .ant-table-thead > tr > th {
    font-weight: 500;
    font-size: 14px;
    color: ${palette('text', 7)};
  }

  .ant-switch {
    background: rgba(0, 0, 0, 0.12);
  }
  .ant-switch-checked {
    background-color: ${palette('primary', 0)};
  }
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${palette('secondary', 2)} !important;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5) !important;
  }
  div::-webkit-scrollbar-track {
    background: ${palette('grayscale', 2)} !important;
  }
  div::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${palette('secondary', 2)} !important;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5) !important;
  }
  div::-webkit-scrollbar {
    width: 6px;
    background: ${palette('grayscale', 2)} !important;
  }
  .ant-table-row:hover {
    ${''} & > td {
      background: ${palette('grayscale', 2)} !important;
    }
  }
  .ant-table-row:focus {
    background: ${palette('text', 7)};
  }
  .ant-select-selection-selected-value {
    color: #000;
  }
  .ant-select-selection--multiple .ant-select-selection__choice {
    background-color: #ecf9ff;
    border: 0px;
    color: #5f5f5f;
  }
  .ant-modal {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }
`;

export default DashAppHolder;
