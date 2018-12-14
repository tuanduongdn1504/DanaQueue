import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .reportData {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .widget-wrapper {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
  }
  .bookings {
    margin-top: 40px;
    .newBookings {
      .box {
        box-shadow: unset;
      }
    }
  }

  .alertWrapper {
    margin-bottom: 20px;
  }

  .action-button {
    margin-top: 20px;
  }

  .flex-wrapper {
    display: flex;
  }
`;
