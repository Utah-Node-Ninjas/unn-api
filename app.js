var restify = require('restify');
var email = require('./controllers/email');

var meetup = require('meetup-api');
var meetup_api = meetup(process.env.MEETUP_API_KEY);
if (! process.env.MEETUP_API_KEY) {
  console.log("WARNING: You must set MEETUP_API_KEY in order to fetch events from meetup.");
}
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
// Fetch current Node-Ninjas events
server.get('/meetup', function (req, res, next) {
  if (! process.env.MEETUP_API_KEY) {
    console.log("WARNING: You must set MEETUP_API_KEY");
    res.json({"error":"You must set MEETUP_API_KEY on the server!"});
    return next();
  }
  meetup_api.getEvents({'group_id' : '15997322'}, function(err,events) {
    res.json(events);
  });
});

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});
