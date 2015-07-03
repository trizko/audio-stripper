var exec = require('../helper/execPromise');
var download = require('../helper/downloadPromise');
var FileNames = require('../models/FileNames.js');

var DownloadController = function() {};

DownloadController.download = function(request, response){
  var url = request.body.url;

  var filenames = new FileNames();

  exec('youtube-dl --get-filename ' + url).then(function (stdout) {

    filenames.construct(stdout);

    return exec('youtube-dl ' + url);

  }).then(function(stdout){

    return exec('ffmpeg -i ' + filenames.filename_terminal + ' -vn ' + filenames.musicFilename_terminal);

  }).then(function(stdout){

    return download(response, filenames.musicFilepath, filenames.musicFilename);

  }).then(function(stdout){

    return exec('rm -rf ' + filenames.filename_terminal + ' ' + filenames.musicFilename_terminal);

  }).catch(function(error){

    throw error;

  });
};

module.exports = DownloadController;
