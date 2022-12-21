let http = require("http");

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");

  res.writeHead(200);
  res.write(JSON.stringify(sammy.js));

  res.end(`{"message": "This is a JSON response"}`);
};

http.createServer(requestListener).listen(8000);
