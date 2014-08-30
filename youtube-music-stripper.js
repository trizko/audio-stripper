var express = require('express');
var exec = require('child_process').exec;
var handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });

var app = express();

//setup handlebars templating engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.post('/download', function(req, res){
  var filename = '';
  exec('youtube-dl --get-filename https://www.youtube.com/watch?v=jgrDsO_aRFo', function(error, stdout, stderr){
    if(error){
      console.error('ERROR:',stderr);
    } else {
      console.log('stdout:',stdout);
      filename = stdout.replace('\n', '');
      exec('youtube-dl https://www.youtube.com/watch?v=jgrDsO_aRFo', function(error, stdout, stderr){
        if(error){
          console.error('ERROR:', stderr);
        } else {
          var filepath = __dirname + '/' + filename;
          res.download(filepath, filename, function(error){
            if(error) {
              console.error(err);
            }
          });
        }
      });
    }
  });
});

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
              app.get('port') +
              '\npress Ctrl-C to terminate');
});
