const httpHelpers = require('./http-helpers');

const actions = {
  'GET': function (req, res) {
    
  },
  'POST': function (req, res) {
    
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
