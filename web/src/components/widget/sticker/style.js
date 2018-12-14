import styled from 'styled-components';

const StickerWidgetWrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  border: 1px solid #ebebeb;
  .top-content {
    width: 100%;
    display: flex;
    align-items: stretch;
    overflow: hidden;
  }
  .linkText {
    font-size: 12px;
    color: #9e9e9e;
  }

  .link:hover .linkText {
    color: #4a4a4a;
  }

  .bottom-content {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
  .isoIconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    flex-shrink: 0;

    i {
      font-size: 35px;
    }
  }

  .isoContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ebebeb;
    .isoStatNumber {
      font-size: 30px;
      font-weight: 500;
      line-height: 1.1;
      margin: 0 0 10px;
    }

    .isoLabel {
      color: #716e6e;
      font-size: 15px;
      font-weight: 400;
      margin: 0;
      line-height: 1.2;
    }
  }
  .ant-dropdown-trigger:hover {
    cursor: pointer;
  }
`;

export { StickerWidgetWrapper };
