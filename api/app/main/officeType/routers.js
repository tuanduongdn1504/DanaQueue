const Handler = require('./handler');

const Routes = [
    {
        method: 'GET',
        path: '/api/v1/officeType',
        config: Handler.getMany
    },
    {
        method: 'GET',
        path: '/api/v1/officeType/{id}',
        config: Handler.getOne
    }
];

module.exports = Routes;

