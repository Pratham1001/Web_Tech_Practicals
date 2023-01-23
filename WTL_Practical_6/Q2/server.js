const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "video/mp4" });
  var rs = fs.createReadStream("sample.mp4");
  rs.pipe(res);
});

server.listen(3000, () => console.log("listening on port 3000"));
