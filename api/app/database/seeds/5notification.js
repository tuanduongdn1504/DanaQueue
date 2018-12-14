const Models = require('../models');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('notifications')
    .del()
    .then(async () =>
      Models.Notification.query().insertGraph([
        {
          title: 'UBND quận Hải Châu nghỉ làm việc chiều thứ 2 ngày 26/11/2018',
          content:
            'Vì lý do có cuộc họp đột xuất, Sở Tài Chính thông báo cho toàn thể người dân về việc không làm việc vào chiều thứ 6 ngày 30/11/2018, người dân đã lấy số thứ tự và hẹn lịch vào chiều thứ 6 vui lòng sắp xếp vào thời gian khác. Xin cảm ơn.'
        },
        {
          title: 'Sở Gao Thông Vận Tải nghỉ làm việc chiều thứ 4 ngày 28/12/2018',
          content:
            'Vì lý do có cuộc họp đột xuất, Sở Gao Thông Vận Tải thông báo cho toàn thể người dân về việc không làm việc vào chiều thứ 6 ngày 30/11/2018, người dân đã lấy số thứ tự và hẹn lịch vào chiều thứ 6 vui lòng sắp xếp vào thời gian khác. Xin cảm ơn.'
        },
        {
          title: 'Sở Tài Chính nghỉ làm việc chiều thứ 6 ngày 30/11/2018',
          content:
            'Vì lý do có cuộc họp đột xuất, Sở Tài Chính thông báo cho toàn thể người dân về việc không làm việc vào chiều thứ 6 ngày 30/11/2018, người dân đã lấy số thứ tự và hẹn lịch vào chiều thứ 6 vui lòng sắp xếp vào thời gian khác. Xin cảm ơn.'
        }
      ])
    );
