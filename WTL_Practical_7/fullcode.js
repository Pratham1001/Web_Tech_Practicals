const mysql = require("mysql");

// create connection to MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "DB",
});

// connect to the database
connection.connect();

// insert 10 records into the student table
for (let i = 1; i <= 10; i++) {
  let sql = `INSERT INTO student (rollno, name, address, contact_no, dept) VALUES (${i}, 'student${i}', 'address${i}', 'contact${i}', 'dept${i}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Record inserted with id: ${result.insertId}`);
  });
}

// update a student's record
let sql_update = `UPDATE student SET address = 'updated address' WHERE rollno = 1`;
connection.query(sql_update, function (err, result) {
  if (err) throw err;
  console.log(`Record updated with id: ${result.insertId}`);
});

// delete a student's record
let sql_delete = `DELETE FROM student WHERE rollno = 1`;
connection.query(sql_delete, function (err, result) {
  if (err) throw err;
  console.log(`Record deleted with id: ${result.insertId}`);
});

// display all records ordered by name
let sql_select = `SELECT * FROM student ORDER BY name`;
connection.query(sql_select, function (err, result) {
  if (err) throw err;
  console.log(result);
});

// close the connection
connection.end();
