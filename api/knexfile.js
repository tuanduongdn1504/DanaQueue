const path = require('path');

const BASE_DB_PATH = path.join(__dirname, 'app', 'database');

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost:5432/DanaQueue',
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost:5432/DanaQueueTest',
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_DB_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds')
    }
  }
};
