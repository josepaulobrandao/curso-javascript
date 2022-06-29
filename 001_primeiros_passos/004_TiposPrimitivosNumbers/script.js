//Strings


var ano_nascimento = 1987;
var preco = 16.99;//float
var temperatura = -5;
var numero_grante = 2.2e45;//exponecial = 2.2 x 10^45


var num1 = 30;
var num2 = 14;

var soma = num1 + num2;
var subtracao = num1 - num2;
var divisao = num1 / num2;
var multiplicacao = num1 * num2;


var media = (num1 + num2) / 2;
console.log('A média é: ' + media);
console.log(Math.pow(num1, num2));

var increment = 20;

increment+=5;

console.log(increment);

increment = 10;
increment++;

console.log(increment);


var ddd = 21;
var telefone  = 971946499;

var ddd_string = ddd.toString();
var tel_string = telefone.toString();

console.log(ddd_string + ' - '+ tel_string);

var converter_idade = '18';
converter_idade = parseInt(converter_idade);
converter_idade++;
console.log(converter_idade);
