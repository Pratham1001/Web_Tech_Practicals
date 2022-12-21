let http = require("http");
let fs = require("fs");
let handleRequest = (request, response) => {
  response.writeHead(200, { "Content-Type": `text/html` });
  fs.readFile(
    "/workspaces/Web_Technoligies_Practicals/WTL_Prac6/B/index.html",
    null,
    function (error, data) {
      if (error) {
        response.writeHead(404);
        response.write("Whoops! File not found!");
      } else {
        response.write(data);
      }
      response.end();
    }
  );
};
http.createServer(handleRequest).listen(9000);
