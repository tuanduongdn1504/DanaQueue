import styled from 'styled-components';
import { palette } from 'styled-theme';

export const PageTitle = styled('span')`
  font-size: 19px;
  color: ${palette('secondary', 2)};
  &:hover {
    color: ${palette('primary', 0)};
  }
`;
