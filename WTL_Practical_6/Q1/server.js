const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": `text/html` });
    fs.readFile("./index.html", "utf-8", (error, data) => {
      if (error) {
        res.writeHead(404);
        res.write("Whoops! File not found!");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url == "/pdf") {
    res.setHeader("Content-Type", "application/pdf");
    const files = fs.createReadStream("./sample.pdf");
    res.setHeader("Content-Disposition", "attachment; filename=sample.pdf");
    files.pipe(res);
  } else if (req.url == "/csv") {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.writeHead(200);
    res.write(`
            id,name,email
            1,Abel Doe,Abel@doe.com
            2,Jennifer Doe,Jennifer@doe.com
            `);
    res.end();
  } else if (req.url == "/json") {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Disposition", "attachment; filename=data.json");
    res.writeHead(200);
    res.write(`
            {
                "id": 1,
                "name": "Abel Doe",
                "email": "Abel@doe.com"
            },
            {
                "id": 2,
                "name": "Jennifer Doe",
                "email": "Jennifer@doe.com"
            }
            `);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("listening on 3000");
});
