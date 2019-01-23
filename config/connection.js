const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "brugers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error(`error : ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;