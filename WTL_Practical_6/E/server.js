const http = require("http");
const fs = require("fs");

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  const files = fs.createReadStream("WTL_Practical_6/E/Node.js.pdf");
  res.setHeader("Content-Disposition", "attachment; filename=Node.js.pdf");
  files.pipe(res);
};

http.createServer(requestListener).listen(8080);
