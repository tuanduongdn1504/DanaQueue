const Models = require('../models');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('procedures')
    .del()
    .then(() => knex('procedureInfos').del())
    .then(async () =>
      Models.Procedure.query().insertGraph([
        {
          officeId: 1,
          name: 'Kê khai giá dịch vụ lưu trú du lịch'
        },
        {
          officeId: 1,
          name: 'Cấp Giấy chứng nhận đăng ký mã số đơn vị quan hệ ngân sách cho các dự án đầu tư'
        },
        {
          officeId: 1,
          name:
            'Cấp Giấy chứng nhận đăng ký mã số đơn vị quan hệ với ngân sách cho các đơn vị dự toán, đơn vị sử dụng ngân sách Nhà nước và các đơn vị khác có quan hệ với ngân sách'
        },
        {
          officeId: 1,
          name: 'Thẩm định, phê duyệt kết quả lựa chọn nhà thầu các gói thầu mua sắm thường xuyên'
        },
        {
          officeId: 1,
          name: 'Thẩm định phương án giá hàng hóa, dịch vụ do nhà nước quy định giá '
        },
        {
          officeId: 1,
          name:
            'Thẩm định, phê duyệt dự toán mua sắm, kế hoạch lựa chọn nhà thầu, hồ sơ mời thầu, hồ sơ yêu cầu các gói thầu mua sắm thường xuyên'
        },
        {
          officeId: 1,
          name: 'Thanh lý tài sản nhà nước tại các cơ quan, tổ chức, đơn vị'
        },
        {
          officeId: 1,
          name:
            'Thẩm tra dự toán thiết bị thuộc các dự án đầu tư xây dựng công trình sử dụng nguồn vốn đầu tư công'
        },
        {
          officeId: 2,
          name: 'Cấp lại Giấy chứng nhận huấn luyện kỹ thuật an toàn vật liệu nổ công nghiệp'
        },
        {
          officeId: 2,
          name: 'Cấp lại Giấy phép kinh doanh cho tổ chức kinh tế có vốn đầu tư nước ngoài'
        },
        {
          officeId: 2,
          name: 'Điều chỉnh Giấy phép kinh doanh cho tổ chức kinh tế có vốn đầu tư nước ngoài'
        },
        {
          officeId: 2,
          name:
            'Cấp Giấy phép kinh doanh cho tổ chức kinh tế có vốn đầu tư nước ngoài để thực hiện các dịch vụ quy định tại các điểm d, đ, e, g, h, i Khoản 1 Điều 5 Nghị định số 09/2018/NĐ-CP'
        },
        {
          officeId: 2,
          name: 'Cấp lại, điều chỉnh Giấy chứng nhận đủ điều kiện trạm nạp LPG vào chai, xe bồn'
        },
        {
          officeId: 2,
          name: 'Cấp Giấy chứng nhận đủ điều kiện trạm nạp LPG vào chai, xe bồn'
        },
        {
          officeId: 2,
          name: 'Cấp lại Giấy chứng nhận huấn luyện kỹ thuật an toàn tiền chất thuốc nổ'
        },
        {
          officeId: 2,
          name: 'Thẩm định thiết kế cơ sở công trình mỏ khoáng sản'
        },
        {
          officeId: 3,
          name: 'Cấp giấy phép xe tập lái Mức 3'
        },
        {
          officeId: 3,
          name: 'Cấp giấy phép lái xe quốc tế - IDP'
        },
        {
          officeId: 3,
          name:
            'Trình thẩm định Hồ sơ Thiết kế kỹ thuật (công trình thiết kế ba bước) hoặc hồ sơ Thiết kế Bản vẽ thi công (công trình thiết kế hai bước)'
        },
        {
          officeId: 3,
          name: 'Thẩm định, phê duyệt Hồ sơ Báo cáo kinh tế kỹ thuật'
        },
        {
          officeId: 3,
          name: 'Cấp giấy phép thi công lắp đặt bảng quảng cáo trong phạm vi đất dành cho đường bộ'
        },
        {
          officeId: 3,
          name: 'Đổi giấy phép lái xe quân sự do bộ quốc phòng cấp'
        },
        {
          officeId: 4,
          name: 'Đổi giấy phép lái xe do ngành công an cấp'
        },
        {
          officeId: 4,
          name:
            'Thẩm định, phê duyệt quy hoạch chi tiết xây dựng (Đối với quy hoạch hạ tầng kỹ thuật)'
        },
        {
          officeId: 4,
          name: 'Thông báo nhà ở hình thành trong tương lai đủ điều kiện được bán, cho thuê mua'
        },
        {
          officeId: 4,
          name: 'Cấp phép xây dựng công trình hạ tầng kỹ thuật'
        },
        {
          officeId: 4,
          name: 'Thẩm định thiết kế cơ sở các dự án đầu tư xây dựng công trình'
        },
        {
          officeId: 4,
          name: 'Thẩm định dự án đầu tư xây dựng công trình'
        },
        {
          officeId: 4,
          name: 'Thẩm định báo cáo kinh tế kỹ thuật đầu tư xây dựng công trình'
        },
        {
          officeId: 4,
          name: 'Thẩm định thiết kế đối với các công trình sử dụng vốn khác (vốn tư nhân)'
        },
        {
          officeId: 5,
          name:
            'Thông báo mở lớp bồi dưỡng về tôn giáo theo quy định tại khoản 2 Điều 41 Luật tín ngưỡng, tôn giáo'
        },
        {
          officeId: 5,
          name:
            'Giải quyết chính sách đối với Anh hùng Lực lượng vũ trang, Anh hùng Lao động trong kháng chiến'
        },
        {
          officeId: 5,
          name:
            'Giải quyết hồ sơ tiếp nhận người có công cách mạng vào Trung tâm phụng dưỡng người có công cách mạng'
        },
        {
          officeId: 5,
          name: 'Giải quyết hồ sơ mới công nhận người đảm nhận thờ cúng liệt sỹ'
        },
        {
          officeId: 5,
          name: 'Cấp mới thẻ bảo hiểm y tế đối với người có công với cách mạng'
        },
        {
          officeId: 5,
          name:
            'Giải quyết chế độ mai táng phí và trợ cấp 1 lần đối với người có công cách mạng từ trần'
        },
        {
          officeId: 5,
          name:
            'Xác nhận đề nghị Chế độ mai táng phí đối với Cựu chiến binh theo Nghị định số 150/2006/NĐ-CP'
        },
        {
          officeId: 6,
          name:
            'Thông báo mở lớp bồi dưỡng về tôn giáo theo quy định tại khoản 2 Điều 41 Luật tín ngưỡng, tôn giáo'
        },
        {
          officeId: 6,
          name:
            'Giải quyết chính sách đối với Anh hùng Lực lượng vũ trang, Anh hùng Lao động trong kháng chiến'
        },
        {
          officeId: 6,
          name:
            'Giải quyết hồ sơ tiếp nhận người có công cách mạng vào Trung tâm phụng dưỡng người có công cách mạng'
        },
        {
          officeId: 6,
          name: 'Giải quyết hồ sơ mới công nhận người đảm nhận thờ cúng liệt sỹ'
        },
        {
          officeId: 6,
          name: 'Cấp mới thẻ bảo hiểm y tế đối với người có công với cách mạng'
        },
        {
          officeId: 6,
          name:
            'Giải quyết chế độ mai táng phí và trợ cấp 1 lần đối với người có công cách mạng từ trần'
        },
        {
          officeId: 6,
          name:
            'Xác nhận đề nghị Chế độ mai táng phí đối với Cựu chiến binh theo Nghị định số 150/2006/NĐ-CP'
        },
        {
          officeId: 7,
          name:
            'Thông báo mở lớp bồi dưỡng về tôn giáo theo quy định tại khoản 2 Điều 41 Luật tín ngưỡng, tôn giáo'
        },
        {
          officeId: 7,
          name:
            'Giải quyết chính sách đối với Anh hùng Lực lượng vũ trang, Anh hùng Lao động trong kháng chiến'
        },
        {
          officeId: 7,
          name:
            'Giải quyết hồ sơ tiếp nhận người có công cách mạng vào Trung tâm phụng dưỡng người có công cách mạng'
        },
        {
          officeId: 7,
          name: 'Giải quyết hồ sơ mới công nhận người đảm nhận thờ cúng liệt sỹ'
        },
        {
          officeId: 7,
          name: 'Cấp mới thẻ bảo hiểm y tế đối với người có công với cách mạng'
        },
        {
          officeId: 7,
          name:
            'Giải quyết chế độ mai táng phí và trợ cấp 1 lần đối với người có công cách mạng từ trần'
        },
        {
          officeId: 7,
          name:
            'Xác nhận đề nghị Chế độ mai táng phí đối với Cựu chiến binh theo Nghị định số 150/2006/NĐ-CP'
        },
        {
          officeId: 8,
          name:
            'Thông báo tổ chức quyên góp trong địa bàn một xã của cơ sở tín ngưỡng, tổ chức tôn giáo, tổ chức tôn giáo trực thuộc'
        },
        {
          officeId: 8,
          name: 'Thông báo về việc thay đổi địa điểm sinh hoạt tôn giáo tập trung'
        },
        {
          officeId: 8,
          name: 'Đề nghị thay đổi địa điểm sinh hoạt tôn giáo tập trung đến địa bàn xã khác'
        },
        {
          officeId: 8,
          name: 'Đề nghị thay đổi địa điểm sinh hoạt tôn giáo tập trung trong địa bàn một xã'
        },
        {
          officeId: 8,
          name: 'Đăng ký thay đổi người đại diện của nhóm sinh hoạt tôn giáo tập trung'
        },
        {
          officeId: 8,
          name:
            'Thông báo danh mục hoạt động tôn giáo bổ sung đối với tổ chức có địa bàn hoạt động tôn giáo ở một xã'
        },
        {
          officeId: 8,
          name:
            'Thông báo danh mục hoạt động tôn giáo đối với tổ chức có địa bàn hoạt động tôn giáo ở một xã'
        },
        {
          officeId: 9,
          name:
            'Thông báo tổ chức quyên góp trong địa bàn một xã của cơ sở tín ngưỡng, tổ chức tôn giáo, tổ chức tôn giáo trực thuộc'
        },
        {
          officeId: 9,
          name: 'Thông báo về việc thay đổi địa điểm sinh hoạt tôn giáo tập trung'
        },
        {
          officeId: 9,
          name: 'Đề nghị thay đổi địa điểm sinh hoạt tôn giáo tập trung đến địa bàn xã khác'
        },
        {
          officeId: 9,
          name: 'Đề nghị thay đổi địa điểm sinh hoạt tôn giáo tập trung trong địa bàn một xã'
        },
        {
          officeId: 9,
          name: 'Đăng ký thay đổi người đại diện của nhóm sinh hoạt tôn giáo tập trung'
        },
        {
          officeId: 9,
          name:
            'Thông báo danh mục hoạt động tôn giáo bổ sung đối với tổ chức có địa bàn hoạt động tôn giáo ở một xã'
        },
        {
          officeId: 9,
          name:
            'Thông báo danh mục hoạt động tôn giáo đối với tổ chức có địa bàn hoạt động tôn giáo ở một xã'
        },
        {
          officeId: 10,
          name:
            'Thông báo tổ chức quyên góp trong địa bàn một xã của cơ sở tín ngưỡng, tổ chức tôn giáo, tổ chức tôn giáo trực thuộc'
        },
        {
          officeId: 10,
          name: 'Thông báo về việc thay đổi địa điểm sinh hoạt tôn giáo tập trung'
        },
        {
          officeId: 10,
          name: 'Đề nghị thay đổi địa điểm sinh hoạt tôn giáo tập trung đến địa bàn xã khác'
        },
        {
          officeId: 10,
          name: 'Đề nghị thay đổi địa điểm sinh hoạt tôn giáo tập trung trong địa bàn một xã'
        },
        {
          officeId: 10,
          name: 'Đăng ký thay đổi người đại diện của nhóm sinh hoạt tôn giáo tập trung'
        },
        {
          officeId: 10,
          name:
            'Thông báo danh mục hoạt động tôn giáo bổ sung đối với tổ chức có địa bàn hoạt động tôn giáo ở một xã'
        },
        {
          officeId: 10,
          name:
            'Thông báo danh mục hoạt động tôn giáo đối với tổ chức có địa bàn hoạt động tôn giáo ở một xã'
        },
        {
          officeId: 11,
          name: 'Đề nghị tham vấn áp dụng APA trước khi nộp hồ sơ chính thức'
        },
        {
          officeId: 11,
          name: 'Đề nghị áp dụng APA chính thức'
        },
        {
          officeId: 11,
          name: 'Rút đơn và dừng đàm phán APA'
        },
        {
          officeId: 12,
          name: 'Thủ tục hải quan đối với hàng hóa nhập khẩu'
        },
        {
          officeId: 12,
          name:
            'Thủ tục hải quan đối với hàng hoá nhập khẩu tạo tài sản cố định của các dự án đầu tư'
        },
        {
          officeId: 12,
          name: 'Thủ tục hải quan nhập khẩu nguyên liệu, vật tư để sản xuất hàng xuất khẩu'
        },
        {
          officeId: 12,
          name: 'Thủ tục hải quan đối với xăng dầu cung ứng xuất khẩu, tái xuất cho máy bay'
        },
        {
          officeId: 12,
          name: 'Thủ tục hải quan đối với hàng hoá kinh doanh tạm nhập-tái xuất'
        },
        {
          officeId: 13,
          name: 'Cấp giấy xác nhận nhân sự của công dân Việt Nam ở nước ngoài'
        },
        {
          officeId: 13,
          name: 'Cấp giấy xác nhận nhân sự của công dân Việt Nam ở nước ngoài'
        },
        {
          officeId: 13,
          name: 'Hủy bỏ đăng ký tạm trú trái pháp luật tại Công an cấp xã'
        },
        {
          officeId: 13,
          name: 'Gia hạn tạm trú tại Công an cấp xã'
        },
        {
          officeId: 13,
          name: '	Tuyển sinh vào các trường Công an nhân dân tại Công an cấp tỉnh'
        }
      ])
    )
    .then(async procedureInfos =>
      Models.ProcedureInfo.query().insertGraph([
        {
          procedureId: procedureInfos[0].id,
          making: `1. Trực tuyến qua website của Sở Tài chính.\n2. Trường hợp có khó khăn trong việc lập hồ sơ trực tuyến (không có máy tính, máy scan, đường truyền không ổn định,...) thì có thể nộp hồ sơ trực tiếp đến Tổ tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Tổ chức, cá nhân kinh doanh lưu trú du lịch lập văn bản kê khai giá (theo mẫu quy định tại Thông tư số 233/2016/TT-BTC) gửi đến Sở Tài chính.\nBước 2: Trong thời hạn 02 ngày làm việc, trường hợp Sở Tài chính có ý kiến đề nghị giải trình về mức giá kê khai thì tổ chức, cá nhân phải có văn bản giải trình.\nSau 02 ngày làm việc kể từ ngày tiếp nhận văn bản kê khai giá hoặc văn bản giải trình, Sở Tài chính không có ý kiến thì tổ chức, cá nhân được thực hiện theo mức giá đã kê khai hoặc mức giá kê khai điều chỉnh.`,
          records: `1. Văn bản kê khai giá dịch vụ lưu trú du lịch và Bảng kê khai mức giá;\n2. Trường hợp lần đầu thực hiện kê khai giá với cơ quan quản lý nhà nước về giá đối với sản phẩm mới thì gửi kèm theo Bảng xây dựng hình thành mức giá dịch vụ.`
        },
        {
          procedureId: procedureInfos[1].id,
          making: `1. Trực tuyến qua Hệ thống dịch vụ công trực tuyến cấp mã số mức độ 4 của Bộ Tài chính: http://mstt.mof.gov.vn.\n2. Trường hợp có khó khăn về việc lập hồ sơ trực tuyến (không có máy tính, không thể scan hồ sơ, tài liệu...) thì tổ chức có thể nộp hồ sơ cấp Giấy chứng nhận đăng ký mã số công trình XDCB gửi trực tiếp đến Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Tổ chức, cơ quan, đơn vị hoàn thiện hồ sơ, biểu mẫu, kê khai đầy đủ trong Tờ khai đăng ký mã số theo quy định tại Thông tư 185/2015/TT-BTC ngày 17/11/2015 của Bộ Tài chính về hướng dẫn đăng ký, cấp và sử dụng mã số đơn vị có quan hệ với ngân sách về mã số các đơn vị có quan hệ với ngân sách.\nBước 2: Sở Tài chính tiếp nhận hồ sơ; kiểm tra các thông tin trên Tờ khai và tính đầy đủ của các hồ sơ; liên hệ với đơn vị để bổ sung, sửa đổi (nếu còn thiếu); lập thủ tục cấp Giấy chứng nhận đăng ký mã số công trình XDCB.\nBước 3: Vào sổ theo dõi và gửi Giấy chứng nhận đăng ký mã số đơn vị có quan hệ với ngân sách qua Hệ thống dịch vụ công trực tuyến cấp mã số mức độ 4 hoặc trả trực tiếp cho các tổ chức, cơ quan, đơn vị qua Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          records: `+ Trường hợp 1: Đăng ký mã số đơn vị có quan hệ với ngân sách cho các dự án đầu tư giai đoạn chuẩn bị đầu tư.\n1. Tờ khai đăng ký mã số ĐVQHNS dùng cho các dự án đầu tư giai đoạn chuẩn bị đầu tư theo mẫu số 02-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC.\n2. Bản sao hợp lệ Quyết định hoặc Văn bản thông báo của cấp có thẩm quyền phê duyệt chủ trương đầu tư dự án.\n+ Trường hợp 2: Đăng ký mã số đơn vị có quan hệ với ngân sách cho các dự án đầu tư giai đoạn thực hiện dự án.\n1. Tờ khai đăng ký mã số ĐVQHNS dùng cho các dự án đầu tư giai đoạn thực hiện dự án theo mẫu số 03-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC.\n2. Bản sao hợp lệ một trong các giấy tờ sau đây:\n- Quyết định đầu tư dự án;\n- Quyết định phê duyệt báo cáo kinh tế - kỹ thuật đối với các dự án chỉ lập báo cáo kinh tế - kỹ thuật;\n- Các quyết định điều chỉnh dự án (nếu có).\n+ Trường hợp 3: Đăng ký bổ sung thông tin chuyển giai đoạn dự án đầu tư.\n1. Thông báo chuyển giai đoạn dự án đầu tư theo mẫu số 04-MSNS-BTC tại Phụ lục kèm theo Thông tư s\n- Quyết định đầu tư dự án;\n- Quyết định phê duyệt báo cáo kinh tế - kỹ thuật đối với các dự án chỉ lập báo cáo kinh tế - kỹ thuật;\n- Các quyết định điều chỉnh dự án (nếu có).\n+ Trường hợp 4: Đăng ký thay đổi thông tin về mã số đơn vị có quan hệ với ngân sách.\n1. Trường hợp đơn vị có quan hệ với ngân sách nếu có thay đổi các chỉ tiêu đăng ký mã số ĐVQHNS như tên đơn vị, tên dự án, tên chủ đầu tư, địa chỉ đơn vị, địa chỉ chủ đầu tư, tên cơ quan chủ quản cấp trên thì đơn vị gửi Thông báo đến Sở Tài chính. Nội dung Thông báo thực hiện theo Mẫu số 06-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC.`
        },
        {
          procedureId: procedureInfos[2].id,
          making: `1. Trực tuyến qua Hệ thống dịch vụ công trực tuyến cấp mã số mức độ 4 của Bộ Tài chính: http://mstt.mof.gov.vn.\n2. Trường hợp có khó khăn về việc lập hồ sơ trực tuyến (không có máy tính, không thể scan hồ sơ, tài liệu...) thì tổ chức có thể nộp hồ sơ cấp Giấy chứng nhận đăng ký mã số công trình XDCB gửi trực tiếp đến Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Tổ chức, cơ quan, đơn vị hoàn thiện hồ sơ, biểu mẫu, kê khai đầy đủ trong Tờ khai đăng ký mã số theo quy định tại Thông tư 185/2015/TT-BTC ngày 17/11/2015 của Bộ Tài chính về hướng dẫn đăng ký, cấp và sử dụng mã số đơn vị có quan hệ với ngân sách về mã số các đơn vị có quan hệ với ngân sách.\nBước 2: Sở Tài chính tiếp nhận hồ sơ; kiểm tra các thông tin trên Tờ khai và tính đầy đủ của các hồ sơ; liên hệ với đơn vị để bổ sung, sửa đổi (nếu còn thiếu); lập thủ tục cấp Giấy chứng nhận đăng ký mã số đơn vị có quan hệ với ngân sách.\nBước 3: Vào sổ theo dõi và gửi Giấy chứng nhận đăng ký mã số đơn vị có quan hệ với ngân sách điện tử qua Hệ thống dịch vụ công trực tuyến cấp mã số mức độ 4 hoặc trả trực tiếp cho các tổ chức, cơ quan, đơn vị qua Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          records: `+ Trường hợp 1: Đăng ký mã số đơn vị có quan hệ với ngân sách cho các đơn vị dự toán, đơn vị sử dụng ngân sách nhà nước\n1. Tờ khai đăng ký mã số ĐVQHNS dùng cho đơn vị dự toán, đơn vị sử dụng ngân sách Nhà nước, đơn vị khác có quan hệ với ngân sách theo mẫu số 01-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC.\n2. Bảng thống kê đơn vị đề nghị cấp mã số ĐVQHNS (dùng cho đơn vị sử dụng ngân sách, đơn vị dự toán) theo mẫu số 07-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC được xác nhận thông tin bởi cơ quan chủ quản hoặc bản sao hợp lệ văn bản thành lập đơn vị.\n+ Trường hợp 2: Đăng ký mã số đơn vị có quan hệ với ngân sách cho các đơn vị khác có quan hệ với ngân sách.\n1. Tờ khai đăng ký mã số ĐVQHNS dùng cho đơn vị dự toán, đơn vị sử dụng ngân sách Nhà nước, đơn vị khác có quan hệ với ngân sách theo mẫu số 01-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC.\n2. Bản sao hợp lệ các giấy tờ sau đây:\n- Văn bản thành lập đơn vị;\n- Các văn bản của cơ quan Nhà nước có thẩm quyền giao nhiệm vụ, kinh phí cho đơn vị.\n+ Trường hợp 3: Đăng ký thay đổi thông tin về mã số đơn vị có quan hệ với ngân sách.\n1. Trường hợp đơn vị có quan hệ với ngân sách nếu có thay đổi các chỉ tiêu đăng ký mã số ĐVQHNS như tên đơn vị, địa chỉ đơn vị, tên cơ quan chủ quản cấp trên thì đơn vị gửi Thông báo đến Sở Tài chính. Nội dung Thông báo thực hiện theo Mẫu số 06-MSNS-BTC tại Phụ lục kèm theo Thông tư số 185/2015/TT-BTC.`
        },
        {
          procedureId: procedureInfos[3].id,
          making: `Nộp hồ sơ và nhận kết quả tại Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính`,
          sequence: `Bước 1: Cơ quan, tổ chức, đơn vị lập hồ sơ gửi Sở Tài chính qua Bộ phận tiếp nhận hồ sơ và trả kết quả.\nBước 2: Sở Tài chính kiểm tra, chuyển hồ sơ đã giải quyết cho Bộ phận tiếp nhận hồ sơ và trả kết quả của Sở.\nBước 3: Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính trả kết quả cho cơ quan, tổ chức, đơn vị.`,
          records: `1. Tờ trình thẩm định dự toán thiết bị thuộc dự án đầu tư xây dựng công trình sử dụng nguồn vốn đầu tư công.\n2. Hồ sơ dự toán thiết bị và các hồ sơ bản vẽ thiết kế thi công, lắp đặt, thuyết minh, chỉ dẫn kỹ thuật, hình ảnh minh họa thiết bị (nếu có).\n3. Quyết định phê duyệt dự án hoặc Báo cáo kinh tế kỹ thuật (kèm theo chi tiết tổng mức đầu tư được duyệt).\n4. Chứng thư và Báo cáo kết quả thẩm định giá của doanh nghiệp có chức năng cung cấp dịch vụ thẩm định giá.\n5. Chứng nhận hành nghề, năng lực của doanh nghiệp thẩm định giá, hợp đồng và thanh lý hợp đồng thẩm định giá.`
        },
        {
          procedureId: procedureInfos[4].id,
          making: `Tổ chức có nộp hồ sơ gửi trực tiếp đến Tổ tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Cơ quan, tổ chức, đơn vị lập hồ sơ gửi Sở Tài chính qua Tổ Tiếp nhận hồ sơ và trả kết quả.\nBước 2: Sở Tài chính kiểm tra, chuyển hồ sơ đã giải quyết cho Tổ Tiếp nhận hồ sơ và trả kết quả của Sở.\nBước 3: Tổ tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính trả kết quả cho cơ quan, tổ chức, đơn vị.`,
          records: `1. Công văn đề nghị định giá, điều chỉnh giá theo mẫu quy định tại Phụ lục số 2a ban hành kèm Thông tư số 56/2014/TT-BTC;\n2. Phương án giá thực hiện theo mẫu quy định tại Phụ lục số 2a ban hành kèm Thông tư số 56/2014/TT-BTC. Nội dung Phương án giá được quy định chi tiết tại Khoản 3 và Khoản 4, Điều 9 Thông tư số 56/2014/TT-BTC;\n3. Văn bản tổng hợp ý kiến tham gia của các cơ quan liên quan, đính kèm bản sao ý kiến của các cơ quan theo quy định (nếu có);
          4. Các tài liệu khác có liên quan.`
        },
        {
          procedureId: procedureInfos[5].id,
          making: `Nộp hồ sơ và nhận kết quả tại Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Cơ quan, tổ chức, đơn vị lập hồ sơ gửi Sở Tài chính qua Bộ phận tiếp nhận hồ sơ và trả kết quả.\nBước 2: Sở Tài chính kiểm tra, chuyển hồ sơ đã giải quyết cho Bộ phận tiếp nhận hồ sơ và trả kết quả của Sở; hoặc liên thông trình UBND thành phố phê duyệt đối với những hồ sơ thuộc thẩm quyền phê duyệt của UBND thành phố và nhận kết quả (văn bản phê duyệt của UBND thành phố) tại Bộ phận tiếp nhận hồ sơ và trả kết quả của Văn phòng UBND thành phố.\nBước 3: Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính trả kết quả cho cơ quan, tổ chức, đơn vị.`,
          records: `1. Tờ trình đề nghị phê duyệt kết quả lựa chọn nhà thầu;\n2. Báo cáo kết quả đánh giá hồ sơ dự thầu, hồ sơ đề xuất của Tổ chuyên gia;\n3. Biên bản thương thảo hợp đồng;\n4. Bản chụp các hồ sơ, tài liệu: Hồ sơ mời thầu, hồ sơ yêu cầu, biên bản đóng thầu, mở thầu, hồ sơ dự thầu, hồ sơ đề xuất của các nhà thầu và những tài liệu khác có liên quan; trường hợp đã tiến hành thẩm định danh sách nhà thầu đáp ứng yêu cầu về kỹ thuật thì chỉ gửi biên bản mở hồ sơ đề xuất về tài chính và bản chụp hồ sơ đề xuất về tài chính của các nhà thầu đáp ứng yêu cầu về kỹ thuật.`
        },
        {
          procedureId: procedureInfos[6].id,
          making: `Nộp hồ sơ và nhận kết quả tại Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Cơ quan, tổ chức, đơn vị lập hồ sơ gửi Sở Tài chính qua Bộ phận tiếp nhận hồ sơ và trả kết quả.\nBước 2: Sở Tài chính kiểm tra, chuyển hồ sơ đã giải quyết cho Bộ phận tiếp nhận hồ sơ và trả kết quả của Sở; hoặc liên thông trình UBND thành phố phê duyệt đối với những hồ sơ thuộc thẩm quyền phê duyệt của UBND thành phố và nhận kết quả (văn bản phê duyệt của UBND thành phố) tại Bộ phận tiếp nhận hồ sơ và trả kết quả của Văn phòng UBND thành phố.\nBước 3: Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính trả kết quả cho cơ quan, tổ chức, đơn vị.`,
          records: `1. Tờ trình đề nghị phê duyệt dự toán mua sắm, kế hoạch lựa chọn nhà thầu, hồ sơ mời thầu, hồ sơ yêu cầu;\n2. Dự thảo hồ sơ mời thầu, hồ sơ yêu cầu;\n3. Chứng thư và Báo cáo kết quả thẩm định giá của cơ quan, tổ chức có chức năng hoặc nhiệm vụ cung cấp dịch vụ thẩm định giá.\n4. Văn bản chủ trương, nguồn kinh phí mua sắm và các hồ sơ, tài liệu khác có liên quan.`
        },
        {
          procedureId: procedureInfos[7].id,
          making: `1. Trực tuyến qua website của Sở Tài chính.
          2. Trường hợp có khó khăn trong việc lập hồ sơ trực tuyến (không có máy tính, máy scan, đường truyền không ổn định,...) thì có thể nộp hồ sơ trực tiếp đến Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính.`,
          sequence: `Bước 1: Cơ quan, tổ chức, đơn vị lập hồ sơ gửi Sở Tài chính qua Bộ phận tiếp nhận hồ sơ và trả kết quả.\nBước 2: Sở Tài chính kiểm tra, chuyển hồ sơ đã giải quyết cho Bộ phận tiếp nhận hồ sơ và trả kết quả của Sở; hoặc liên thông trình UBND thành phố phê duyệt đối với những hồ sơ thuộc thẩm quyền phê duyệt của UBND thành phố và nhận kết quả (văn bản phê duyệt của UBND thành phố) tại Bộ phận tiếp nhận hồ sơ và trả kết quả của Văn phòng UBND thành phố.\nBước 3: Bộ phận tiếp nhận hồ sơ và trả kết quả thuộc Sở Tài chính trả kết quả cho cơ quan, tổ chức, đơn vị.`,
          records: `1. Văn bản đề nghị thanh lý tài sản nhà nước;\n2. Danh mục tài sản đề nghị thanh lý (được lập theo quy định tại Thông tư số 09/2012/TT-BTC);\n3. Đối với các loại tài sản mà pháp luật có quy định khi thanh lý cần có ý kiến xác nhận chất lượng tài sản của cơ quan chuyên môn thì phải gửi kèm ý kiến bằng văn bản của các cơ quan này.`
        },
        {
          procedureId: procedureInfos[8].id,
          making: `- Hồ sơ được nộp trực tuyến dịch vụ công mức độ 3 hoặc nộp trực tiếp tại Tổ tiếp nhận và trả kết quả Sở Giao thông vận tải thành phố Đà Nẵng.
          \n- Hồ sơ được trả kết quả trực tiếp tại Tổ tiếp nhận và trả kết quả Sở Giao thông vận tải thành phố Đà Nẵng hoặc qua dịch vụ bưu chính công ích.`,
          sequence: `+ Trường hợp 1. Cấp mới giấy phép xe tập lái
          \nBước 1: Tổ chức gửi danh sách xe đề nghị cấp giấy phép xe tập lái theo mẫu quy định tại phụ lục VIII của Nghị định 65/2016/NĐ-CP  ngày 01/7/2016 của Chính phủ kèm hồ sơ đề nghị cấp giấy phép đào tạo lái xe trực tiếp hoặc qua đường bưu điện đến Sở Giao thông vận tải.
          \nBước 2: Sở Giao thông vận tải tổ chức kiểm tra cấp giấy phép xe tập lái cho tổ chức đề nghị cấp phép tại thời điểm kiểm tra cấp giấy phép đào tạo lái xe;
          \nBước 3: Trong thời hạn không quá 01 ngày làm việc, kể từ ngày cấp giấy phép đào tạo lái xe cho cơ sở đào tạo, Sở Giao thông vận tải cấp giấy phép xe tập lái. Trường hợp không cấp, phải trả lời bằng văn bản và nêu rõ lý do.
          \n+ Trường hợp 2. Cấp lại giấy phép xe tập lái hoặc bổ sung xe tập lái
          \nBước 1: Cơ sở đào tạo lập 01 bộ hồ sơ, gửi trực tiếp; hồ sơ dịch vụ công mức độ 3 hoặc qua đường bưu điện đến Sở Giao thông vận tải.
          \nBước 2: Trong thời hạn không quá 03 ngày làm việc, kể từ ngày nhận đủ hồ sơ theo quy định, Sở Giao thông vận tải tổ chức kiểm tra, cấp giấy phép xe tập lái cho cơ sở đào tạo. Trường hợp không cấp, phải trả lời bằng văn bản và nêu rõ lý do.`,
          records: `1. Danh sách xe đề nghị cấp giấy phép xe tập lái
          \n2. Giấy đăng ký xe (bản sao kèm bản chính để đối chiếu hoặc bản sao có chứng thực).`
        },
        {
          procedureId: procedureInfos[9].id,
          making: `- Đăng ký cấp đổi GPLX quốc tế qua mạng: Người đăng ký truy cập vào hệ thống đăng ký dịch vụ công cấp đổi GPLX trực tuyến của Tổng cục Đường bộ Việt Nam tại địa chỉ http://dichvucong.gplx.gov.vn:8000;
          \n- Cấp đổi GPLX quốc tế trực tiếp: Cá nhân đến trực tiếp nộp đơn đề nghị cấp GPLX quốc tế tại Tổ tiếp nhận và trả kết quả Sở Giao thông vận tải thành phố Đà Nẵng.
          \n- Hồ sơ được trả kết quả trực tiếp tại Tổ tiếp nhận và trả kết quả Sở Giao thông vận tải thành phố Đà Nẵng hoặc qua dịch vụ bưu chính công ích.`,
          sequence: `Bước 1: Cá nhân, tổ chức hoàn thiện hồ sơ theo hướng dẫn của thủ tục này và nộp hồ sơ tại Sở GTVT.
          \nBước 2: Bộ phận một cửa tiếp nhận hồ sơ để giải quyết thủ tục hành chính, kiểm tra tính chính xác và hợp lệ của đơn và hồ sơ. Trong thời hạn không quá 05 ngày làm việc, kể từ ngày nhận được đơn đề nghị cấp IDP, Sở Giao thông vận tải thực hiện việc cấp IDP cho cá nhân.`,
          records: `1. Đơn đề nghị cấp giấy phép lái xe quốc tế theo mẫu quy định.
          \n2. Bản sao chụp giấy phép lái xe PET, hộ chiếu, thẻ thường trú (đối với người nước ngoài) còn giá trị sử dụng.`
        },
        {
          procedureId: procedureInfos[10].id,
          making: `Gửi qua đường bưu điện hoặc nộp trực tiếp tại Bộ phận tiếp nhận hồ sơ và trả kết quả Sở Y tế thành phố Đà Nẵng.`,
          sequence: `Bước 1: Trước khi chính thức hoạt động ít nhất là 10 ngày làm việc, tổ chức tư vấn phải gửi hồ sơ đăng ký hoạt động đến Sở Y tế.
          \nBước 2: Sở Y tế tiếp nhận hồ sơ thông báo hoạt động của tổ tư vấn về phòng, chống HIV/AIDS.`,
          records: `1. Văn bản thông báo thành lập tổ chức tư vấn về phòng, chống HIV/AIDS theo mẫu ban hành kèm theo Thông tư số 06/2012/TT-BYT;
          \n2. Dự thảo Quy chế (nội quy chi tiết) hoạt động của tổ chức tư vấn về phòng, chống HIV/AIDS;
          \n3. Danh sách cán bộ, trình độ chuyên môn kèm theo bản sao có chứng thực bằng cấp về trình độ chuyên môn của nhân viên tư vấn;
          \n4. Bản kê khai phương tiện công nghệ thông tin, viễn thông phục vụ hoạt động tư vấn (chỉ áp dụng đối với tổ chức tư vấn qua các phương tiện công nghệ thông tin viễn thông).`
        },
        {
          procedureId: procedureInfos[11].id,
          making: `Nộp trực tiếp tại Bộ phận tiếp nhận hồ sơ và trả kết quả Sở Y tế thành phố Đà Nẵng hoặc gửi hồ sơ công bố (theo định dạng PDF) về hòm thư điện tử của Sở Y tế.`,
          sequence: `Bước 1: Cơ sở điều trị thực hiện việc công bố đủ điều kiện điều trị nghiện chất dạng thuốc phiện gửi hồ sơ theo một trong hai phương thức sau:
          \na) Gửi bản gốc hồ sơ công bố đủ điều kiện điều trị nghiện chất dạng thuốc phiện về Sở Y tế để công bố trên cổng thông tin điện tử của Sở Y tế;
          \nb) Gửi hồ sơ công bố về Sở Y tế để công bố trên cổng thông tin điện tử của Sở Y tế. Trường hợp gửi hồ sơ công bố đủ điều kiện điều trị nghiện chất dạng thuốc phiện bằng phương thức điện tử, cơ sở điều trị có trách nhiệm lưu giữ toàn bộ bản gốc của hồ sơ và chịu trách nhiệm trước pháp luật về tính chính xác, trung thực của hồ sơ.
          \nBước 2: Khi tiếp nhận hồ sơ công bố của cơ sở điều trị, Sở Y tế có trách nhiệm cấp Phiếu tiếp nhận hồ sơ công bố đủ điều kiện điều trị nghiện chất dạng thuốc phiện cho cơ sở điều trị theo Mẫu số 08 quy định tại Phụ lục ban hành kèm theo Nghị định số 90/2016/NĐ-CP. Trường hợp hồ sơ không đáp ứng các quy định, Sở Y tế có văn bản gửi cho cơ sở điều trị đề nghị bổ sung, hoàn thiện hồ sơ công bố.
          \nBước 3: Trường hợp hồ sơ công bố đầy đủ, hợp lệ, trong thời hạn 05 ngày làm việc, kể từ ngày ghi trên Phiếu tiếp nhận hồ sơ (thời điểm tiếp nhận hồ sơ được tính theo dấu tiếp nhận công văn đến của Sở Y tế), Sở Y tế có trách nhiệm kiểm tra hồ sơ và công khai trên trang thông tin điện tử của Sở Y tế các thông tin sau: Tên, địa chỉ, số điện thoại liên hệ và toàn văn hồ sơ công bố của cơ sở điều trị.`,
          records: `1. Đơn đề nghị công bố đủ điều kiện điều trị nghiện chất dạng thuốc phiện bằng thuốc thay thế theo Mẫu số 05 quy định tại Phụ lục ban hành kèm theo Nghị định số 90/2016/NĐ-CP;
          \n2. Bản sao quyết định thành lập của cơ quan nhà nước có thẩm quyền hoặc bản sao giấy chứng nhận đầu tư hoặc bản sao giấy chứng nhận đăng ký doanh nghiệp hoặc tài liệu tương đương khác của cơ sở;
          \n3. Danh sách nhân sự theo Mẫu số 06 quy định tại Phụ lục ban hành kèm theo Nghị định số 90/2016/NĐ-CP và kèm theo bản sao văn bằng chuyên môn của từng nhân viên;
          \n4. Bản kê khai trang thiết bị của cơ sở điều trị theo Mẫu số 07 quy định tại Phụ lục ban hành kèm theo Nghị định số 90/2016/NĐ-CP;
          \n5. Sơ đồ mặt bằng của cơ sở điều trị.`
        }
      ])
    );
