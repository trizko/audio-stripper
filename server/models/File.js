var Formatter = require('../helpers/formatter.js');


var File = function () {
  this.filename = '';
  this.filename_terminal = '';
  this.filepath = '';
  this.musicFilepath = '';
  this.musicFilename = '';
  this.musicFilename_terminal = '';
};

File.prototype.construct = function (stdout) {
  this.filename = stdout.replace('\n', '');
  this.filename_terminal = Formatter.terminalFriendly(this.filename);
  this.filepath = process.cwd() + '/' + this.filename;

  this.musicFilename = this.filename.split('.')[0] + '.mp3';
  this.musicFilename_terminal = Formatter.terminalFriendly(this.musicFilename);
  this.musicFilepath = process.cwd() + '/' + this.musicFilename;

};

module.exports = File
