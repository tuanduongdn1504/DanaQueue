import styled from 'styled-components';

export const TimePickerWrapper = styled.div`
  display: flex;
  margin-right: 20px;
  flex: 1;
`;

export const DatePickerWrapper = styled.div`
  text-aligns: center;
  position: relative;
  display: flex;
  box-shadow: rgba(2, 5, 17, 0.1) 0px 5px 17px;
  width: 130px;
  height: 40px;
  background: white;
  .row {
    display: flex;
    padding-bottom: 3px;
    padding-top: 10px;
  }
  .txt {
    flex: 1;
  }
  .viewButton {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 2px;
  }
  .icon {
    margin-left: 10;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex: 1;
    margin-right: 10;
  }
  .viewDatepicker {
    opacity: 0;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 130px !important;
    height: 40px;
    z-index: 9999;
  }
`;
