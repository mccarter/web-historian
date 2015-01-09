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
    serveAssets(res, './public/loading.html');

    //create data variable
    var data = '';
    //write event handler 'on' to concat data string
    req.on('data', function(chunk) {
      data += chunk;
    });
    //write 'end' event to gain access to complete data (url)
    req.on('end', function(){
      // check for format of url
        //parse url, cutting off first 4 characters
      var url = data.slice(4);
      archive.addUrlToList('../archives/sites.txt', url);
    });

    // console.log(req.url);
    //send GET request to worker server
    //when worker responds, send data (html) to client

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
  }

};
