import styled from 'styled-components';
import { palette } from 'styled-theme';

const MarkerInfoBoxWrapper = styled.div`
  width: 200px;
  flex-direction: column;
  .icon {
    font-size: 50px;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 10px;
  }
  .title {
    font-weight: bold;
    color: ${palette('text', 0)};
  }
  .subTitle {
    margin-top: 5px;
    font-weight: 400;
    color: ${palette('text', 1)};
  }
  .description {
    margin-top: 10px;
    color: ${palette('text', 2)};
  }
  ,
  .row {
    display: flex;
  }
  .viewCenter {
    flex: 1;
    height: 200px;
  }
  .viewLeft {
    width: 150px;
    height: 200px;
  }
  .txtcountTitle {
    color: ${palette('text', 2)};
  }
  .txtReporterCount {
    color: ${palette('error', 0)};
  }
  .txtHelperCount {
    color: ${palette('success', 0)};
  }
  .footer {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .viewHeader {
    padding-bottom: 15px;
  }
  .iconInfobox {
    font-size: 16px;
    margin-right: 8px;
    margin-top: 2px;
    color: ${palette('text', 2)};
  }
`;

export default MarkerInfoBoxWrapper;
