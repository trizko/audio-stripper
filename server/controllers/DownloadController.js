var exec = require('../helper/execPromise');
var Formatter = require('../helper/formatter.js');
var Promise = require('bluebird');

var DownloadController = function() {};

DownloadController.download = function(req, res){
  var url = req.body.url;

  var filename = '';
  var filename_terminal = '';
  var musicFilepath = '';
  var musicFilename = '';
  var musicFilename_terminal = '';

  exec('youtube-dl --get-filename ' + url).then(function (stdout) {

    filename = stdout.replace('\n', '');
    filename_terminal = Formatter.terminalFriendly(filename);

    return exec('youtube-dl ' + url);

  }).then(function(stdout){

    filepath = process.cwd() + '/' + filename;
    musicFilename = filename.split('.')[0] + '.mp3';
    musicFilename_terminal = Formatter.terminalFriendly(musicFilename);
    musicFilepath = process.cwd() + '/' + musicFilename;

    return exec('ffmpeg -i ' + filename_terminal + ' -vn ' + musicFilename_terminal);

  }).then(function(stdout){
    return new Promise(function(resolve, reject){
      res.download(musicFilepath, musicFilename, function(error){
        if(error) {
          return reject(error);
        }
        resolve();
      });
    });
  }).then(function(stdout){
    return exec('rm -rf ' + filename_terminal + ' ' + musicFilename_terminal);
  }).catch(function(error){
    throw error;
  });
};

module.exports = DownloadController;
