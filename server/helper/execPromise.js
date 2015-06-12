var Promise = require('bluebird');
var exec    = require('child_process').exec;

var execPromise = function (command) {
  return new Promise(function (resolve, reject) {
    exec(command, function(error, stdout, stderr){
      if(error){
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
};

module.exports = execPromise;
