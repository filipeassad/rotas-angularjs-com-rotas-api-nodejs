var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser());


var server = app.listen(port, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Aplicação está on nesse endereço http://%s:%s", host, port)
});

require('./api/routes/pessoaRota.js')(app);
require('./web/routes/routesWeb.js')(app);