var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(filepath, callback){
  fs.readFile(filepath, 'utf8', function(err, data) {     // without 'utf8' data is a buffer object, instead of a string.
    if (err) throw err; //new Error('Error');
    callback(data);
  });
};

exports.isUrlInList = function(filepath, url, callback){
  //check if the url exists in sites.txt
  exports.readListOfUrls(filepath, function(data){
    callback(data.indexOf(url) !== -1);
  });
};

exports.addUrlToList = function(filepath, url){
  exports.isUrlInList(filepath, url, function(found){
    if (!found) {
      //add url to sites.txt
      fs.readFile(filepath, 'utf8', function(err, data) {
        if (err) {throw new Error('Error');}
        var text = data + '\n' + url;
        console.log(text);
        fs.writeFile(filepath, text, function(err) {
          if (err) {throw new Error('Error');}
          console.log('text', text)
        });
      });
    }
  });
};

exports.isURLArchived = function(){
};

exports.downloadUrls = function(){
};
