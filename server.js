var express = require('express');
var app = express();
// var port = process.env.PORT || 8000;
var port = 8000;

app.use(express.static('./dist/'));
app.listen(port);