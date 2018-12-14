import styled from 'styled-components';

export const AlertStyle = styled.div`
  .alertMessage {
    display: flex;
    align-items: baseline;
  }
  .ant-alert-message {
    width: 100%;
  }
  .justify {
    justify-content: space-between;
  }
  .ant-alert-info {
    border: 1px solid #6e6bf4;
    background-color: #e5e5f9;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .ant-alert-close-icon {
    top: 13px;
  }
`;
