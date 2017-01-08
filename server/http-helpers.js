const fs = require('fs');

module.exports.headers = {
  'Content-Type': 'text/html'
};

module.exports.sendResponse = (res, body, status, headers) => {
  headers = headers || module.exports.headers;
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
      module.exports.sendResponse(res, data, null, {'Content-Type': 'text/css'});
    }
    module.exports.sendResponse(res, data);
  });
};
