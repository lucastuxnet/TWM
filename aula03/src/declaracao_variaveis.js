// Temos três tipos de variáveis
// var -- escopo global
// let -- escopo de bloco
// const -- variável constante, sem mudança de valor

var mensagem = 4;
const pi = 3.14;
console.log(typeof(mensagem));
var x = 10;

function altera_x(var_x){
    let nro = var_x + 10;
    return nro;
}

function mostraMensagem(var_x){
    //var x = 3;
    var_x = var_x = 3;
    console.log(mensagem);
    console.log(var_x);
    x = 25;
}
x = altera_x(x);
console.log(x);
//mostraMensagem(x);
//console.log(x);

/*
mostraMensagem();
console.log(mensagem);
console.log(pi);

mensagem = 'Como assim???'
mostraMensagem();
console.log(typeof(mensagem));
*/