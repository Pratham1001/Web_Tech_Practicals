var mysql = require("mysql");

var con = mysql.createConnection({
  host: "sql.freedb.tech", //localhost
  user: "freedb_shapecharge", //root
  password: "HAwQ*DY?tsXhyp5",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
