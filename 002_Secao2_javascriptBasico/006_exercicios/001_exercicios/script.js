

function calculadora(numero_1, numero_2) {
    let calculaSoma = numero_1 +  numero_2
    return calculaSoma;
}

let calcula_num_1 = parseInt(document.getElementById("num_1").innerHTML);
let calcula_num_2 = parseInt(document.getElementById("num_2").innerHTML);

let resultadoFinal = parseInt(calculadora(calcula_num_1, calcula_num_2));

let calc_resultado = document.getElementById("resultado").innerHTML = resultadoFinal;





