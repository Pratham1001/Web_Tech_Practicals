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
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
  ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
