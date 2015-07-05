var Promise = require('bluebird');

var downloadPromise = function (response, filepath, filename) {
  return new Promise(function(resolve, reject){
    response.download(filepath, filename, function(error){
      if(error) {
        return reject(error);
      }
      resolve();
    });
  });
};

module.exports = downloadPromise;
