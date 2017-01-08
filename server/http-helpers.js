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
    module.exports.sendResponse(res, data);
  });
};
