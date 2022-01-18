const path = require('path');
const parse = require('pg-connection-string').parse;

module.exports = ({env}) => {
  if (process.env.NODE_ENV == 'production') {
    const config = parse(process.env.DATABASE_URL); 
    config.ssl = { rejectUnauthorized: false };
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: true
          },
        },
        debug: false,
      },
    };
  } else {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
        debug: true,
      },
    };
  }
};
