# Usando Rotas do angularjs com nodejs junto com uma API

Para rodar o projeto é importante instalar suas dependencias que já estão adicionadas no `package.json`: 
> npm install

### Objetivo do Projeto

O projeto tem como objetivo mostrar como criar um projeto usando `angularjs + nodejs` sem ter problemas com as rotas do `angularjs` conflitarem com as rotas da API do `nodejs`.

### Configurando a rota da index do angular dentro do nodejs

Para o codigo abaixo deve ser levado em consideração a localização do arquivo `routesWeb.js`.
> Local: web/routes/routesWeb.js

```javascript
'use strict';
var express = require('express');
var path = require('path');

module.exports = function(app) {

    var path_web = path.resolve(__dirname, '..');
    var path_origin = path.resolve(__dirname, '../../');
   
    app.use('/scripts',express.static(path_web + '/scripts'));
    app.use('/pages',express.static(path_web + '/pages'));
    app.use('/node_modules',express.static(path_origin + '/node_modules'));

    app.route('/*')
    .get(function(req, res){
        res.sendFile(path_web + '/pages/ng-index.html');
    });

}
```

### Configurando as rotas da API nodejs

Para o codigo abaixo deve ser levado em consideração a localização do arquivo `pessoaRota.js`.
> Local: api/routes/pessoaRota.js

```javascript
'use strict';
module.exports = function(app) {

    var pessoasCtrl = require('../controllers/pessoasController');  

    app.route('/api/pessoas')
        .get(pessoasCtrl.obter_todos_pessoas);

    app.route('/api/pessoas/:pessoaId')
        .get(pessoasCtrl.obter_pessoa_por_id);

    app.route('/api/pessoasFeias')
        .get(pessoasCtrl.obter_pessoas_feias);
        
};
```

### Configurando o servidor para essa estrutura

É importante lembrar que as rotas da API deve ser chamadas primeiro que as rotas do angularjs.

```javascript
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
```

### Observações 

Agora é só configurar as rotas do seu projeto angularjs e ser feliz.

> Rotas do angularjs no projeto: web/scripts/ng-routes.js
> Paginas criadas no projeto: web/pages/

