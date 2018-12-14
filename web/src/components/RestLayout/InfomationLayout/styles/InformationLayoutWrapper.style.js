import styled from 'styled-components';

export const InformationLayoutWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  .info-left {
    display: table-cell;
    vertical-align: top;
  }
  .info-right {
    padding-left: 20px;
    display: table-cell;
    vertical-align: middle;
  }
  .main-info {
    margin-top: 10px;
  }
  .viewList {
    width: 50%;
  }
  .avatar-wrapper {
    display: flex;
    justify-content: center;
  }
  .avatar-and-rating {
    border-right: 1px solid #eaeff9;
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar-and-rating-content {
    }
  }

  .main-user-info {
    padding: 0px;
  }
  .user-info-content {
    .section-content::last-child {
      border-bottom: 0px;
    }
  }

  .main-info {
    text-align: center;
    margin: 0 0 30px 0;
    .name {
      margin-bottom: 5px;
    }
  }
`;
