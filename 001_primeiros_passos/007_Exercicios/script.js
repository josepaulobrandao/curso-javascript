let dataNascimento = '08/04/1995';
let nome = 'Jose Paulo brandão';
/*Exercicio 2*/

console.log("Olá meu nome é  " + nome + " , eu nasci em " + dataNascimento + " e também estou aprendendo javascritp");

console.log("--------------------------------------");

/*Exercicio 3*/ 
var matriculaAluno = 95798446;
var nomeAluno = "Jose Paulo B.";
var prova1, prova2;
prova1 = 30;
prova2 = 5;

var media = (prova1 + prova2) / 2;
console.log(media);

console.log("Aluno: " + nomeAluno + "\n" + 
            "Matricula: " + matriculaAluno + "\n" +            
            "Prova 1: " + prova1 + "\n" +    
            "Prova 2: " + prova2 + "\n" +    
            "MÉDIA :  " + media +  "\n" );

console.log("--------------------------------------");
/*Exercicio 4*/


var numeroTelefone = "954997061";
console.log("Numero telefone tem quantos digitos: " + numeroTelefone.length);
console.log("Tem 9 digitos? "+ numeroTelefone.length == 9 ? true : false);


console.log("--------------------------------------");

/*Exercicio 5*/

console.log("Potencia: " + Math.pow(32,6));

console.log("--------------------------------------");
console.log("Ilegais: b) , c) , d) ,g) " );

console.log("--------------------------------------");
/*Exercicio 6*/


var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade);
console.log( (7+5) / numero + 2 ); 
console.log(pressao);
console.log(temperatura);
console.log(typeof pressao);
console.log(typeof temperatura);

console.log("--------------------------------------");

/*Exercicio 7*/

var idade = 65;

console.log(idade != 65);
console.log(idade >= 65); 
console.log("65" == idade);
console.log(65 !== idade);
console.log(typeof (idade > 60));
console.log(typeof (idade > 70));

