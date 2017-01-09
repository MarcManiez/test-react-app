const mysql = require('mysql');

module.exports.db = mysql.createConnection({
  user: 'root',
  database: 'List'
});

module.exports.db.connect();

module.exports.writeData = function (data, callback) {
  console.log('Is this even happening?', data);
  module.exports.db.query('INSERT INTO List (Item) VALUES (?);', data, (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      callback(rows, fields);
    }
  });
};
