// trabalhando com classe como função

// Criando uma classe
function criarTeste (){
    this.valor01 = 0;
    this.valor02 = 0;

    // variavel que aponta para uma aerofuction
    var setValor = ((valor01, valor02) => {
        this.valor01 = valor01;
        this.valor02 = valor02;
    });
 // criando uma bind
    this.setValor = setValor;

    var mostraElemento = ( () => {
        console.log(`Valor 01 ${this.valor01}`);
        console.log(`Valor 02 ${this.valor02}`);
    })
    this.mostraElemento = mostraElemento;
}


let a = new criarTeste();
a.setValor(12,12);
a.mostraElemento();

console.log(typeof criarTeste);