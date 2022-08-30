var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'sql.freedb.tech', // Replace with your host name
  user: 'freedb_sip_db_admin',      // Replace with your database username
  password: 'Jp@SRCvz&t4$apV',      // Replace with your database password
  database: 'freedb_sip_db' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;