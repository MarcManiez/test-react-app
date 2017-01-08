const requestHandler = require('./requestHandler');
const http = require('http');

const server = http.createServer(requestHandler);
const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);
console.log(`Listening on http://${ip}:${port}`);

