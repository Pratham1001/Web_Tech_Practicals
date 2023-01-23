var mysql = require("mysql");

var con = mysql.createConnection({
  host: "sql.freedb.tech", //localhost
  user: "freedb_shapecharge", //root
  password: "HAwQ*DY?tsXhyp5",// ""
  database: "freedb_javapracdb",//nodejsdb
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
