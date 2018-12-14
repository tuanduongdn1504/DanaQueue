import styled from 'styled-components';
import { palette } from 'styled-theme';

export const InputAdditionWrapper = styled.div`
  padding-bottom: 20px;
  width: 100%;
  .buttonRow {
    justify-content: flex-end;
  }
  .inputRow {
    display: flex;
  }
  .input {
    flex: 1;
    margin-right: 10px;
  }
  .btnDelete {
    color: ${palette('primary', 0)};
    cursor: pointer;
  }
  .btnAdd {
    color: ${palette('primary', 0)};
    cursor: pointer;
    &:hover {
      .iconAdd {
      }
    }
    .iconAdd {
      margin-right: 10px;
    }
  }
`;
