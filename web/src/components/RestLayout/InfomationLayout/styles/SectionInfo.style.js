import styled from 'styled-components';

export const SectionInfoWrapper = styled.div`
  border-bottom: 1px solid #eaeff9;
  width: 100%;
  padding: 25px 30px 12px 48px;
  .section-name {
    margin-bottom: 10px;
  }
  .items-content {
    flex-wrap: wrap;
  }
  .item {
    display: flex;
    margin-bottom: 10px;
    align-items: baseline;
    .label {
      margin-right: 10px;
    }
  }
`;
