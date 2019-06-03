exports.obter_todos_pessoas = (req, res) =>{
    res.send(JSON.stringify({ success: true, pessoas: pessoas }));
};

exports.obter_pessoa_por_id = (req, res) =>{
    var parametro = req.params.pessoaId;
    console.log(parametro);
    var pessoa = buscarPessoa(parametro);
    if(pessoa == null){
        res.send(JSON.stringify({ success: false, message: 'Pessoa nao encontrada.' }));
    }else{
        res.send(JSON.stringify({ success: true, pessoa: pessoa }));
    }
};

exports.obter_pessoas_feias = (req, res) =>{
    res.send(JSON.stringify({ success: true, pessoas: pessoasFeias }));
};


var pessoas = [
    {id: 1, nome: "Filipe", sexo: "Masculino"},
    {id: 2, nome: "Lino", sexo: "Feminino"},
    {id: 3, nome: "Mario", sexo: "Indefinido"},
    {id: 4, nome: "Jeferson", sexo: "Masculino"},
];

var pessoasFeias = [
    {id: 1, nome: "Lino", sexo: "Feminino"},
    {id: 2, nome: "Mario", sexo: "Indefinido"},
    {id: 3, nome: "Jeferson", sexo: "Masculino"},
];

buscarPessoa = (id) =>{
    for(var i= 0; i < pessoas.length; i++){
        if(pessoas[i].id == id){
            return pessoas[i];
        }
    }

    return null;
} 