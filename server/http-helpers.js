const fs = require('fs');

module.exports.headers = {
  'Content-Type': 'text/html'
};

module.exports.sendResponse = (res, body, status) => {
  status = status || 200;
  res.writeHead(status, module.exports.headers);
  res.end(body);
};

module.exports.sendError = (res) => {};

module.exports.serveContent = (res, uri) => {
  if (uri === '/') {
    uri = '/index.html';
  }
  fs.readFile('../client' + uri, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (uri.slice(-4) === '.css') {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    }
    module.exports.sendResponse(res, data);
  });
};
