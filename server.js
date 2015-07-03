var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });

var app = express();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//set up Routes
require('./server/routes/all.js')(app);

//set up Error Handling middleware
require('./server/middleware/ErrorHandler.js')(app);

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
              app.get('port') +
              '\npress Ctrl-C to terminate');
});
