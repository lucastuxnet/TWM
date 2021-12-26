/* 
- A função 
O código dentro da função será executado quando "algo" invocar (chamar) a função:

function myFunction(p1, p2) {
  return p1 * p2;   // A função retorna o produto de p1 e p2
}

Quando ocorre um evento (quando um usuário clica em um botão)
Quando é invocado (chamado) a partir do código JavaScript

- O document.form.visor.value faz referência ao valor do elemento (neste caso, <input>)
   e com o nome visor do formulário (<form>) no documento (documento)
  
  Como exemplo para obter um elemento de dentro de um formulário

var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];

*/


/* Funções da calculadora */

/* Inserir número */

function valor(numero){
    document.form.visor.value = document.form.visor.value + numero
}

/* Resultado da operação */

function resultado() {
    var result = document.form.visor.value;
    if(result){
    document.form.visor.value = eval(result)
    }
}

/* Limpar visor */

function limpar() {
    document.form.visor.value = "";
}

/* Remove caracter digitado errado */

function remover() {
    var result = document.form.visor.value;
    document.form.visor.value = result.substring(0,result.length-1);
}
