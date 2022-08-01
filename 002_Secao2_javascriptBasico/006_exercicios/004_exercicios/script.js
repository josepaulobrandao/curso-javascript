var curso = {
    'titulo':"Aprenda programação em Python",
    'categoria':['programacao','tecnologia','python'],
    'n_aval_5_estrelas':420,
    'n_aval_4_estrelas':80,
    'n_aval_3_estrelas':33,
    'n_aval_2_estrelas':20,
    'n_aval_2_estrelas':4
}
let resultado = curso.categoria[0];
let minha_categoria = document.querySelector("#categoria").innerHTML = resultado;

console.log(curso.categoria[0]);