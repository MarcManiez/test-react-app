module.exports.headers = {
  'Content-Type': 'text/plain'
};

module.exports.sendResponse = (res, body, status) => {
  status = status || 200;
  res.writeHead(status, module.exports.headers);
  res.end(body);
};
