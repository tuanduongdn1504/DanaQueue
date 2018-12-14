const Handler = require('./handler');

const Routes = [
    {
        method: 'GET',
        path: '/api/v1/offices',
        config: Handler.getMany
    },
    {
       method: 'GET',
       path: '/api/v1/offices/{id}',
       config: Handler.getOne
    }
];

module.exports = Routes;

