var request = require('superagent');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var apiKey = 'SuINAWM3vE20Wu3VIA34vOo4vwaAbAob';

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/api/suggestions_and_resolutions/:query', function(req, response, next) {
  request.get("http://terminal2.expedia.com/x/suggestions/flights?")
  .query({query: req.params.query})
  .query({apikey: apiKey})
  .end(function(err, res){
    response.json(res.body.sr[0]);
    next();
  });
});

app.get('/api/flight_search/:query', function(req, response, next) {
  console.log('got here')
  request.get('http://terminal2.expedia.com:80/x/mflights/search?')
    .query(req.params.query)
    .query({apikey: apiKey})
    .end(function(err, res) {
      console.log(res.body);
      response.json(res.body);
      next();
    });
});




app.listen(port, function() {
  console.log('Server is now listening on port ' + port);
});



