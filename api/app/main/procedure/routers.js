const Handler = require('./handler');

const Routes = [
    {
        method: 'GET',
        path: '/api/v1/procedures',
        config: Handler.getMany
    },
    {
        method: 'GET',
        path: '/api/v1/procedures/{id}',
        config: Handler.getOne
    }
];

module.exports = Routes;

