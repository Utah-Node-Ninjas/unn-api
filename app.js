var restify = require('restify');
var email = require('./controllers/email');

var server = restify.createServer({
	name: 'UNN-API'
});

server
	.use(restify.fullResponse())
	.use(restify.bodyParser());

server.get('/', function (req, res, next) {
  console.log('Hello World');
});

server.post('/landing_page_email', email.landingPage);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});