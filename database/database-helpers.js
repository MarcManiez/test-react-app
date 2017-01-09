const mysql = require('mysql');

module.exports.db = mysql.createConnection({
  user: 'root',
  database: 'List'
}).connect();

module.exports.writeData = function (data, callback) {
  module.exports.db.query('INSERT INTO (Item) VALUES (?);', data, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      callback(rows, fields);
    }
  });
};
