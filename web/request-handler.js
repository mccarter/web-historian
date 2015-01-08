var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers')

var headers = httpHelpers.headers;
var sendResponse = httpHelpers.sendResponse;
var serveAssets = httpHelpers.serveAssets;

var actions = {
  GET: function(req,res) {
    //request has a property called url (request.url)
    //if request.url exists, load default page
    //access default page: call serve assets
    serveAssets(res, './public/index.html');      // might need to work on this pathname
  },
  POST: function(req,res) {
    sendResponse(res, data, 201);     // null instead of headers?
  },
  OPTIONS: function(req,res) {
    sendResponse(res, data);
  }
};


exports.handleRequest = function (req, res) {
  // res.end(archive.paths.list);

  var action = actions[req.method];
  if (action) {
    action(req, res);
    //more functionality
  }

};
