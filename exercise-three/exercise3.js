const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('You send request for / route!');
});
app.get('/Card', function (req, res) {
  res.send('You send request for Card route!');
});
app.get('/Client', function (req, res) {
    res.send('You send request for Clientroute!');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});