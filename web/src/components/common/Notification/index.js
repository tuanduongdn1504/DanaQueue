import React from 'react';
import { notification, Button } from 'antd';

export const openNotificationWithIcon = (type, id, link, message) => {
  notification && notification.destroy();
  notification[type]({
    message: <div style={{ color: '#fff' }}>{message}</div>,
    style: { background: '#424256e0' },
    description: (
      <a href={link}>
        {' '}
        <Button type="primary" style={{ width: '100%' }}>
          Xem ngay
        </Button>
      </a>
    )
  });
};
