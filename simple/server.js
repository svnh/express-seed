var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

///////////
// Config
///////////
app.use(function(err, req, res, next){
  if(!err) return next();

  console.error('Error: ', err.stack);
  res.status(500).send(err);
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});

///////////
// Routes
///////////
app.get('/', function() {
  res.send(200);
});
