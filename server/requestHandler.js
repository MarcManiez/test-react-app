const httpHelpers = require('./http-helpers');

const actions = {
  'GET': function (req, res) {
    if (req.url === '/favicon.ico') {
      httpHelpers.sendResponse(res);
    }
    httpHelpers.serveContent(res, req.url);
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
    // send 404
  }
};
