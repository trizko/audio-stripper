var four04Controller = require('../controllers/four04Controller');
var five00Controller = require('../controllers/five00Controller');

var MiddleWare = function (app) {

  app.use(four04Controller);
  app.use(five00Controller);

};

module.exports = MiddleWare;
