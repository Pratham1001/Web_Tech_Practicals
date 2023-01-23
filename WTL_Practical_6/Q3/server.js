var fs = require('fs');
var http = require('http');

var server = http.createServer((req, res) => {
    if (req.url == '/'){
        res.writeHead(200, { "Content-Type": `text/html` });
        fs.readFile("./index.html",'utf-8', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Whoops! File not found!");
            } else {
                res.write(data);
            }
            res.end();
            }
        );
    } else if (req.url == '/contact'){
        res.writeHead(200, { "Content-Type": `text/html` });
        fs.readFile("./contact.html",'utf-8', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Whoops! File not found!");
            } else {
                res.write(data);
            }
            res.end();
            }
        );
    } else if (req.url == '/about'){
        res.writeHead(200, { "Content-Type": `text/html` });
        fs.readFile("./about_me.html",'utf-8', (error, data) => {
            if (error) {
                res.writeHead(404);
                res.write("Whoops! File not found!");
            } else {
                res.write(data);
            }
            res.end();
            }
        );
    }
    else {
        res.end();
    }
});

server.listen(3000, () => console.log('listening on port 3000'));