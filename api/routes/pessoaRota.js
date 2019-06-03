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