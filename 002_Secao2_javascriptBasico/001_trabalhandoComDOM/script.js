document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';

var conteudo = document.getElementById("caixa_azul").innerHTML;
document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>';

var conteudoText = document.getElementById("teste").innerHTML;
//console.log(conteudoText);
document.getElementById("caixa_amarela").innerHTML = '<p>' + conteudoText +'</p>';
