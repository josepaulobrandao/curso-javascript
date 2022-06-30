
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



var meu_peso = document.querySelector("#peso").innerHTML;
var minha_altura = document.querySelector("#altura").innerHTML;


var meu_imc = valor_imc(meu_peso, minha_altura);
document.querySelector("#imc").innerHTML = meu_imc;

console.log(meu_imc)