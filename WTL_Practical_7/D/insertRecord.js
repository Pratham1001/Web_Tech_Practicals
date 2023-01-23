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
    "INSERT INTO Student(Rollno,name, address) VALUES (1,'Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
