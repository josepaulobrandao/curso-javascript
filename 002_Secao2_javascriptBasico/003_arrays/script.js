
//função statica
console.log("função statica")
function myFunction () {
    let x = 5;
    let y = 2;

    let soma = x + y;
    console.log(soma);
}


myFunction();
console.log("função dinamica")
//funcao dinamica
function soma_argumento(num1, num2) {
    var soma = num1 + num2;
    console.log(soma);
}
soma_argumento(10, 32);
//
console.log("Variaveis como parametro");
var n1 = 40;
var n2 = 430;

soma_argumento(n1, n2);

function soma_argumento2 (num3, num4) {
let soma = num3 + num4;
return soma;

}

console.log("Resultado da soma: " + soma_argumento2(3,4));

/*
const nome1 = document.querySelector("#calcX").innerHTML = Math.random();
const nome2 = document.querySelector("#calcY").innerHTML = Math.random();


let soma = nome1 + nome2;

function myFunction2 () {
     document.getElementById("resultado").innerHTML = '<p>' + soma + '</p>';
}
*/


function valor_imc (peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}



var meu_peso = document.getElementById("peso").innerHTML;
var minha_altura = document.getElementById("altura").innerHTML;


var meu_imc = valor_imc(meu_peso, minha_altura);

document.getElementById("imc").innerHTML = meu_imc;

console.log(meu_imc)



var alunos = ["Maria", "Jose","Joao"];
var num_primos = [2,3,5,7,11,13];
console.log(num_primos[2]);

var grupos = [
    ["João","maria"],
    ["Pedro","MaISA","LETICIA","jULIO"],
    ["cAROL","aNGELA","mATEUS"]
];

console.log(grupos.length);
console.log(grupos[1][0]);
console.log(grupos[1][1]);
console.log(grupos[1][2]);



var cursos = ["HTML","Java","Javascript","CSS","React"];
cursos.push("Golang");//add um novo elemento no final do array
console.log(cursos);

cursos.unshift("Spring boot");//add um novo elemento no primeiro índice do array
console.log(cursos);

cursos.pop();
console.log(cursos); //remove o último elemento do índice de um array

cursos.shift();
console.log(cursos); // remove o primeiro elemento do índice de um array




var ingredientes = ["pão branco","queijo","presunto"];
ingredientes[0] = "presunto";//subustituindo um elemento
ingredientes[3] = "Banana";//subustituindo um elemento

console.log(ingredientes);

for(let i = 0; i < ingredientes.length; i++){
    console.log(ingredientes[i]);
}


 alunos = ["Maria", "Jose","Joao","Fernanda","lais"];
 console.log(alunos.slice(0,3));
 console.log(alunos.slice(-2,));




