
var funcionario = {
    'nome': 'Jose Paulo Brandão',
    'ana_nasc':1972,
    'cpf':'444.444.444.44',
    'cargo':'Analista de sistemas'
};

console.log("---------------//-----------------");
console.log(funcionario['nome']);
console.log(funcionario.nome);
console.log(funcionario.ana_nasc);
console.log(funcionario.cpf);

if (funcionario.ana_nasc != 1972) {
    console.log("Ano é diferente");
}else {
    console.log("Ano não é direferente");
}

console.log("---------------//-----------------");
funcionario.cargo = "Gerente de tecnologia";
funcionario.cnh = "96999-4497-4";
console.log(funcionario);

var cursos = [
    {
        'titulo':'Aprenda programação em java',//objeto 1
        'avaliacaoes':64,
        'alunos':2300,
        'categorias':['Programação','tecnologia']
    },
    {
        'titulo':'Aprenda programação em Python',//objeto 2
        'avaliacaoes':56,
        'alunos':4664,
        'categorias':['Programação','tecnologia']
    },
    {
        'titulo':'Aprenda programação em excel',//objeto 3
        'avaliacaoes':62,
        'alunos':33,
        'categorias':['Programação','Gestão']
    }
]

console.log(typeof cursos);
            //variavel//posicao//chave//posicao/valor
console.log(cursos[1].categorias[0]);
cursos[2].categorias[1] = "Programação em javascdript";
console.log(cursos[2].categorias[1]);
console.log(cursos);



