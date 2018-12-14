import styled from 'styled-components';
import { palette } from 'styled-theme';
import { Modal } from 'antd';

const ModalWrapper = styled(Modal)`
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  div::-webkit-scrollbar-thumb,
  textarea::-webkit-scrollbar-thumb {
    border-radius: 3px !important;
    background: ${palette('secondary', 2)} !important;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5) !important;
  }
  div::-webkit-scrollbar-track,
  textarea::-webkit-scrollbar-track {
    background: ${palette('grayscale', 2)} !important;
  }
  div::-webkit-scrollbar-thumb:hover,
  textarea::-webkit-scrollbar-thumb:hover {
    border-radius: 3px !important;
    background: ${palette('secondary', 2)} !important;
    box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5) !important;
  }
  div::-webkit-scrollbar,
  textarea::-webkit-scrollbar {
    width: 6px;
    background: ${palette('grayscale', 2)} !important;
  }
`;

export default ModalWrapper;
