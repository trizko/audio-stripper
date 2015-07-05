var exec = require('../helpers/execPromise');
var download = require('../helpers/downloadPromise');
var File = require('../models/File.js');

var DownloadController = function() {};

DownloadController.download = function(request, response){
  var url = request.body.url;

  var file = new File();

  exec('youtube-dl --get-filename ' + url).then(function (stdout) {

    file.construct(stdout);

    return exec('youtube-dl ' + url);

  }).then(function(stdout){

    return exec('ffmpeg -i ' + file.filename_terminal + ' -vn ' + file.musicFilename_terminal);

  }).then(function(stdout){

    return download(response, file.musicFilepath, file.musicFilename);

  }).then(function(stdout){

    return exec('rm -rf ' + file.filename_terminal + ' ' + file.musicFilename_terminal);

  }).catch(function(error){

    throw error;

  });
};

module.exports = DownloadController;
