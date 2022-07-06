
let inputValue;

function calculaFirerenheit (inputValue) {
    f = (9 * inputValue / 5) + 32;
    return f;
}

let c = document.querySelector("#graus").innerHTML;

let meu_resultado = calculaFirerenheit(c);
document.querySelector("#resultado").innerHTML = meu_resultado;
console.log(meu_resultado);



