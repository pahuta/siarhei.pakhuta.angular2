var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

var rootPath = './dist/aot/';

app.use(express.static(rootPath));
app.all('*', function (req, res) {
    res.sendFile('index.html', { root: rootPath });
});

app.listen(port);