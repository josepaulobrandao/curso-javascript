var aluno  = {
    'nome':'Maria',
    'sobre': 'Pereira',
    'ano_nasc':1992,
    'idade_aluno':function() {
     var calculaIdade = 2022 - this.ano_nasc;
     return calculaIdade;
    },
    'nome_completo':function () {
        var n_completo = this.nome + " " + this.sobre
        return n_completo;
    }
}

console.log(aluno.nome_completo());
console.log(aluno.idade_aluno() + " Anos");

console.log(Math.round(4.5));

console.log(typeof document.getElementById("tudo_obj").innerHTML);
window.document.getElementById("tudo_obj");

console.log(typeof window.document.getElementById("tudo_obj"));

