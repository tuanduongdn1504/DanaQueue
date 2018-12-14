const Models = require('../models');

exports.seed = knex =>
  // Deletes ALL existing entries
  knex('officeTypes')
    .del()
    .then(() => knex('offices').del())
    .then(async () =>
      Models.OfficeType.query().insertGraph([
        {
          name: 'Sở, ngành thuộc UBND thành phố'
        },
        {
          name: 'UBND quận, huyện'
        },
        {
          name: 'UBND phường, xã'
        },
        {
          name: 'Cơ quan Trung ương trên TP'
        }
      ])
    )
    .then(async officeTypes =>
      Models.Office.query().insertGraph([
        {
          officeTypeId: officeTypes[0].id,
          name: 'Sở Tài chính',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        },
        {
          officeTypeId: officeTypes[0].id,
          name: 'Sở Công Thương',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 4
        },
        {
          officeTypeId: officeTypes[0].id,
          name: 'Sở Giao thông Vận tải',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 6
        },
        {
          officeTypeId: officeTypes[0].id,
          name: 'Sở Xây dựng',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        },
        {
          officeTypeId: officeTypes[1].id,
          name: 'UBND quận Hải Châu',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        },
        {
          officeTypeId: officeTypes[1].id,
          name: 'UBND quận Ngũ Hành Sơn',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 6
        },
        {
          officeTypeId: officeTypes[1].id,
          name: 'UBND quận Sơn Trà',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 8
        },
        {
          officeTypeId: officeTypes[2].id,
          name: 'UBND phường Mỹ An',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 7
        },
        {
          officeTypeId: officeTypes[2].id,
          name: 'UBND phường Hòa Cường Nam',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 6
        },
        {
          officeTypeId: officeTypes[2].id,
          name: 'UBND phường Khuê Mỹ',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        },
        {
          officeTypeId: officeTypes[3].id,
          name: 'Cục thuế',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        },
        {
          officeTypeId: officeTypes[3].id,
          name: 'Cục Hải quan',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        },
        {
          officeTypeId: officeTypes[3].id,
          name: 'Công an thành phố',
          address: '15 Tạ Mỹ Duật, Đà Nẵng',
          employeesCount: 5
        }
      ])
    );
