import styled from 'styled-components';

export const BookingPersonInfoStyle = styled.div`
  ul {
    list-style: none;
  }
  li::before {
    content: '•';
    color: #6a69ef;
    display: inline-block;
    width: 1em;
    font-size: 14px;
    margin-left: -1em;
  }
`;
