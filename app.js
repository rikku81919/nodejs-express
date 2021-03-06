
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var hello = require('./routes/hello');
var api = require('./routes/api');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/hello', hello.index);
app.get('/moco', hello.moco);
app.get('/mocos', hello.mocos);
app.get('/1/info', api.info);
/*
app.post('/creat', api.creat);
app.get('/read', api.read);
app.put('/upload', api.upload);
app.delete('/delete', api.delete);*/

app.post('/user/:name', api.creat1);
app.get('/user/:name', api.read1);
/*
app.put('/user/:name', api.upload1);
app.delete('/user/:name', api.delete1);
*/
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
