var mysql = require("mysql");

var con = mysql.createConnection({
  host: "sql.freedb.tech", //localhost
  user: "freedb_shapecharge", //root
  password: "HAwQ*DY?tsXhyp5",
  database: "freedb_javapracdb",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("connected!");
  //Select all customers and return the result object:
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
