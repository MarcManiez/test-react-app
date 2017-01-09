const fs = require('fs');

module.exports.headers = {
  'Content-Type': 'text/html'
};

module.exports.sendResponse = (res, body, status, headers) => {
  headers = headers || module.exports.headers;
  status = status || 200;
  res.writeHead(status, headers);
  res.end(body);
};

module.exports.sendError = (res) => {
  console.log('sending error');
  module.exports.serveContent(res, '/404.html', data => {
    module.exports.sendResponse(res, data, 404);
  });
};

module.exports.serveContent = (res, uri, callback) => {
  if (uri === '/') {
    uri = '/index.html';
  }
  fs.readFile('../client' + uri, (err, data) => {
    if (err) {
      console.log(err);
      module.exports.sendError(res);
    } else {
      if (callback) {
        callback(data);
      } else {
        module.exports.sendResponse(res, data);
      }
    }
  });
};
