import styled from 'styled-components';

export const IconImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  .anticon:before {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  .anticon:after {
    display: block;
    font-family: 'anticon', 'smartSOS' !important;
  }
  .btnIconBGColor {
    text-align: left;
  }
  .iconBorder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .infoContent {
    padding: 5px;
  }
`;
