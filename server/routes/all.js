var HomeController = require('../controllers/HomeController');
var DownloadController = require('../controllers/DownloadController');

var Routes = function (app) {

  app.get('/', HomeController.home);
  app.post('/download', DownloadController.download);

};

module.exports = Routes;
