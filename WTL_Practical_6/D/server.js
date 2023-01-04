const http = require('http');

const requestListener = (req,res) => {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
    res.writeHead(200);
    res.write(`
        id,name,email
        1,John Doe,john@doe.com
        2,Jane Doe,jane@doe.com
        `);
    res.end();
};
http.createServer(requestListener).listen(8000)