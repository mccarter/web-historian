var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.sendResponse = function(res, data, statusCode) {
  var statusCode = statusCode || 200;
  res.writeHead(statusCode, exports.headers);
  res.end((data));
};

exports.serveAssets = function(res, asset, callback) {
  fs.readFile(asset, 'utf8', function(err, data) {
    // console.log(data);
    exports.sendResponse(res, data, 200);
  });
};



// when it just won't load when things are showing up, call Issaq
