const httpHelpers = require('./http-helpers');

const actions = {
  'GET': function (req, res) {
    if (req.url === '/favicon.ico') {
      httpHelpers.serveContent(res, req.url, data => {
        httpHelpers.sendResponse(res, data, 200, {'Content-Type': 'image/x-icon'});
      });
      httpHelpers.sendResponse(res, 'favicon served');
    } else if (req.url.slice(-4) === '.css') {
      httpHelpers.serveContent(res, req.url, data => {
        httpHelpers.sendResponse(res, data, 200, {'Content-Type': 'text/css'});
      });
    } else {
      httpHelpers.serveContent(res, req.url);
    }
  },
  'POST': function (req, res) {
    httpHelpers.serveContent(res, req.url);
  }
};

module.exports = function (req, res) {
  console.log(`Serving ${req.method} request from ${req.url}`);

  const action = actions[req.method];

  if (action) {
    action(req, res);
  } else {
    httpHelpers.sendError(res);
  }
};
