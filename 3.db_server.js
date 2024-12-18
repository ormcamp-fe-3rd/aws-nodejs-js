const mysql = require("mysql2");

// mysql 연결
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123qwer@",
  database: "sampledb",
});

// DB 생성
connection.query(
  `
    CREATE DATABASE sampledb;
  `,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  }
);

// 테이블 생성
connection.query(
  `
  CREATE TABLE TEST_TABLE (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
  );
  `,
  (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(results);
  }
);
