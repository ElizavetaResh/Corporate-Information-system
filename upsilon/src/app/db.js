const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '46.146.117.120',
  database: 'postgres',
  password: '617',
  port: 5432,
}); 

module.exports = pool