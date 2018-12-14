const Handler = require('./handler');

const Routes = [
    {
        method: 'GET',
        path: '/api/v1/notifications',
        config: Handler.getMany
    },
    {
        method: 'GET',
        path: '/api/v1/notifications/{id}',
        config: Handler.getOne
    },
    {
        method: 'POST',
        path: '/api/v1/notifications/token',
        config: Handler.createToken
    },
    {
        method: 'POST',
        path: '/api/v1/notifications',
        config: Handler.createNotify
    }
];

module.exports = Routes;

