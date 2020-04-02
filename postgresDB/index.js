const { Pool } = require('pg');
const pool = new Pool({
  user: 'avarousu',
  host: 'localhost',
  database: 'app',
  password: '',
  port: 5432,
});


pool.query('SELECT * FROM allapps', (err, res) => {
  console.log(err, res);
  pool.end();
})