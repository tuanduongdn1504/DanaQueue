import styled from 'styled-components';
import { Tag } from 'antd';

const TagWrapper = styled(Tag)`
  color: ${props => props.theme && props.theme.color} !important;
`;

export default TagWrapper;
