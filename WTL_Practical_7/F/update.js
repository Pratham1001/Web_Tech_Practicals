var mysql = require("mysql");

var con = mysql.createConnection({
  host: "sql.freedb.tech", //localhost
  user: "freedb_shapecharge", //root
  password: "HAwQ*DY?tsXhyp5",
  database: "freedb_javapracdb",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
